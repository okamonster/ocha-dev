import { fadeDown } from '@/constants/animation'
import { Heading, Box, Text } from '@chakra-ui/react'
/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'

const moveX = keyframes`
  0%{
    width: 0%;
  }
  100%{
    width: 100%;
  }
`

const titleAnimation = css({
  ':before': {
    position: 'absolute',
    content: '""',
    bottom: 0,
    borderBottom: 'solid 1px #8686F4',
    animation: `${moveX} 2s linear forwards`,
  },
})

const fadeDownAnimation = css({
  animation: `${fadeDown} 1s forwards 2s`,
  opacity: 0,
})

type Props = {
  title: string
  description: string
}
export const SectionTitle = ({ title, description }: Props) => {
  return (
    <Box>
      <Heading css={titleAnimation} fontSize={[20, 30]} position={'relative'}>
        {title}
      </Heading>
      <Text
        fontFamily={'sans-serif'}
        fontSize={[12, 14]}
        css={fadeDownAnimation}
      >
        {description}
      </Text>
    </Box>
  )
}
