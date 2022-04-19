import React from 'react'
import { GetStaticProps } from 'next'
import Post, { PostProps } from '../src/components/post'
import { prisma } from '../lib/prisma'
import { Box, Center, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import Header from '../pages/header'

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return { props: { feed } }
}

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  const { data: session, status } = useSession()
  if (session) {
    return (
      <>
        <Header />
        <Center>
          <Heading>Saltubolic Blogs</Heading>
        </Center>
        <Flex
          textAlign={'center'}
          pt={10}
          justifyContent={'center'}
          direction={'column'}
          width={'full'}
        >
          <SimpleGrid columns={1} spacing={'20'} mt={10} mx={'auto'}>
            {props.feed.map((post) => (
              <Post post={post} />
            ))}
          </SimpleGrid>
        </Flex>
      </>
    )
  }
  return (
    <Flex direction={'column'} p={10}>
      <Center>
        <Heading size={'4xl'}>Saltubolic Blogs</Heading>
      </Center>
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
      >
        <SimpleGrid columns={1} spacing={'20'} mt={10} mx={'auto'}>
          {props.feed.map((post) => (
            <Post post={post} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Blog
