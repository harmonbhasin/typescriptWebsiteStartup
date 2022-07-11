import React, { ChangeEvent, useState } from 'react'
import Router from 'next/router'
import {
  Input,
  FormControl,
  VStack,
  InputGroup,
  FormLabel,
  Textarea,
  Button,
  HStack,
  Heading,
  Stack,
} from '@chakra-ui/react'

/**
 * This code is used to create a new post.
 */
const Draft: React.FC = () => {
  const [title, setTitle] = useState('')
  const [gist, setGist] = useState('')
  const [content, setContent] = useState('')

  /**
   * Submits post data to Prisma, and brings user to the drafts page.
   */
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { title, gist, content }
      await fetch('/api/post/creation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/drafts')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Stack spacing={10} p={10}>
      <Heading>New Draft</Heading>
      <VStack spacing={5} as={'form'} onSubmit={submitData}>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <InputGroup>
            <Input
              type="text"
              name="name"
              placeholder="Your Title"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Summary</FormLabel>
          <InputGroup>
            <Input
              name="email"
              placeholder="Your Summary"
              value={gist}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setGist(e.target.value)
              }
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea
            name="message"
            placeholder="Your Content"
            rows={20}
            resize="none"
            value={content}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setContent(e.target.value)
            }
          />
        </FormControl>
        <HStack spacing="20">
          <Button
            bg="#14591D"
            color="white"
            _hover={{
              bg: '#99AA38',
            }}
            isFullWidth
            type={'submit'}
          >
            Submit
          </Button>
          <Button
            bg="#14591D"
            color="white"
            _hover={{
              bg: '#99AA38',
            }}
            isFullWidth
            onClick={() => Router.push('/blog')}
          >
            Cancel
          </Button>
        </HStack>
      </VStack>
    </Stack>
  )
}

export default Draft
