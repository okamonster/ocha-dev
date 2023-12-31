import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </MantineProvider>
  )
}
