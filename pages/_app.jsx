import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../libs/theme'
import Main from './main'

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} key={router.route}/>
      </Main>
    </ChakraProvider>
  )
}