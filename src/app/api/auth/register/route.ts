import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.json()

	// saveUserDB(data)
	console.log('🚀 ~ POST ~ data:', data)

	const user = {
		username: data.username,
		email: data.email,
	}

	return NextResponse.json(user)
}
