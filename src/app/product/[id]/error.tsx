'use client' // Error boundaries must be Client Components

interface Props {
	error: Error & { digest?: string }
}

export default function ErrorPage({ error }: Props) {
	return (
		<div className='w-full h-[85vh] flex flex-col items-center justify-center'>
			<h2>Something went wrong!</h2>
			<div>{error.message}</div>
		</div>
	)
}
