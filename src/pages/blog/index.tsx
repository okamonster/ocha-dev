import { BlogCard } from '@/components/Blog/BlogCard'
import { DeafaultHead } from '@/components/DefaultHead'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { SectionTitle } from '@/components/SectionTitle'
import { Header } from '@/components/TopPage/Header'
import { fadeIn } from '@/constants/animation'
import { Blog } from '@/entitie/blog'
import { client } from '@/libs/client'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { InferGetStaticPropsType, NextPage } from 'next'

type BlogPageProps = InferGetStaticPropsType<typeof getStaticProps>

type Props = {
  blogs: Blog[]
}

const BlogPage: NextPage<BlogPageProps> = ({ blogs }: Props) => {
  return (
    <>
      <DeafaultHead
        title="お茶.dev"
        description="お茶/岡本和輝のブログ"
        ogpImage="https://www.xn--t8jy01w.dev/images/ogp.png"
        path="blog"
      />
      <DefaultLayout>
        <Header />
        <main style={{ padding: '0 10%', display: 'grid', gap: 20 }}>
          <SectionTitle title={'BLOG'} description={'記事一覧'} />
          <Box
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            gap={'20px'}
            opacity={0}
            animation={`${fadeIn} 1s forwards 3s`}
          >
            <SimpleGrid columns={[1, 2, 3]} alignItems={'center'} gap={'10px'}>
              {blogs.map((blog: Blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </SimpleGrid>
          </Box>
        </main>
      </DefaultLayout>
    </>
  )
}

export default BlogPage

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blogs',
  })
  return {
    props: { blogs: data.contents },
  }
}
