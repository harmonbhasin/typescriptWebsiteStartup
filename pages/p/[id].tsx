import React from 'react'
import { GetServerSideProps } from 'next'
import ReactMarkdown from 'react-markdown'
import Router from 'next/router'
import { PostProps } from '../../src/components/post'
import { useSession } from 'next-auth/react'
import { prisma } from '../../lib/prisma'
import { Text, Flex, Heading, Button, Spacer, Box } from '@chakra-ui/react'
import remarkGfm from 'remark-gfm'

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  })
  return {
    props: post,
  }
}

async function publishPost(id: string): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: 'PUT',
  })
  await Router.push('/blog')
}

async function deletePost(id: string): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE',
  })
  Router.push('/blog')
}

const Post: React.FC<PostProps> = (props) => {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <div>Authenticating ...</div>
  }
  const userHasValidSession = Boolean(session)
  const postBelongsToUser = session?.user?.email === props.author?.email
  let title = props.title
  if (!props.published) {
    title = `${title} (Draft)`
  }

  return (
    <Flex p={10} direction="column">
      <Heading size={'4xl'}>{props.title}</Heading>
      <Heading size={'l'}>{props.gist}</Heading>
      <Flex>
        <Spacer />
        <Text>By {props?.author?.name || 'Unknown author'}</Text>
      </Flex>
      <ReactMarkdown children={props.content} remarkPlugins={[remarkGfm]} />
      <Box h="350px" />
      <Flex>
        {!props.published && userHasValidSession && postBelongsToUser && (
          <Button
            bg="#14591D"
            color="white"
            _hover={{
              bg: '#99AA38',
            }}
            onClick={() => publishPost(props.id)}
          >
            Publish
          </Button>
        )}
        <Spacer />
        {userHasValidSession && postBelongsToUser && (
          <Button
            bg="#14591D"
            color="white"
            _hover={{
              bg: '#99AA38',
            }}
            onClick={() => deletePost(props.id)}
          >
            Delete
          </Button>
        )}
      </Flex>
    </Flex>
  )
}

export default Post
