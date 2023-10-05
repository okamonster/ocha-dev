import { Box, Text } from '@chakra-ui/react'
import { SectionTitle } from '../SectionTitle'
import { Timeline } from '@mantine/core'

type Props = {
  children: React.ReactNode
}
export const ProfileDiscription = ({ children }: Props) => {
  return (
    <Box display={'grid'} gap={'20px'}>
      <SectionTitle title="PROFILE" description="自己紹介" />
      <Box>{children}</Box>
    </Box>
  )
}
