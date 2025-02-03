import prisma from '@/libs/prisma'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider, { type GoogleProfile } from 'next-auth/providers/google'

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
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
			try {
				if (!profile) {
					return false
				}
				if (!account || account.id_token === undefined) {
					return false
				}

				const profileUpdate = profile as GoogleProfile

				const newUser = await prisma.user.create({
					data: {
						name: user.name,
						email: user.email,
						emailVerified:
							account.provider === 'google' ? profileUpdate.verified_email : false,
						image: user.image,
						accounts: {
							create: [
								{
									id_token: account.id_token,
									type: account.type,
									provider: account.provider,
									providerAccountId: account.providerAccountId,
									accessToken: account.access_token,
									expiresAt: account.expires_at,
								},
							],
						},
					},
				})

				return true
			} catch (error) {
				console.error('🚀 ~ signIn ~ error:', error)
				return false
			}
		},
	},
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
