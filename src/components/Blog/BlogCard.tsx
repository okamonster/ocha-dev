import { Blog } from '@/entitie/blog'
import { Image, Text, Box, Badge } from '@chakra-ui/react'
import { Card } from '@mantine/core'
import Link from 'next/link'
import dayjs from 'dayjs'

type CardProps = {
  blog: Blog
}

export const BlogCard = ({ blog }: CardProps) => {
  return (
    <Link href={`/blog/${blog.id}`}>
      <Card shadow="lg">
        <Card.Section>
          <Image src={blog.OGP.url} maxH={'180px'} />
        </Card.Section>

        <Card.Section p={10}>
          <Text fontSize={'16px'}>{blog.title}</Text>
          <Text>{dayjs(blog.publishedAt).format('YYYY/MM/DD')}</Text>
          <Box display={'flex'} gap={'10px'}>
            <Badge>#{blog.tag}</Badge>
          </Box>
        </Card.Section>
      </Card>
    </Link>
  )
}
