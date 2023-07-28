import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'

type Props = {
  children: React.ReactNode
  href: string
}

const linkButton = css({
  background: '#EAEAFA',
  color: '#A3A0D3',
})

export const LinkButton = ({ children, href }: Props) => {
  const router = useRouter()
  return (
    <Button css={linkButton} onClick={() => router.push(href)}>
      {children}
    </Button>
  )
}
