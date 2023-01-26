import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

// POST /api/post/numClients
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.client.findMany({
    include: {
      profile: true,
      personal: true,
    },
  }) // @ts-ignore
  res.status(200).json(result.length + 23)
}
