import NextAuth from 'next-auth'
import { Awaitable } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const { username, password } = credentials
        const user = await prisma.user.findUnique({
          where: {
            username
          }
        })
        if (!user) {
          throw new Error('Invalid username or password')
        }

        const checkPassword = await bcrypt.compare(password, user.password)
        if(!checkPassword) {
          throw new Error('Invalid username or password')
        }

        delete user.password
        return user
      }
    })
  ],
  callbacks: {
    async session(session, user) {
      session.userId = user.userId
      return session
    }
  }
}
export default NextAuth(authOptions)
