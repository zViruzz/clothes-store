import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

export interface AppProps {
	Component: React.ElementType
	pageProps: {
		session: Session | null
	} & Record<string, unknown>
}

export default function ProviderSession({
	Component,
	pageProps,
}: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<Component {...pageProps} />
		</SessionProvider>
	)
}
