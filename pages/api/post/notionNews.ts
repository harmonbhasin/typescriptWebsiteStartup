import { Client } from '@notionhq/client'
const notion = new Client({ auth: process.env.NOTION_KEY })
import { NextApiRequest, NextApiResponse } from 'next'

// POST /api/post/newsletter
// Required fields in body: Email
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  const result = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_EMAIL_DATABASE_ID,
    },
    properties: {
      Email: {
        title: [
          {
            text: {
              content: email,
            },
          },
        ],
      },
    },
  })
  res.json(result)
}
