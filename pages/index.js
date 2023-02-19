import { useState } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import ReactPlayer from 'react-player';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome! You have found my secret website!" />
        <p className="description">Take a look at some of my projects.</p>

        <button className="explore-button" onClick={handleShowVideo}>
          Time to explore!
        </button>

        {showVideo && (
          <div className="video-container">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=uYuOaES7PDA"
              width="100%"
              height="100%"
            />
            <div className="scroll-button" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
              Scroll to next video
            </div>
          </div>
        )}
      </main>

      <Footer />

      <style jsx>{`
        .explore-button {
          background-color: #f53b57;
          border: none;
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
          font-size: 24px;
          padding: 16px;
          transition: opacity 0.5s;
        }

        .explore-button:hover {
          opacity: 0.8;
        }

        .video-container {
          opacity: 0;
          transition: opacity 1s;
        }

        .video-container.show {
          opacity: 1;
        }

        .scroll-button {
          background-color: #f53b57;
          border: none;
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
          font-size: 18px;
          padding: 12px 24px;
          position: absolute;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          transition: opacity 0.5s;
        }

        .scroll-button:hover {
          opacity: 0.8;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
