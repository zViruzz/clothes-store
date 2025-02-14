import { z } from 'zod'

export const UserRegisterSchema = z.object({
	username: z.string().min(1),
	email: z.string().email(),
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
})
