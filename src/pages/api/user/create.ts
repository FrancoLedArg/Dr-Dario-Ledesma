import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

// Middlewares
import authHandler from '@/middlewares/auth.handler'
import validationHandler from '@/middlewares/validation.handler'

// Utils
import { createUserSchema } from '@/schemas/paciente.schema'

const prisma = new PrismaClient()

async function createHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const {
      role,
      username,
      password,
      nombre,
      apellido,
      telefono
    } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        role,
        username,
        password: hashedPassword,
        nombre,
        apellido,
        telefono
      },
    })

    res.status(201).json(user)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default validationHandler(createHandler, createUserSchema, 'body')
