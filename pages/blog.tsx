import React from 'react'
import { GetServerSideProps } from 'next'
import Post, { PostProps } from '../src/components/post'
import { prisma } from '../lib/prisma'
import { Center, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import Header from '../pages/header'

export const getServerSideProps: GetServerSideProps = async () => {
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
          <Heading color={'#F16764'}>Saltubolic Blogs</Heading>
        </Center>
        <Flex
          textAlign={'center'}
          pt={10}
          justifyContent={'center'}
          direction={'column'}
          width={'full'}
        >
          <SimpleGrid columns={1} spacing={'20'} mt={10} mx={'auto'}>
            {props.feed.map((post, index) => (
              <Post post={post} index={index} />
            ))}
          </SimpleGrid>
        </Flex>
      </>
    )
  }
  return (
    <Flex direction={'column'} p={10}>
      <Center>
        <Heading size={'4xl'} color={'#CA4862'}>
          Saltubolic Blogs
        </Heading>
      </Center>
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
      >
        <SimpleGrid columns={1} spacing={'1'} mt={10} mx={'auto'}>
          {props.feed.map((post, index) => (
            <Post post={post} index={index} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Blog
