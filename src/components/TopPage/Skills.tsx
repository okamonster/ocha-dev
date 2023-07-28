import { Box, SimpleGrid, Image, Badge, Text } from '@chakra-ui/react'
import { SectionTitle } from '@/components/TopPage/SectionTitle'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LinkButton } from '../Button/LinkButton'
import { fadeIn } from '@/constants/animation'

const cardContainer = css({
  borderRadius: 8,
  background: '#FFFFFF',
  padding: 4,
  display: 'flex',
})

export const Skills = () => {
  return (
    <Box display={'grid'} gap={'20px'}>
      <SectionTitle title="SKILLS" description="技術スキル" />
      <Box
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
        gap={'20px'}
        opacity={0}
        animation={`${fadeIn} 1s forwards 3s`}
      >
        <SimpleGrid gap={'5px'} columns={[1, 2, 3]}>
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </SimpleGrid>
        <LinkButton href="skills">もっと見る</LinkButton>
      </Box>
    </Box>
  )
}

export const SkillCard = () => {
  return (
    <Box
      bg={'#FFFFFF'}
      boxShadow={'md'}
      rounded={'lg'}
      padding={'15px'}
      gap={'5px'}
      display={'grid'}
    >
      <BadgeBox></BadgeBox>
      <Box
        display={'flex'}
        gap={'10px'}
        justifyContent={'flex-start'}
        minWidth={300}
      >
        <Image src="" rounded={'3xl'} h={70} w={70} background={'blue'} />
        <Box>
          <Text fontWeight={'bold'}>TypeScript</Text>
          <Text>頑張ってる</Text>

          <BadgeBox></BadgeBox>
        </Box>
      </Box>
    </Box>
  )
}

const BadgeBox = () => {
  return (
    <Box display={'flex'} gap={['5px', '8px']}>
      <Badge>aaa</Badge>
      <Badge>hogehoge</Badge>
    </Box>
  )
}
