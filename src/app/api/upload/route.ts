import path from 'path'
import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'
import { S3 } from 'aws-sdk'

const s3 = new S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
})

export async function POST(request: Request) {
	const formData = await request.formData()
	const file = formData.get('receipt') as File
	const userId = formData.get('userId') as string
	const paymentDataId = formData.get('paymentDataId') as string

	if (!file || !paymentDataId) {
		return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 })
	}

	try {
		const UPLOAD_DIR = 'proof-of-payment'
		const filename = `${Date.now()}-${file.name}`
		const receiptPath = path.join(UPLOAD_DIR, userId, filename)

		const params = {
			Bucket: process.env.AWS_BUCKET_NAME ?? 'clothes-store',
			Key: path.join(UPLOAD_DIR, filename),
			Body: Buffer.from(await file.arrayBuffer()),
			ContentType: file.type,
		}

		const data = await s3.upload(params).promise()

		await prisma.paymentData.update({
			where: { id: paymentDataId },
			data: { receiptPath },
		})

		return NextResponse.json({
			message: 'Comprobante subido exitosamente',
			path: receiptPath,
		})
	} catch (error) {
		console.error('Error:', error)
		return NextResponse.json({ error: 'Error al subir el comprobante' }, { status: 500 })
	}
}
