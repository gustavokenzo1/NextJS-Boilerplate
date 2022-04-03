import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

/* 
How to import image:
import ExampleLogo from '../images/example-logo.png'

<ExampleLogo />
*/

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Next.js Boilerplate</title>
      </Head>

      <h1>ReactJS Structure</h1>
      <p>A ReactJS + NextJS boilerplate</p>
    </Container>
  )
}

export default Home
