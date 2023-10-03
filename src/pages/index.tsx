import Head from 'next/head'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Header } from '@/components/TopPage/Header'
import { Visual } from '@/components/TopPage/Visual'
import { Profile } from '@/components/TopPage/Profile'
import { Skills } from '@/components/TopPage/Skills'
//import { Blog } from '@/components/TopPage/Blog'
//import { Works } from '@/components/TopPage/Works'
import { Contact } from '@/components/TopPage/Contact'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OCHA.dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Header />
        <Visual />
        <main style={{ padding: '0 10%', display: 'grid', gap: 20 }}>
          <Profile />
          <Skills />
          {/*
          TODO:そのうち作る
          <Blog />
          <Works />*/}
          <Contact />
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
