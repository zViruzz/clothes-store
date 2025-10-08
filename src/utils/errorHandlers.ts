type ActionError = {
	success: false
	message: string
	errors?: Record<string, string[]>
}

export const getProductErrorMessage = (result: ActionError) => {
	if (!result.errors || Object.keys(result.errors).length === 0) {
		return 'No se pudo crear el producto. Intenta nuevamente.'
	}

	const fieldLabels: Record<string, string> = {
		name: 'Nombre',
		title: 'Título',
		category: 'Categoría',
		description: 'Descripción',
		price: 'Precio',
		sizes: 'Tallas',
		color_scheme: 'Esquema de color',
		url_images: 'Imágenes',
	}
	const errorMessages: string[] = []

	for (const [field, messages] of Object.entries(result.errors)) {
		const fieldLabel = fieldLabels[field] || field
		errorMessages.push(`• ${fieldLabel}: ${messages.join(', ')}`)
	}

	if (errorMessages.length === 1) {
		return errorMessages[0].replace('• ', '')
	}

	return `Errores en el formulario:\n ${errorMessages.join('\n')}`
}
