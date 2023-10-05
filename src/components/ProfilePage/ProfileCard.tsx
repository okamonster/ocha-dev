import { Badge, Box, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FaAnchor, FaLink } from 'react-icons/fa'

export const ProfileCard = () => {
  return (
    <Box
      bg={'#FFFFFF'}
      borderRadius={'2xl'}
      display={'flex'}
      flexDir={['column', 'row']}
      boxShadow={'lg'}
      border={'solid 1px #EAEAFA'}
      p={'20px'}
      gap={'20px'}
      alignItems={'center'}
    >
      <ProfileImage imageUrl="/images/profile.jpeg" />
      <Box>
        <Text color={'#8686F4'} fontWeight={'bold'} fontSize={[16, 20]}>
          お茶/岡本 和輝
        </Text>
        <Badge>所属</Badge>
        <Text>立命館大学理工学部電子情報工学科</Text>
        <Text>株式会社メンヘラテクノロジー</Text>
        <Badge>Link</Badge>
        <ul>
          <li>
            <Link href={'https://alice.helixcode.net/~bando/Lab/'}>
              <Text>近畿大学工業高等専門学校量子情報研究室</Text>
            </Link>
          </li>
          <li>
            <Link href={'https://alice.helixcode.net/~bando/Lab/'}>
              <Text>株式会社メンヘラテクノロジー</Text>
            </Link>
          </li>
        </ul>
      </Box>
    </Box>
  )
}

type ImageProps = {
  imageUrl: string
}
const ProfileImage = ({ imageUrl }: ImageProps) => {
  return (
    <Image
      src={imageUrl}
      borderRadius={'full'}
      border={'solid 1px #8686F4'}
      w={[120, 200]}
      h={[120, 200]}
    />
  )
}
