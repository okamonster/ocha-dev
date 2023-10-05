import { Box, Image, List, Text, UnorderedList } from '@chakra-ui/react'
import { SectionTitle } from '../SectionTitle'

import { LinkButton } from '../Button/LinkButton'
import { fadeIn } from '@/constants/animation'

export const Profile = () => {
  return (
    <Box display={'grid'} gap={'20px'}>
      <SectionTitle title="PROFILE" description="自己紹介/経歴" />
      <Box
        display={'flex'}
        justifyContent={'center'}
        gap={['20px', '40px']}
        flexDirection={['column', 'row']}
        opacity={0}
        animation={`${fadeIn} 1s forwards 3s`}
      >
        <ProfileImage imageUrl={'/images/profile.jpeg'} />
        <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
          <ProfileName name="お茶 / 岡本 和輝" profession="Web Engineer" />
          <ProfileSection title="所属">
            立命館大学電子情報工学科
            <br />
            株式会社メンヘラテクノロジー
          </ProfileSection>
          <ProfileSection title="好きな技術">three.js / WebXR</ProfileSection>
          <ProfileSection title="趣味">
            <UnorderedList>
              <List>
                <Text>コード書いて気絶</Text>
              </List>
              <List>
                <Text>コーヒー</Text>
              </List>
              <List>
                <Text>スワンスワンズ</Text>
              </List>
            </UnorderedList>
          </ProfileSection>
          <LinkButton href={'/profile'}>もっと見る</LinkButton>
        </Box>
      </Box>
    </Box>
  )
}

type imageProps = {
  imageUrl: string
}

const ProfileImage = ({ imageUrl }: imageProps) => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Image
        src={imageUrl}
        rounded={'full'}
        w={[120, 200]}
        h={[120, 200]}
        border={'solid 1px #8686F4'}
      />
    </Box>
  )
}

type nameProps = {
  name: string
  profession: string
}

const ProfileName = ({ name, profession }: nameProps) => {
  return (
    <Box>
      <Text
        color={'#8686F4'}
        fontWeight={'bold'}
        fontSize={[16, 20]}
        padding={0}
      >
        {name}
      </Text>
      <Text fontSize={[14, 16]} fontWeight={'semibold'}>
        {profession}
      </Text>
    </Box>
  )
}

type sectionProps = {
  title: string
  children: React.ReactNode
}
const ProfileSection = ({ title, children }: sectionProps) => {
  return (
    <Box>
      <Text fontWeight={'bold'} color={'#A3A0D3'} fontSize={[12, 16]}>
        {title}
      </Text>
      <>{children}</>
    </Box>
  )
}
