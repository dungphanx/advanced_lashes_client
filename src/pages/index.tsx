import type { NextPage } from 'next'
import * as React from "react"
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Script from 'next/script'

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

      <main className="main">
        <Layout/>
      </main>

      <footer className={"footer"}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={"logo"}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
