import type { NextPage } from 'next'
import * as React from "react"
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="cointainer">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon-16x16.png" />
      </Head>

      <main className="main">
        <HomeContent/>
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

const HomeContent: React.FC<any>  = () => {
  return <>
    <div className='cointainer'>
      <h1>Home Content</h1>
    </div>
  </>
}

export default Home
