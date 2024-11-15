import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const allUsers = await prisma.user.findMany()
	console.log('🚀 ~ GET ~ allUsers:', allUsers)
	return NextResponse.json('Hello world')
}
