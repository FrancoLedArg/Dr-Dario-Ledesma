import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handleRead(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const pacientes = await prisma.paciente.findMany({
      include: {
        turnos: true,
      },
    })

    if(!pacientes) {
      return res.status(500).json({ message: 'Error fetching pacientes' })
    } else {
      return res.status(200).json(pacientes)
    }


  } else {
    return res.status(405).json({ message: 'Method not allowed' })
  }
}

export default handleRead
