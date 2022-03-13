import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Post from '../src/components/post'

const Blog: NextPage = () => (
  <Box color={'#490b3d'}>
    <Post />
  </Box>
)

export default Blog
