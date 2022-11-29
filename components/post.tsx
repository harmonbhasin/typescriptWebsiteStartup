import React from 'react'
import Router from 'next/router'
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

const colors = ['#53BBB7', '#8FDEB4', '#F16764']

const Post: React.FC<{ post: PostProps; index: number }> = ({
  post,
  index,
}) => {
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
        color={colors[index % 3]}
      >
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}
        >
          <Heading size={'3xl'}>{post.title}</Heading>
          <Text fontSize={'l'}>{post.gist} </Text>
          <Text textAlign={'right'}>{authorName}</Text>
          <Divider borderColor={colors[index % 3]} borderWidth="1.5px" />
        </Flex>
      </Flex>
    </Link>
  )
}

export default Post
