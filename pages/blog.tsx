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
import Post from '../components/post'

const Blog: NextPage = () => (
  <Box color={'#490b3d'}>
    <Post />
  </Box>
)

export default Blog
