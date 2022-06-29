import type { NextPage } from 'next'
import * as React from "react"
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Script from 'next/script'
import NewFeature from '../components/new-feature'

const Home: NextPage = () => {
  return (
    <div className="page">
      <Head>
        <title>Advanced Lashes</title>
        <meta name="description" content="Advanced Lashes" />
        <link rel="icon" href="/images/favicon-16x16.png" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <Script src="https://kit.fontawesome.com/7c53527557.js" crossOrigin="anonymous" />
      </Head>

      <Layout>
        <NewFeature />
      </Layout>
    </div>
  )
}

export default Home
