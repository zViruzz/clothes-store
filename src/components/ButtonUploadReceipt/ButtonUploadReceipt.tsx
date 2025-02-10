'use client'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ButtonUploadReceipt({
	paymentDataId,
	userId,
}: { paymentDataId?: string; userId?: string }) {
	const [file, setFile] = useState<File | null>(null)
	const [uploading, setUploading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!file || !paymentDataId || !userId) return

		setUploading(true)

		const formData = new FormData()
		formData.append('receipt', file)
		formData.append('paymentDataId', paymentDataId)
		formData.append('userId', userId)

		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			})

			const result = await response.json()
			if (response.ok) {
				toast.success('Comprobante subido correctamente')
			} else {
				throw new Error(result.error)
			}
		} catch (error) {
		} finally {
			setUploading(false)
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-4 flex justify-center items-center flex-col'
		>
			<input
				type='file'
				accept='application/pdf'
				name='receipt'
				onChange={(e) => setFile(e.target.files?.[0] || null)}
				className='block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-neutral-200 file:text-neutral-800
          hover:file:bg-blue-100 file:hover:cursor-pointer'
			/>
			<button
				type='submit'
				disabled={uploading}
				className='px-5 py-3 bg-black text-white rounded-xl font-medium
          hover:bg-neutral-700 disabled:bg-gray-400'
			>
				{uploading ? 'Subiendo...' : 'Subir Comprobante'}
			</button>
		</form>
	)
}
