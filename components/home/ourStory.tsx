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
import { Handsome } from '../../style/colors'

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
            color={Handsome.lightShade}
            fontWeight={600}
            fontSize={'sm'}
            bg={Handsome.darkShade}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Our Story
          </Text>
          <Heading>A Flexible Coaching Service</Heading>
          <Text color={'#FFFAFA'} fontSize={'lg'}>
            Everyone has busy schedules, we're here to enrich your life by
            providing you with the tools you need to take control of your
            health.
          </Text>
          <Stack spacing={4} divider={<StackDivider borderColor={'#FFFAFA'} />}>
            <Feature
              icon={<Icon as={IoBarbell} color={'#FFFAFA'} w={5} h={5} />}
              iconBg={Handsome.darkAccent}
              text={'Workout Plans'}
            />
            <Feature
              icon={<Icon as={IoFitnessSharp} color={'#FFFAFA'} w={5} h={5} />}
              iconBg={Handsome.mainColorContrast}
              text={'Nutritional Recommendations'}
            />
            <Feature
              icon={
                <Icon as={IoNewspaperOutline} color={'white'} w={5} h={5} />
              }
              iconBg={Handsome.lightAccent}
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
