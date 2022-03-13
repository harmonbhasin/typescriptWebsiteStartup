import type { NextPage } from 'next'
import { Box, Heading, Center, SimpleGrid } from '@chakra-ui/react'
import Individual from '../src/components/biography'

const About: NextPage = () => (
  <Box color={'#490b3d'}>
    <Center p={'5'}>
      <Heading size={'4xl'}>About</Heading>
    </Center>
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={{ base: 5, lg: 8 }}
      px={8}
    >
      <Individual
        name={'Harmon'}
        about={
          'Harmon grew up in the suburbs of Illinois, and had an interest in Computer Science from a young age. He is currently studying Computer Science and Economics with a Math Emphasis at the University of Wisconsin-Madison. He is in the Federal Reserve Challenge Club, Effective Altriusm UW-Madison, UW-Powerlifting, and Alpha Gamma Rho - Iota. Although he started lifting in highschool through gym class, he got into bodybuilding as quarantine started. During quaratine he began studying the science and practice of nutrition and dieting. Nowadays, he is focusing on powerlifting and is eager to see what his body can achieve. He has read the literature in depth, and is very knowledgeable in longevity, biohacking, and nootropics although he is still eager to learn more. He hopes to give people their health back and help people live their optimal lifestyle based on their specifc needs.'
        }
        img={'/formalHarmon.jpg'}
        cards={['/harmon1.jpg', '/harmon2.jpg', '/harmon3.jpg']}
      />
      <Individual
        name={'Michael'}
        about={
          ' Michael is was born, raised, nurtured in Moscow, Russia-but moved with his family to the northwest suburbs of Chicago. Growing up a chubbier kid, he always wanted to attain a movie-esque physique, but he just didn’t know how to. His involvement in high school sports of water polo and  swimming inspired him to live a healthier lifestyle suited for a better athletic performance, as well as a better physique. Through trial and error, a lot of research on bro-science, nutritional science, exercise science and philosophy-he was able to derive a healthy routine, and more importantly a maxim for a healthy life. He is currently majoring in Economics and Minoring in Data Science, and on a leisurely basis, Michael enjoys applying consumer behavior and data trends/analytics in the fitness industry. By aggregating different training disciplines and periodization methods, he excels in product design and management for Saltubolic Coaching Services.'
        }
        img={'/formalMichael.jpg'}
        cards={[
          '/michael1.jpg',
          '/michael2.jpg',
          '/michael3.jpg',
          '/michael4.jpg',
        ]}
      />
    </SimpleGrid>
  </Box>
)

export default About
