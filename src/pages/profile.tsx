import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Career } from '@/components/ProfilePage/Career'
import { Profile } from '@/components/ProfilePage/Profile'
import { ProfileDiscription } from '@/components/ProfilePage/ProfileDescription'
import { Header } from '@/components/TopPage/Header'
import { NextPage } from 'next'
import { Text } from '@chakra-ui/react'

const ProfilePage: NextPage = () => {
  return (
    <DefaultLayout>
      <Header />
      <main style={{ padding: '0 10%', display: 'grid', gap: 20 }}>
        <Profile />
        <ProfileDiscription>
          <Text>
            高専から編入して琵琶湖の限界大学生になりました。
            <br />
            メンヘラテクノロジーでエンジニアとしてお世話になっています。
            <br />
            朝と直射日光と膝関節が弱点です。
          </Text>
        </ProfileDiscription>
        <Career />
      </main>
    </DefaultLayout>
  )
}

export default ProfilePage
