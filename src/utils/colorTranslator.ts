export const colorTranslator = (colors: string[]): string[] => {
	const diccionarioColores: { [key: string]: string } = {
		red: 'rojo',
		black: 'negro',
		white: 'blanco',
		gray: 'gris',
		blue: 'azul',
		pink: 'rosa',
		yellow: 'amarillo',
		green: 'verde',
	}

	return colors.map((color) => {
		const colorEnEspanol = diccionarioColores[color.toLowerCase()]
		return colorEnEspanol || color
	})
}
