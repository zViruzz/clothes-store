'use client'
import { useState } from 'react'

export default function ButtonUploadReceipt({
	paymentDataId,
}: { paymentDataId?: string }) {
	const [file, setFile] = useState<File | null>(null)
	const [uploading, setUploading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!file || !paymentDataId) return

		setUploading(true)

		const formData = new FormData()
		formData.append('receipt', file)
		formData.append('paymentDataId', paymentDataId)

		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			})

			const result = await response.json()
			if (response.ok) {
				alert(`Comprobante subido:  ${result.path}`)
			} else {
				throw new Error(result.error)
			}
		} catch (error) {
		} finally {
			setUploading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
			<input
				type='file'
				accept='application/pdf'
				name='receipt'
				onChange={(e) => setFile(e.target.files?.[0] || null)}
				className='block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100'
			/>
			<button
				type='submit'
				disabled={uploading}
				className='px-4 py-2 bg-blue-600 text-white rounded-md
          hover:bg-blue-700 disabled:bg-gray-400'
			>
				{uploading ? 'Subiendo...' : 'Subir Comprobante'}
			</button>
		</form>
	)
}
