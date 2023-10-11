import { Badge, Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { SectionTitle } from '../SectionTitle'
import { fadeIn } from '@/constants/animation'
import { Blog } from '@/entitie/blog'
import { BlogCard } from '@/components/Blog/BlogCard'
import { LinkButton } from '../Button/LinkButton'

type Props = {
  blogs: Blog[]
}

export const BlogSection = ({ blogs }: Props) => {
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
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </SimpleGrid>
        <LinkButton href="/blog">ブログ一覧</LinkButton>
      </Box>
    </Box>
  )
}
