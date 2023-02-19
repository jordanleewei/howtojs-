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
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  
  const [showVideos, setShowVideos] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleShowVideos = () => {
    setShowVideos(true);
  }

  const handleNextVideo = () => {
    setCurrentVideo(currentVideo + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        {!showVideos &&
          <button onClick={handleShowVideos}>Time to explore!</button>
        }
        {showVideos &&
          <div>
            <div className="video-container">
              {currentVideo === 0 &&
                <YouTube videoId="uYuOaES7PDA" opts={opts} onReady={(event) => event.target.playVideo()} />
              }
              {currentVideo === 1 &&
                <YouTube videoId="PxjKNODUk1A" opts={opts} onReady={(event) => event.target.playVideo()} />
              }
              {currentVideo === 2 &&
                <YouTube videoId="lGnazT38vWc" opts={opts} onReady={(event) => event.target.playVideo()} />
              }
            </div>
            <div className="video-controls">
              <button onClick={handleNextVideo} disabled={currentVideo === 2}>Next Video</button>
            </div>
          </div>
        }
      </main>

      <Footer />
    </div>
  )
}
