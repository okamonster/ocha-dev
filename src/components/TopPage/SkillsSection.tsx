import { Box, SimpleGrid, Image, Badge, Text } from '@chakra-ui/react'
import { SectionTitle } from '@/components/SectionTitle'
/** @jsxImportSource @emotion/react */
import { LinkButton } from '../Button/LinkButton'
import { fadeIn } from '@/constants/animation'
import { Skill } from '@/entitie/skill'
import FetchSkillsUseCase from '@/usecases/skills/fetchSkillsUsecase'
import { useEffect, useState } from 'react'

const fetchSkillsUseCase = new FetchSkillsUseCase()
const skillsPlaceHolder: Skill[] = [
  {
    imageUrl: '/images/html.png',
    name: 'HTML',
    categorie: 'markup',
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/css.png',
    name: 'CSS',
    categorie: 'markup',
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/javascript.png',
    name: 'JavaScript',
    categorie: 'language',
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/typescript.png',
    name: 'TypeScript',
    categorie: 'language',
    genle: ['web', 'front-end', 'back-end'],
  },
  {
    imageUrl: '/images/php.png',
    name: 'PHP',
    categorie: 'language',
    genle: ['web', 'back-end'],
  },
  {
    imageUrl: '/images/java.png',
    name: 'Java',
    categorie: 'language',
    genle: [],
  },
  {
    imageUrl: '/images/python.png',
    name: 'Python',
    categorie: 'language',
    genle: ['web', 'back-end', 'ML'],
  },
  {
    imageUrl: '/images/matlab.png',
    name: 'MATLAB',
    categorie: 'language',
    genle: ['Math'],
  },
  {
    imageUrl: '/images/verilog.png',
    name: 'Verilog',
    categorie: 'language',
    genle: ['HDL'],
  },
  {
    imageUrl: '/images/express.png',
    name: 'Express',
    categorie: 'framework',
    genle: ['web', 'back-end'],
  },
  {
    imageUrl: '/images/react.png',
    name: 'React.js',
    categorie: 'framework',
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/next.png',
    name: 'Next.js',
    categorie: 'framework',
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/three.png',
    name: 'Three.js',
    categorie: 'library',
    genle: ['webgl', 'XR'],
  },
  {
    imageUrl: '/images/mysql.png',
    name: 'MySQL',
    categorie: 'database',
    genle: ['RDB'],
  },
  {
    imageUrl: '/images/apache.png',
    name: 'Apache',
    categorie: 'runtime',
    genle: ['WebServer'],
  },
  {
    imageUrl: '/images/firebase.png',
    name: 'Firebase',
    categorie: 'platform',
    genle: ['BaaS'],
  },
  {
    imageUrl: '/images/vercel.png',
    name: 'Vercel',
    categorie: 'platform',
    genle: ['Hosting'],
  },

  {
    imageUrl: '/images/latex.png',
    name: 'LaTeX',
    categorie: 'software',
    genle: undefined,
  },
]

export const SkillsSection = () => {
  const [skills, setSkills] = useState<Skill[]>([])
  useEffect(() => {
    const func = async () => {
      const fetchSkills = await fetchSkillsUseCase.execute()
      setSkills(fetchSkills)
    }
    func()
  }, [])
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
          {skills.map((skill) => (
            <SkillCard
              name={skill.name}
              imageUrl={skill.imageUrl}
              categorie={skill.categorie}
              genle={skill.genle}
              key={skill.name}
            />
          ))}
        </SimpleGrid>
        {/**
         <LinkButton href="skills">もっと見る</LinkButton>
          **/}
      </Box>
    </Box>
  )
}

type cardProps = {
  children: React.ReactNode
  imageUrl: string
  categorie: string
  genle?: Array<string>
}

const SkillCard = ({ name, imageUrl, categorie, genle }: Skill) => {
  return (
    <Box
      bg={'#FFFFFF'}
      boxShadow={'md'}
      rounded={'lg'}
      padding={'15px'}
      gap={'5px'}
      display={'grid'}
    >
      <Badge bg="#EAEAFA" color={'#A3A0D3'}>
        {categorie}
      </Badge>
      <Box
        display={'flex'}
        gap={'10px'}
        justifyContent={'flex-start'}
        minWidth={[100]}
        alignItems={'center'}
      >
        <Image src={imageUrl} rounded={'3xl'} h={70} w={70} />
        <Box>
          <Text fontWeight={'bold'}>{name}</Text>
          <BadgeBox badge={genle} />
        </Box>
      </Box>
    </Box>
  )
}

type badgesProps = {
  badge?: Array<string>
}

const BadgeBox = ({ badge }: badgesProps) => {
  return (
    <Box display={'flex'} gap={['5px', '8px']} flexWrap={'wrap'}>
      {badge?.map((text, index) => (
        <Badge key={index} bg="#EAEAFA" color={'#A3A0D3'}>
          {text}
        </Badge>
      ))}
    </Box>
  )
}
