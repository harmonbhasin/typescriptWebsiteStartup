import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import PartOne from '../src/components/service/partOne'
import PartTwo from '../src/components/service/partTwo'
import PartThree from '../src/components/service/partThree'

const Services: NextPage = () => (
  <Flex direction="column">
    <PartOne />
    <PartTwo />
    <PartThree />
  </Flex>
)

export default Services
