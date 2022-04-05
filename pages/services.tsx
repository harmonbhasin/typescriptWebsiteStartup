import type { NextPage } from 'next'
import {
  Box,
  Text,
  Heading,
  VStack,
  ListItem,
  ListIcon,
  List,
  Stack,
  Flex,
  Spacer,
  Image,
  Center,
} from '@chakra-ui/react'
import PartOne from '../src/components/partOne'
import PartTwo from '../src/components/partTwo'
import PartThree from '../src/components/partThree'

import { MdCheckCircle } from 'react-icons/md'

const Services: NextPage = () => (
  <Flex direction="column">
    <PartOne />
    <PartTwo />
    <PartThree />
  </Flex>
)

export default Services
