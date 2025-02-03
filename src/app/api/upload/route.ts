import fs from 'fs'
import path from 'path'
import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

const UPLOAD_DIR =
	process.env.RAILWAY_VOLUME_MOUNT_PATH || path.join(process.cwd(), 'receipt')

export async function POST(request: Request) {
	const formData = await request.formData()
	const file = formData.get('receipt') as File
	const paymentDataId = formData.get('paymentDataId') as string

	if (!file || !paymentDataId) {
		return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 })
	}

	try {
		const buffer = await file.arrayBuffer()
		const filename = `${Date.now()}-${file.name}`
		const filePath = path.join(UPLOAD_DIR, filename)

		await fs.promises.writeFile(filePath, Buffer.from(buffer))

		await prisma.paymentData.update({
			where: { id: paymentDataId },
			data: { receiptPath: path.join(UPLOAD_DIR, filename) },
		})

		return NextResponse.json({
			message: 'Comprobante subido exitosamente',
			path: path.join(UPLOAD_DIR, filename),
		})
	} catch (error) {
		console.error('Error:', error)
		return NextResponse.json({ error: 'Error al subir el comprobante' }, { status: 500 })
	}
}
