import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {Box, Container, Heading} from '@chakra-ui/react'

export default function Home() {

  return (
    <Container>
      <Head>
        <title>Mentorias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box borderRadius='lg' bg='red' p={3} mb={6} alignItems='center'>
        Hello, I&apos;m a Front-end developer
      </Box>
      <Box></Box>
    </Container>

  )
}
