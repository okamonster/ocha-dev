import { Box, Divider, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { SectionTitle } from './SectionTitle'
import { fadeIn } from '@/constants/animation'

export const Blog = () => {
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
        <SimpleGrid columns={[1, 2, 3]} alignItems={'center'}>
          <BlogCard />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

const BlogCard = () => {
  return (
    <Box bg={'#FFFFFF'} rounded={'md'} boxShadow={'lg'} w={'100%'} h={'250px'}>
      <Box height={'150px'} pos={'relative'} overflow={'hidden'}>
        <Image
          src="/images/typescript.png"
          borderRadius={'10px 10px 0 0'}
          objectFit={'cover'}
        />
      </Box>
      <Divider />
      <Box
        padding={'10px'}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'space-between'}
      >
        <Text>aaaaaaa</Text>
        <Box>
          <Text fontSize={14} color={'gray.700'}>
            yyyy/mm/dd
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
