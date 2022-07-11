import { ReactNode } from 'react'
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Link,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

const checkmark = '#CA4862'

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  )
}

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              SaltuBot
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                7.99
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={checkmark} />
                Text notifications
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={checkmark} />
                Daily schedule reminders
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={checkmark} />
                Daily weigh-in reminders
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={checkmark} />
                Helps with motivation
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Link href="https://buy.stripe.com/dR603i9HU6AObfO8wy">
                <Button
                  w="full"
                  color="#CA4862"
                  borderColor={'#CA4862'}
                  variant="outline"
                >
                  Preorder now
                </Button>
              </Link>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform="uppercase"
                bg={'#F16764'}
                px={3}
                py={1}
                color={'black'}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                SaltuProgram
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  14.99
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  once
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={checkmark} />
                  Custom Program
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={checkmark} />
                  On-demand coaching
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={checkmark} />
                  6-weeks long
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={checkmark} />
                  Nutritional Advice
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Link href="https://buy.stripe.com/7sI17mcU63oCfw4aEF">
                  <Button w="full" background="#CA4862" color="white">
                    Buy now
                  </Button>
                </Link>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Saltubolic
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                22.99
              </Text>
              <Text fontSize="3xl" color="gray.500">
                combo
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={checkmark} />
                $22.99 one time payment
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={checkmark} />
                $7.99/month after for SaltuBot
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={checkmark} />
                Buy both through one link
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={checkmark} />
                Fastest way to your goals
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Link href="https://buy.stripe.com/14k4jy9HUe3gcjSfZ1">
                <Button
                  w="full"
                  color="#CA4862"
                  borderColor={'#CA4862'}
                  variant="outline"
                >
                  Buy now
                </Button>
              </Link>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  )
}
