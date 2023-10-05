import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Career } from '@/components/ProfilePage/Career'
import { Profile } from '@/components/ProfilePage/Profile'
import { Header } from '@/components/TopPage/Header'
import { NextPage } from 'next'

const ProfilePage: NextPage = () => {
  return (
    <DefaultLayout>
      <Header />
      <main style={{ padding: '0 10%', display: 'grid', gap: 20 }}>
        <Profile />
        <Career />
      </main>
    </DefaultLayout>
  )
}

export default ProfilePage
