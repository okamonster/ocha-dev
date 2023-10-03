import { Heading } from '@chakra-ui/react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'

const container = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  background: '#FFFFFF',
  height: 60,
  border: 'solid 1px #E0E0E0',
})

const title = css({})

export const Header = () => {
  return (
    <header css={container}>
      <Link href={'/'}>
        <Heading as={'h1'} css={title} fontSize={16}>
          OCHA.dev
        </Heading>
      </Link>
    </header>
  )
}
