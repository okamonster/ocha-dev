import { Heading } from '@chakra-ui/react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const container = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  background: '#FFFFFF',
  height: 60,
  boxShadow: '',
})

const title = css({})

export const Header = () => {
  return (
    <header css={container}>
      <Heading as={'h1'} css={title} fontSize={16}>
        OCHA-TECH.dev
      </Heading>
    </header>
  )
}
