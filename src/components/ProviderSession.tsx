'use client'
import { SessionProvider } from 'next-auth/react'
import type { ReactNode } from 'react'

export interface AppProps {
	children: ReactNode
}

export default function ProviderSession({ children }: AppProps) {
	return <SessionProvider>{children}</SessionProvider>
}
