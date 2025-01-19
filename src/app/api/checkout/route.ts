import { savePurchaseToDB } from '@/libs/database'
import { CheckoutDataSchema } from '@/libs/schemas/checkout'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const body = await request.json()

		const validatedData = CheckoutDataSchema.parse(body)

		savePurchaseToDB(validatedData)

		return NextResponse.json({
			success: true,
			message: 'Data validated correctly',
			data: validatedData,
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
