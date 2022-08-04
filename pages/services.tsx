import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import PartOne from '../src/components/service/partOne'
import PartTwo from '../src/components/service/partTwo'
import PartThree from '../src/components/service/partThree'
import ServicesLayout from '../src/components/layout/servicesLayout'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Services: NextPageWithLayout = () => (
  <Flex direction="column">
    <PartOne />
    <PartTwo />
    <PartThree />
  </Flex>
)

Services.getLayout = (page: ReactElement) => {
  return <ServicesLayout>{page}</ServicesLayout>
}

export default Services
