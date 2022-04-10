import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { prisma } from '../../../lib/prisma'

// POST /api/post/creation
// Required fields in body: title
// Optional fields in body: content
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, gist, content } = req.body

  const session = await getSession({ req })
  const result = await prisma.post.create({
    data: {
      title: title,
      gist: gist,
      content: content,
      author: { connect: { email: session?.user?.email! } },
    },
  })
  res.json(result)
}
