/*
import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

// POST /api/post/inquiry
// Required fields in body: Name, Email, Content
// Optional fields in body:
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, content } = req.body

  const result = await prisma.inquiry.create({
    data: {
      name,
      email,
      content,
    },
  })
  res.json(result)
}
