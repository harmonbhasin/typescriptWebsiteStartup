/*
import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

// POST /api/post/newsletter
// Required fields in body: Email
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  const result = await prisma.newsletter.create({
    data: {
      email,
    },
  })
  res.json(result)
}
