import { fadeIn } from '@/constants/animation'
import { Box, Heading } from '@chakra-ui/react'
import { css, keyframes } from '@emotion/react'

export const Visual = () => {
  return (
    <Box
      w={'100%'}
      padding={'50px 0'}
      background={'radial-gradient(closest-side,#FFFFFF,#F7F7F9)'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      position={'relative'}
      animation={`${fadeIn} 3s forwards`}
    >
      <Box
        w={[200, 300]}
        h={[200, 300]}
        rounded={'full'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        border={'solid 5px'}
      >
        <Heading fontSize={[20, 30]}>OCHA-TECH.dev</Heading>
      </Box>
    </Box>
  )
}
