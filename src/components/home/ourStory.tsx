import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
} from '@chakra-ui/react'
import { IoBarbell, IoFitnessSharp, IoNewspaperOutline } from 'react-icons/io5'
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'white'}
            fontWeight={600}
            fontSize={'sm'}
            bg={'#8fdeb4'}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Our Story
          </Text>
          <Heading>A Flexible Coaching Service</Heading>
          <Text color={'white'} fontSize={'lg'}>
            We understand everyone has busy schedules, we enrich your life by
            making understanding your body easier.
          </Text>
          <Stack spacing={4} divider={<StackDivider borderColor={'white'} />}>
            <Feature
              icon={<Icon as={IoBarbell} color={'white'} w={5} h={5} />}
              iconBg={'#f16764'}
              text={'Workout Plans'}
            />
            <Feature
              icon={<Icon as={IoFitnessSharp} color={'white'} w={5} h={5} />}
              iconBg={'#8fdeb4'}
              text={'Nutritional Recommendations'}
            />
            <Feature
              icon={
                <Icon as={IoNewspaperOutline} color={'white'} w={5} h={5} />
              }
              iconBg={'#52bbb7'}
              text={'Weekly Newsletters'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'/us.JPG'}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}