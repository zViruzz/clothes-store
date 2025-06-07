import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { NextResponse } from 'next/server'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

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
	try {
		const body = await request.json()

		if (!body.key) {
			return NextResponse.json(
				{ error: "The 'body.key' property is required in the request body." },
				{ status: 400 },
			)
		}

		const command = new GetObjectCommand({
			Bucket: process.env.AWS_BUCKET_NAME,
			Key: body.key,
		})

		const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 })

		return new NextResponse(JSON.stringify({ downloadUrl: url }), { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: 'An error occurred while generating the download URL.' },
			{ status: 500 },
		)
	}
}
