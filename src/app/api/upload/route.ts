import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import prisma from '@/libs/prisma'

const uploadDir = '/app/receipt' // Ruta del volumen persistente en Railway

export async function POST(request: Request) {
	const formData = await request.formData()
	const file = formData.get('receipt') as File
	const paymentDataId = formData.get('paymentDataId') as string

	if (!file || !paymentDataId) {
		return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 })
	}

	try {
		// Guardar el archivo en el volumen persistente
		const buffer = await file.arrayBuffer()
		const filename = `${Date.now()}-${file.name}`
		const filePath = path.join(process.cwd(), uploadDir, filename)

		await fs.promises.writeFile(filePath, Buffer.from(buffer))

		// Guardar la ruta en la base de datos
		await prisma.paymentData.update({
			where: { id: paymentDataId },
			data: { receiptPath: `/uploads/${filename}` },
		})

		return NextResponse.json({
			message: 'Comprobante subido exitosamente',
			path: `/uploads/${filename}`,
		})
	} catch (error) {
		console.error('Error:', error)
		return NextResponse.json({ error: 'Error al subir el comprobante' }, { status: 500 })
	}
}
