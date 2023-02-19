import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import YouTube from 'react-youtube'
import { useState } from 'react'

export default function Home() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  }

  const [showVideos, setShowVideos] = useState(false)

  const handleShowVideos = () => {
    setShowVideos(true)
  }

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
        <button onClick={handleShowVideos}>Time to explore!</button>
        {showVideos && (
          <>
            <div className="video-container">
              <YouTube videoId="uYuOaES7PDA" opts={opts} />
            </div>
            <div className="next-video-button-container">
              <a href="#video2">Next Video &gt;</a>
            </div>
            <div id="video2" className="video-container">
              <YouTube videoId="PxjKNODUk1A" opts={opts} />
            </div>
            <div className="next-video-button-container">
              <a href="#video3">Next Video &gt;</a>
            </div>
            <div id="video3" className="video-container">
              <YouTube videoId="lGnazT38vWc" opts={opts} />
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
