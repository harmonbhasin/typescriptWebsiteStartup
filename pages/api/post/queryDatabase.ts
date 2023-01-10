import { Client } from '@notionhq/client'
const notion = new Client({ auth: process.env.NOTION_KEY })
import { NextApiRequest, NextApiResponse } from 'next'

// POST /api/post/newsletter
// Required fields in body: Email
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await notion.databases.query({
      database_id: process.env.NOTION_CLIENT_DATABASE_ID,
      filter: {
        property: 'Name',
        title:{
            'is_not_empty':true
        }
      }
  })
  res.json(result)
}
