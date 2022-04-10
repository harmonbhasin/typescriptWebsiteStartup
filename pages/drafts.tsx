import React from 'react'
import { GetServerSideProps } from 'next'
import { useSession, getSession } from 'next-auth/react'
import Post, { PostProps } from '../src/components/post'
import { prisma } from '../lib/prisma'
import { Box, Button } from '@chakra-ui/react'
import Router from 'next/router'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })
  if (!session) {
    res.statusCode = 403
    return { props: { drafts: [] } }
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user?.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return {
    props: { drafts },
  }
}

type Props = {
  drafts: PostProps[]
}

const Drafts: React.FC<Props> = (props) => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <Box>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </Box>
    )
  }

  return (
    <Box>
      <div className="page">
        <h1>My Drafts</h1>
        <main>
          {props.drafts.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <Button onClick={() => Router.push('/blog')}>Back</Button>
      <style jsx>{`
        .post {
          background: var(--geist-background);
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Box>
  )
}

export default Drafts
