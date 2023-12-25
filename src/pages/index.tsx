import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Header } from '@/components/TopPage/Header'
import { Visual } from '@/components/TopPage/Visual'
import { ProfileSection } from '@/components/TopPage/ProfileSection'
import { SkillsSection } from '@/components/TopPage/SkillsSection'
import { BlogSection } from '@/components/TopPage/BlogSection'
//import { Works } from '@/components/TopPage/Works'
import { ContactSection } from '@/components/TopPage/ContactSection'
import { InferGetStaticPropsType, NextPage } from 'next'
import { client } from '@/libs/client'
import { Blog } from '@/entitie/blog'
import { DeafaultHead } from '@/components/DefaultHead'
import { useEffect, useState } from 'react'
import { sendLogEvent } from '@/libs/analytics'
import { eventNames } from 'process'
import { Skill } from '@/entitie/skill'
import FetchSkillsUseCase from '@/usecases/skills/fetchSkillsUsecase'
const fetchSkillsUseCase = new FetchSkillsUseCase()

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

type Props = {
  blogs: Blog[]
}

const Home: NextPage<HomePageProps> = ({ blogs }: Props) => {
  const [skills, setSkills] = useState<Skill[]>([])
  useEffect(() => {
    const func = async () => {
      const fetchSkills = await fetchSkillsUseCase.execute()
      setSkills(fetchSkills)
    }
    func()
    sendLogEvent('view_top', undefined)
  }, [])
  return (
    <>
      <DeafaultHead
        title="お茶.dev"
        description="お茶/岡本和輝のポートフォリオ"
        ogpImage="https://www.xn--t8jy01w.dev/images/ogp.png"
      />
      <DefaultLayout>
        <Header />
        <Visual />
        <main style={{ padding: '0 10%', display: 'grid', gap: 20 }}>
          <ProfileSection />
          <SkillsSection skills={skills} />
          <BlogSection blogs={blogs} />

          {
            //TODO:そのうち作る
            /*<Works />*/
          }
          <ContactSection />
        </main>
        <footer
          style={{
            width: '100%',

            height: 40,
            bottom: 0,
          }}
        />
      </DefaultLayout>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blogs',
    queries: { limit: 3 },
  })
  return {
    props: { blogs: data.contents },
  }
}
