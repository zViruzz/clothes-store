import { savePurchaseToDB } from '@/libs/database'
import prisma from '@/libs/prisma'
import { CheckoutDataSchema } from '@/libs/schemas/checkout'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const body = await request.json()
		const session = await getServerSession()
		const user = await prisma.user.findUnique({
			where: {
				email: session?.user?.email ?? '',
			},
		})

		const checkoutData = {
			userId: user?.id ?? '',
			username: user?.name ?? '',
			email: user?.email ?? '',
			...body,
		}

		const validatedData = CheckoutDataSchema.parse(checkoutData)

		const res = await savePurchaseToDB(validatedData)
		return NextResponse.json({
			success: true,
			message: 'Data validated correctly',
			data: {
				id: res?.id,
				...validatedData,
			},
		})
	} catch (error) {
		if (error instanceof Error && 'errors' in error) {
			return NextResponse.json(
				{
					success: false,
					message: 'Data invalid',
					errors: error.errors,
				},
				{ status: 400 },
			)
		}

		// Manejo de otros errores inesperados
		return NextResponse.json(
			{
				success: false,
				message: 'Internal server error',
			},
			{ status: 500 },
		)
	}
}
