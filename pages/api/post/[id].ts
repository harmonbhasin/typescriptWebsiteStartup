import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

// DELETE /api/post/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id
  if (req.method === 'DELETE') {
    const post = await prisma.post.delete({
      where: { id: String(postId) }, // Had to wrap postId in string to prevent id from thinking it could be a string array
    })
    res.json(post)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}
