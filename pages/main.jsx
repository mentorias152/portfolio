import Head from 'next/head'

import {Box, Container, Heading} from '@chakra-ui/react'

import Navbar from '../components/navbar'

const Main = ({children, router}) => {

  return (
    <Box pb={8}>
      <Head>
        <title>Mentorias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar path={router.asPath}/>
      <Container maxW={'container.lg'} pt={14}>
        {children}
      </Container>
      
    </Box>
  )
}

export default Main