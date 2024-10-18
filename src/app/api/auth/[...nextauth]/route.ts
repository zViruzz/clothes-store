import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

if (
	!process.env.GOOGLE_CLIENT_ID ||
	!process.env.GOOGLE_CLIENT_SECRET
) {
	throw new Error('Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET')
}

const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.log('🚀 ~ signIn ~ credentials:', credentials)
			console.log('🚀 ~ signIn ~ email:', email)
			console.log('🚀 ~ signIn ~ profile:', profile)
			console.log('🚀 ~ signIn ~ account:', account)
			console.log('🚀 ~ signIn ~ user:', user)
			return true
		},
	},
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
