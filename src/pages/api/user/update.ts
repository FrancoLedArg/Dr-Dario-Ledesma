import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Paciente } from '@prisma/client'

// Middlewares
import validationHandler from '@/middlewares/validation.handler'

// Utils
import { updatePacienteSchema } from '@/schemas/paciente.schema'


const prisma = new PrismaClient()

async function createHandler(
  req: NextApiRequest,
  res: NextApiResponse<Paciente | { message: string }>
) {
  if (req.method === 'PUT') {
    const {
      id,
      nombre,
      apellido,
      edad,
      telefono
    } = req.body

    try {
      const paciente = await prisma.paciente.update({
        where: {
          id: Number(id)
        },
        data: {
          nombre,
          apellido,
          edad,
          telefono
        },
      })
      res.status(201).json(paciente)
    } catch (error) {
      res.status(404).json({ message: `Paciente with the id of ${id} not found`})
    }

  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default validationHandler(createHandler, updatePacienteSchema, 'body')
