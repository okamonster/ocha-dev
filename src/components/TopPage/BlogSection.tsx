import { Badge, Box, Divider, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { SectionTitle } from '../SectionTitle'
import { fadeIn } from '@/constants/animation'
import { Card, Title } from '@mantine/core'
import Link from 'next/link'

export const BlogSection = () => {
  return (
    <Box display={'grid'}>
      <SectionTitle title="BLOG" description="ブログはじめました" />
      <Box
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
        gap={'20px'}
        opacity={0}
        animation={`${fadeIn} 1s forwards 3s`}
      >
        <SimpleGrid columns={[1, 2, 3]} alignItems={'center'} gap={'10px'}>
          <BlogCard />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

const BlogCard = () => {
  return (
    <Link href={'/blog'}>
      <Card shadow="lg">
        <Card.Section>
          <Image src="/images/ogp.png" maxH={'180px'} />
        </Card.Section>

        <Card.Section p={10}>
          <Text fontSize={'16px'}>記事タイトル</Text>
          <Text>yyyy/mm/dd</Text>
          <Box display={'flex'} gap={'10px'}>
            <Badge>#Tag</Badge>
            <Badge>#Tag</Badge>
          </Box>
        </Card.Section>
      </Card>
    </Link>
  )
}
