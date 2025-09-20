import { NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import crypto from 'node:crypto'

if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
	throw new Error('Missing AWS_ACCESS_KEY_ID or AWS_SECRET_ACCESS_KEY')
}

// Reutilizas la configuración del cliente S3 que ya tienes
const s3Client = new S3Client({
	region: process.env.AWS_S3_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	},
})

// Esta función genera un nombre de archivo único y seguro
const generateFileName = (bytes = 34) => crypto.randomBytes(bytes).toString('hex')

export async function POST(request: Request) {
	// Aquí podrías añadir una capa de seguridad para verificar que el usuario es un administrador

	const { contentType, folder } = await request.json()
	console.log('result')
	console.log(contentType)
	console.log(folder)

	if (!contentType || !folder) {
		return NextResponse.json(
			{ error: 'Tipo de archivo o carpeta no especificados' },
			{ status: 400 },
		)
	}

	try {
		const UPLOAD_DIR = folder // 'products', 'categories', etc.
		const fileName = generateFileName()

		const command = new PutObjectCommand({
			Bucket: process.env.AWS_BUCKET_NAME_IMAGES,
			Key: `${UPLOAD_DIR}/${fileName}`,
			ContentType: contentType,
		})

		// Genera la URL firmada que el cliente usará para subir el archivo
		const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 }) // La URL es válida por 60 segundos
		console.log('signedUrl', signedUrl)

		return NextResponse.json({
			url: signedUrl,
			// Devuelves la URL final de CloudFront que se guardará en la DB
			finalUrl: `https://${process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN}/${UPLOAD_DIR}/${fileName}`,
		})
	} catch (error) {
		console.error('Error al generar la URL firmada:', error)
		return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
	}
}
