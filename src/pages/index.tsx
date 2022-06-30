import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Script from 'next/script'
import NewFeature from '../components/new-feature'
import React, { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [lgScreen, setLgScreen] = useState(false)

  useEffect(() => {
    setLgScreen(window.innerWidth >= 1024);
  }, [])

  return (
    <div className="page">
      <Head>
        <title>Advanced Lashes</title>
        <meta name="description" content="Advanced Lashes" />
        <link rel="icon" href="/images/favicon-16x16.png" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Script src="https://kit.fontawesome.com/7c53527557.js" crossOrigin="anonymous" />

      <Layout>
        <NewFeature lgScreen={lgScreen} />
      </Layout>
    </div>
  )
}

export default Home
