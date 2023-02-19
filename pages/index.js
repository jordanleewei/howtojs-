import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome! You have found my secret website!" />
        <p className="description">
           Take a look at some of my projects.
        </p>
      </main>

      <Footer />
    </div>
  )
}
