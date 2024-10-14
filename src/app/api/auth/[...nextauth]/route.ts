import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

if (
	!process.env.GOOGLE_CLIENT_ID ||
	!process.env.GOOGLE_CLIENT_SECRET
) {
	throw new Error('Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET')
}

const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
