'use server'

export const searchAction = async (formData: FormData) => {
	const rawFormData = {
		search: formData.get('search'),
	}
	console.log('🚀 ~ searchAction ~ rawFormData:', rawFormData)
}
