import { Blog } from '@/entitie/blog'
import { Box } from '@chakra-ui/react'
import styles from './style.module.scss'
type Props = {
  blog: Blog
}

export const Article = ({ blog }: Props): React.ReactElement => {
  console.log(blog.content)
  return (
    <Box
      p={['30px', '30px 85px']}
      bgColor={'#FFFFFF'}
      borderRadius={'lg'}
      w={'100%'}
    >
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className={styles.post}
      />
    </Box>
  )
}
