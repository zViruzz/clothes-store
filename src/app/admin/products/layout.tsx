import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import prisma from '@/libs/prisma'

export default async function layout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession()

	if (!session?.user?.email) {
		redirect('/')
	}

	const user = await prisma.user.findUnique({
		where: {
			email: session.user.email,
		},
	})

	if (user?.role === 'CUSTOMER') {
		redirect('/')
	}
	return <div>{children}</div>
}
