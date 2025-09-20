export const getProductErrorMessage = (error: string | undefined) => {
	if (!error || error.length === 0) {
		return 'No se pudo crear el producto. Intenta nuevamente.'
	}

	// Mapeo de errores específicos a mensajes amigables
	const errorMappings: Record<string, string> = {
		'failed on the fields: (`name`)':
			'Ya existe un producto con ese nombre. Por favor, usa un nombre diferente.',
		validation: 'Los datos del producto no son válidos. Verifica todos los campos.',
		price: 'El precio debe ser un número válido.',
		category: 'La categoría seleccionada no es válida.',
		url_images: 'Error al procesar las imágenes del producto.',
	}

	// Buscar si algún error conocido está presente
	for (const [errorKey, message] of Object.entries(errorMappings)) {
		if (error.includes(errorKey)) {
			return message
		}
	}

	// Si no encuentra un error específico, mostrar el primer error
	return `Error: ${error[0]}`
}
