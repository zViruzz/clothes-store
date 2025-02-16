import prisma from '@/libs/prisma'
import bcrypt from 'bcryptjs'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider, { type GoogleProfile } from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
	throw new Error('Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET')
}

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'Email',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'Password',
				},
			},
			async authorize(credentials, req) {
				if (credentials === undefined) {
					return null
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				})

				if (!user) {
					throw new Error('No user found')
				}
				const matchPassword = await bcrypt.compare(credentials.password, user.password)

				if (!matchPassword) throw new Error('Wrong password')

				console.log('Login')
				return {
					id: user.id,
					name: user.name,
					email: user.email,
				}
			},
		}),
	],

	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			try {
				if (!user) {
					return false
				}
				if (!account) {
					return false
				}

				const profileUpdate = profile as GoogleProfile

				const userFound = await prisma.user.findUnique({
					where: {
						email: user.email,
					},
				})

				if (userFound) {
					return true
				}

				console.log('Login with google save')
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
	pages: {
		signIn: '/auth/login',
	},
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
