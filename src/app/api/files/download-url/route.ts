import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { NextResponse } from 'next/server'

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

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const key = searchParams.get('key')

		if (!key) {
			return NextResponse.json(
				{ error: "The 'body.key' property is required in the request body." },
				{
					status: 400,
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Content-Type': 'application/json',
					},
				},
			)
		}

		const command = new GetObjectCommand({
			Bucket: process.env.AWS_BUCKET_NAME,
			Key: key,
		})

		const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
		console.log('url', {
			url: url,
		})

		return new NextResponse(JSON.stringify({ downloadUrl: url }), {
			status: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		})
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: 'An error occurred while generating the download URL.' },
			{ status: 500 },
		)
	}
}
