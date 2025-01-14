import { CheckoutDataSchema } from '@/libs/schemas/checkout'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const body = await request.json()

		const validatedData = CheckoutDataSchema.parse(body)

		return NextResponse.json({
			success: true,
			message: 'Datos validados correctamente',
			data: validatedData,
		})
	} catch (error) {
		if (error instanceof Error && 'errors' in error) {
			return NextResponse.json(
				{
					success: false,
					message: 'Datos inválidos',
					errors: error.errors,
				},
				{ status: 400 },
			)
		}

		// Manejo de otros errores inesperados
		return NextResponse.json(
			{
				success: false,
				message: 'Error interno del servidor',
			},
			{ status: 500 },
		)
	}
}
