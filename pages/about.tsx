import type { NextPage } from 'next'
import {
  Box,
  Center,
  Image,
  Text,
  Heading,
  Flex,
  Container,
  HStack,
  StackDivider,
  SimpleGrid,
} from '@chakra-ui/react'
import Individual from '../components/individual'

const About: NextPage = () => (
  <Box color={'#490b3d'}>
    <Container maxW={'4xl'} p={10} centerContent>
      <Heading size={'4xl'}>About</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
        <Individual
          name={'Harmon'}
          about={
            'Harmon grew up in the suburbs of Illinois, and had an interest in Computer Science from a young age. He is currently studying Computer Science and Economics with a Math Emphasis at the University of Wisconsin-Madison. He is in the Federal Reserve Challenge Club, Effective Altriusm UW-Madison, UW-Powerlifting, and Alpha Gamma Rho - Iota. Although he started lifting in highschool through gym class, he got into bodybuilding as quaratine started. During quaratine he began studying the science and practice of nutrition and dieting. Nowadays, he is focusing on powerlifting and is eager to see what his body can achieve. He has read the literature in depth, and is very knowledgeable in longevity, biohacking, and nootropics although he is still eager to learn more. He hopes to give people their health back and help people live their optimal lifestyle based on their specifc needs.'
          }
          img={'/Harmon.jpg'}
        />
        <Individual
          name={'Michael'}
          about={
            'Harmon grew up in the suburbs of Illinois, and had an interest in Computer Science from a young age. He is currently studying Computer Science and Economics with a Math Emphasis at the University of Wisconsin-Madison. He is in the Federal Reserve Challenge Club, Effective Altriusm UW-Madison, UW-Powerlifting, and Alpha Gamma Rho - Iota. Although he started lifting in highschool through gym class, he got into bodybuilding as quaratine started. During quaratine he began studying the science and practice of nutrition and dieting. Nowadays, he is focusing on powerlifting and is eager to see what his body can achieve. He has read the literature in depth, and is very knowledgeable in longevity, biohacking, and nootropics although he is still eager to learn more. He hopes to give people their health back and help people live their optimal lifestyle based on their specifc needs.'
          }
          img={'/Michael.jpg'}
        />
      </SimpleGrid>
    </Container>
  </Box>
)

export default About
