import path from 'node:path'
import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'
import { S3Client } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'

if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
	throw new Error('Missing AWS_ACCESS_KEY_ID or AWS_SECRET_ACCESS_KEY')
}

const s3Client = new S3Client({
	region: process.env.AWS_S3_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	},
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

		const parallelUploads3 = new Upload({
			client: s3Client,
			params: {
				Bucket: process.env.AWS_BUCKET_NAME ?? 'clothes-store',
				Key: path.join(UPLOAD_DIR, userId, filename),
				Body: Buffer.from(await file.arrayBuffer()),
				ContentType: file.type,
			},
			queueSize: 3,
		})

		parallelUploads3.on('httpUploadProgress', (progress) => {
			console.log('Upload progress', progress)
		})

		await parallelUploads3.done()

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
