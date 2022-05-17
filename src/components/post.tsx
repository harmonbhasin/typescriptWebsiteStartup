import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'
import { Flex, Heading, Text, Link, Divider } from '@chakra-ui/react'

export type PostProps = {
  id: string
  title: string
  gist: string
  author: {
    name: string
    email: string
  } | null
  content: string
  published: boolean
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  return (
    <Link
      style={{
        textDecoration: 'none',
      }}
      onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}
    >
      <Flex
        direction={'column-reverse'}
        width={'full'}
        p={5}
        justifyContent={'space-between'}
        position={'relative'}
        color={'#0A210F'}
      >
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}
        >
          <Heading size={'3xl'}>{post.title}</Heading>
          <Text fontSize={'xl'}>{post.gist} </Text>
          <Text textAlign={'right'}>{authorName}</Text>
          <Divider/>
        </Flex>
      </Flex>
    </Link>
  )
}

export default Post
