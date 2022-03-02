import type { NextPage } from 'next'
import {
  Box,
  Center,
  Image,
  Text,
  Heading,
  Flex,
  Container,
} from '@chakra-ui/react'
import Post from '../components/blog/post'

const Blog: NextPage = () => (
  <Box>
    <Post />
  </Box>
)

export default Blog
