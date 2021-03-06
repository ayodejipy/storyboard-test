import type { NextPage } from 'next'
import Head from 'next/head'

// components
import Navigation from '../components/Navigation/Nav'
import PageTitle from '../components/PageTitle'
import TabWrapper from '../components/Tabs/TabWrapper'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navigation />
      </header>

      <main className="px-12">
        <PageTitle />
        <TabWrapper />
      </main>
    </div>
  )
}

export default Home
