import { Client } from '@notionhq/client'
const notion = new Client({ auth: process.env.NOTION_KEY })
import { NextApiRequest, NextApiResponse } from 'next'

// POST /api/post/getClients
// Required fields in body: Email
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await notion.databases.retrieve({database_id: process.env.NOTION_CLIENT_DATABASE_ID,})
  res.json(result)
}
