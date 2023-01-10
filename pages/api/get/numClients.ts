import { Client } from '@notionhq/client'
const notion = new Client({ auth: process.env.NOTION_KEY })
import { NextApiRequest, NextApiResponse } from 'next'

// POST /api/post/numClients
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.client.findMany({
    include: {
      profile: true,
      personal: true,
    },
  }) // @ts-ignore
  res.json(result.length + 21)
}
