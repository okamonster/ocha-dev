import {
  Badge,
  Box,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { SectionTitle } from '../SectionTitle'
import { fadeIn } from '@/constants/animation'
import { FaGithub, FaInstagram, FaTwitter, FaXbox } from 'react-icons/fa'
import Link from 'next/link'

export const ContactSection = () => {
  return (
    <Box display={'grid'} gap={'20px'}>
      <SectionTitle title={'CONTACT'} description={'お問い合わせ'} />
      <Box
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
        opacity={0}
        animation={`${fadeIn} 1s forwards 3s`}
      >
        <SimpleGrid columns={2} gap={'10px'}>
          <ContactCard
            title="Twitter / X"
            color={'#FFFFFF'}
            contactId="@makura_namgeru"
            bg="linear-gradient(to right,#5cabdb,#284859,#000000)"
          >
            <Link href={'https://twitter.com/makura_nageru'}>
              <IconButton
                aria-label={'Twitter'}
                icon={<FaTwitter />}
                color={'#1DA1F2'}
              />
              <Text fontSize={[30, 50]} color={'#FFFFFF'}></Text>
            </Link>
            <Link href={'https://twitter.com/makura_nageru'}>
              <IconButton
                aria-label={'Twitter'}
                icon={<p>𝕏</p>}
                color={'000000'}
              />
            </Link>
          </ContactCard>
          <Box display={'flex'} flexDir={'column'} gap={'10px'} w={'100%'}>
            <ContactCard
              title="Instagram"
              color="#FFFFFF"
              bg="linear-gradient(45deg,#4C64D3,#CF2E92,#F26939,#FFDD83)"
              contactId="oka_monster"
            >
              <Link href={'https://www.instagram.com/oka_monster/'}>
                <IconButton
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  color="#CF2E92"
                />
              </Link>
            </ContactCard>

            <ContactCard
              title="GitHub"
              color="#FFFFFF"
              bg="#000000"
              contactId="okamonster"
            >
              <Link href="https://github.com/okamonster">
                <IconButton aria-label="GitHub" icon={<FaGithub />} />
              </Link>
            </ContactCard>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

type ContactCardProps = {
  title: string
  color: string
  children: React.ReactNode
  contactId?: string
  bg: string
}

const ContactCard = ({
  title,
  color,
  children,
  contactId,
  bg,
}: ContactCardProps) => {
  return (
    <Box
      boxShadow={'xl'}
      borderRadius={'md'}
      display={'flex'}
      flexDir={'column'}
      border={'solid 1px #f0f0f0'}
      gap={'10px'}
      p={['20px']}
      bg={bg}
      w={['100%', '200px', '400px']}
    >
      <Text color={color}>{title}</Text>
      <Box display={'flex'} gap={'10px'}>
        {children}
      </Box>
      <Text fontSize={12} color={'#D3D3D3'}>
        {contactId}
      </Text>
    </Box>
  )
}
