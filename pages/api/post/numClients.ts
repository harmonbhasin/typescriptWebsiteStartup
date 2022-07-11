import { Client } from '@notionhq/client'
const notion = new Client({ auth: process.env.NOTION_KEY })
import { NextApiRequest, NextApiResponse } from 'next'

// POST /api/post/numClients
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await notion.databases.query({
      database_id: process.env.NOTION_CLIENT_DATABASE_ID,
      filter: {
        property: 'Latest',
        checkbox:{
            'equals': true
        }
      }
  })
  // @ts-ignore
  res.json(result.results[0].properties.ID.number)
}
