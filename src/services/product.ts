import type { Product } from '../../types'

export const getProduct = async ({
	query,
}: { query: string | undefined }): Promise<Product[]> => {
	const products = [
		{ id: '1', name: 'product-1', title: 'Mac', category: 'Laptops' },
		{ id: '2', name: 'product-2', title: 'Iphone', category: 'Phones' },
		{ id: '3', name: 'product-3', title: 'Samsung', category: 'Phones' },
		{ id: '4', name: 'product-4', title: 'Xiaomi', category: 'Phones' },
		{ id: '5', name: 'product-5', title: 'Huawei', category: 'Phones' },
		{ id: '7', name: 'product-7', title: 'Vivo', category: 'Phones' },
		{ id: '8', name: 'product-8', title: 'Realme', category: 'Phones' },
		{ id: '9', name: 'product-9', title: 'Oppo', category: 'Phones' },
		{ id: '10', name: 'product-10', title: 'Google', category: 'Phones' },
		{ id: '11', name: 'product-11', title: 'OnePlus', category: 'Phones' },
		{ id: '12', name: 'product-12', title: 'Lenovo', category: 'Laptops' },
		{ id: '13', name: 'product-13', title: 'Asus', category: 'Laptops' },
		{ id: '14', name: 'product-14', title: 'HP', category: 'Laptops' },
		{ id: '15', name: 'product-15', title: 'Dell', category: 'Laptops' },
		{ id: '16', name: 'product-16', title: 'Apple Watch', category: 'Smartwatch' },
		{ id: '17', name: 'product-17', title: 'Samsung Watch', category: 'Smartwatch' },
	]

	if (!query) return products

	const newProducts = products.filter((product) => {
		return product.name.includes(query)
	})
	return newProducts
}

export const getProductsByCategory = async ({
	category,
}: { category: string }): Promise<Product[]> => {
	const products = [
		{ id: '1', name: 'product-1', title: 'Mac', category: 'laptops' },
		{ id: '2', name: 'product-2', title: 'Iphone', category: 'phones' },
		{ id: '3', name: 'product-3', title: 'Samsung', category: 'phones' },
		{ id: '4', name: 'product-4', title: 'Xiaomi', category: 'phones' },
		{ id: '5', name: 'product-5', title: 'Huawei', category: 'phones' },
		{ id: '7', name: 'product-7', title: 'Vivo', category: 'phones' },
		{ id: '8', name: 'product-8', title: 'Realme', category: 'phones' },
		{ id: '9', name: 'product-9', title: 'Oppo', category: 'phones' },
		{ id: '10', name: 'product-10', title: 'Google', category: 'phones' },
		{ id: '11', name: 'product-11', title: 'OnePlus', category: 'phones' },
		{ id: '12', name: 'product-12', title: 'Lenovo', category: 'laptops' },
		{ id: '13', name: 'product-13', title: 'Asus', category: 'laptops' },
		{ id: '14', name: 'product-14', title: 'HP', category: 'laptops' },
		{ id: '15', name: 'product-15', title: 'Dell', category: 'laptops' },
		{ id: '16', name: 'product-16', title: 'Apple Watch', category: 'smartwatch' },
		{ id: '17', name: 'product-17', title: 'Samsung Watch', category: 'smartwatch' },
	]

	const newProducts = products.filter((product) => {
		return product.category.includes(category)
	})
	return newProducts
}
