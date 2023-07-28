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
          <SkillCard
            imageUrl="/images/javascript.png"
            categorie={['language']}
            genle={['web', 'front-end']}
          >
            JavaScript
          </SkillCard>
          <SkillCard
            imageUrl="/images/typescript.png"
            categorie={['language']}
            genle={['web', 'front-end', 'back-end']}
          >
            TypeScript
          </SkillCard>
        </SimpleGrid>
        <LinkButton href="skills">もっと見る</LinkButton>
      </Box>
    </Box>
  )
}

type cardProps = {
  children: React.ReactNode
  imageUrl: string
  categorie: Array<string>
  genle: Array<string>
}

const SkillCard = ({ children, imageUrl, categorie, genle }: cardProps) => {
  return (
    <Box
      bg={'#FFFFFF'}
      boxShadow={'md'}
      rounded={'lg'}
      padding={'15px'}
      gap={'5px'}
      display={'grid'}
    >
      <BadgeBox badge={categorie} />
      <Box
        display={'flex'}
        gap={'10px'}
        justifyContent={'flex-start'}
        minWidth={[100]}
        alignItems={'center'}
      >
        <Image src={imageUrl} rounded={'3xl'} h={70} w={70} />
        <Box>
          <Text fontWeight={'bold'}>{children}</Text>
          <BadgeBox badge={genle} />
        </Box>
      </Box>
    </Box>
  )
}

type badgesProps = {
  badge: Array<string>
}

const BadgeBox = ({ badge }: badgesProps) => {
  return (
    <Box display={'flex'} gap={['5px', '8px']} flexWrap={'wrap'}>
      {badge.map((m, index) => (
        <Badge key={index} bg="#EAEAFA" color={'#A3A0D3'}>
          {m}
        </Badge>
      ))}
    </Box>
  )
}
