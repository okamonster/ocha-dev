import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'

type Props = {
  children: React.ReactNode
  onClick: () => void
}

const linkButton = css({
  background: '#EAEAFA',
  color: '#A3A0D3',
})

export const DefaultButton = ({ children, onClick }: Props) => {
  const router = useRouter()
  return (
    <Button css={linkButton} onClick={onClick}>
      {children}
    </Button>
  )
}
