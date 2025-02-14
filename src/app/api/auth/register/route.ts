import prisma from '@/libs/prisma'
import { UserRegisterSchema } from '@/libs/schemas/userRegister'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { ZodError } from 'zod'

export async function POST(request: Request) {
	try {
		const data = await request.json()
		const user = UserRegisterSchema.parse(data)

		const userFound = await prisma.user.findUnique({
			where: {
				email: user.email,
			},
		})

		if (userFound) {
			return NextResponse.json(
				{
					success: false,
					message: 'User already exists',
				},
				{ status: 409 },
			)
		}

		const hashedPassword = await bcrypt.hash(data.password, 10)

		await prisma.user.create({
			data: {
				name: user.username,
				email: user.email,
				password: hashedPassword,
				emailVerified: false,
			},
		})

		return NextResponse.json({
			success: true,
			message: 'Registro exitoso',
		})
	} catch (error) {
		if (error instanceof ZodError) {
			return NextResponse.json(
				{
					success: false,
					message: 'Invalid registration data',
					errors: error.errors,
				},
				{ status: 400 },
			)
		}

		return NextResponse.json(
			{
				success: false,
				message: 'Error registering user',
			},
			{ status: 500 },
		)
	}
}
