import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react'
import { Handsome } from '../../style/colors'

const SimpleProduct = () => {
  return (
    <form action={'/api/post/tankTop'} method="POST">
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={Handsome.lightShade}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: '/product/main.jpg',
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={'/product/main.jpg'}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text
              color={Handsome.darkAccent}
              fontSize={'sm'}
              textTransform={'uppercase'}
            >
              Brand
            </Text>
            <Heading
              color={Handsome.darkShade}
              fontSize={'2xl'}
              fontFamily={'body'}
              fontWeight={500}
            >
              Tank Top
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text
                color={Handsome.lightAccent}
                fontWeight={800}
                fontSize={'xl'}
              >
                $20
              </Text>
              <Text
                textDecoration={'line-through'}
                color={Handsome.lighterDarkAccent}
              >
                $25
              </Text>
            </Stack>
            <Button
              bg={Handsome.darkShade}
              color={Handsome.lightShade}
              _hover={{ bg: Handsome.lightShade, color: Handsome.darkShade }}
              type="submit"
            >
              Buy Now
            </Button>
          </Stack>
        </Box>
      </Center>
    </form>
  )
}

export default SimpleProduct
