import {
  Container,
  Box,
  Heading
} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container maxW={'100%'}>
      <Box borderRadius='lg' bg='red' p={3} mb={6} alignItems='center' w={'100%'}>
        Hello, I&apos;m a Front-end developer
      </Box>
      <Box display={{md : 'flex'}}>
        <Box flexGrow={1}>
          <Heading as={'h1'} variant={'page-title'}>
            Phạm Gia Huy
          </Heading>
          <p>Front-end Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page