import React from 'react'
import { GetServerSideProps } from 'next'
import { useSession, getSession } from 'next-auth/react'
import Post, { PostProps } from '../src/components/post'
import { prisma } from '../lib/prisma'
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Container,
  Grid,
} from '@chakra-ui/react'
import Router from 'next/router'

/**
 * Gets all drafts from the current user.
 */
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

/**
 * Shows all drafts to the user, and allows them to post or delete them.
 */
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
    <Container maxWidth={'container.xl'} centerContent>
      <Grid p={10} gap={6}>
        <Center>
          <Heading size={'4xl'} color={'#0A210F'}>
            My Drafts
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
            {props.drafts.map((post, index) => (
              <Post post={post} index={index} />
            ))}
          </SimpleGrid>
        </Flex>
      </Grid>
      <Button bg="#14591D" color="#FFFAFA" onClick={() => Router.push('/blog')}>
        Back
      </Button>
      <Box height={'450'} />
    </Container>
  )
}

export default Drafts
