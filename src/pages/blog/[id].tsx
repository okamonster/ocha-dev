import { Article } from '@/components/Blog/Article'
import { DeafaultHead } from '@/components/DefaultHead'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Header } from '@/components/TopPage/Header'
import { Blog } from '@/entitie/blog'
import { sendLogEvent } from '@/libs/analytics'
import { client } from '@/libs/client'
import { Box, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { InferGetStaticPropsType, NextPage } from 'next'
import { useEffect } from 'react'

type BlogPageProps = InferGetStaticPropsType<typeof getStaticProps>

type Props = {
  id: string
  blog: Blog
}

const BlogDetail: NextPage<BlogPageProps> = ({ id, blog }: Props) => {
  useEffect(() => {
    sendLogEvent('read_blog', undefined)
    sendLogEvent('read_blog_article', { title: blog.title })
  }, [])
  return (
    <>
      <DeafaultHead
        title={blog.title}
        description="お茶/岡本和輝のブログ"
        ogpImage={blog.OGP.url}
        path={`blog/${id}`}
      />
      <DefaultLayout>
        <Header />
        <Box
          p={['30px 0', '50px 0']}
          display={'grid'}
          alignItems={'center'}
          textAlign={'center'}
          gap={'10px'}
        >
          <Text fontSize={[20, 25]} fontWeight={'bold'}>
            {blog.title}
          </Text>
          <Text>{dayjs(blog.publishedAt).format('YYYY年MM月DD日')}</Text>
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          flexDirection={'column'}
          gap={'20px'}
          p={['0 0%', '0 10%', '0 15%']}
        >
          <Article blog={blog} />
        </Box>
      </DefaultLayout>
    </>
  )
}

export default BlogDetail

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blogs', contentId: id })
  return {
    props: { id: id, blog: data },
  }
}
