import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/globals.css';
import ReactPlayer from 'react-player';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>

        <button onClick={handleVisible} className={styles.button}>
          Time to explore!
        </button>

        <div
          className={styles.videoContainer}
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <div className={styles.videoList}>
            <ReactPlayer url="https://www.youtube.com/watch?v=uYuOaES7PDA" width="100%" height="100%" />
            <ReactPlayer url="https://www.youtube.com/watch?v=PxjKNODUk1A" width="100%" height="100%" />
            <ReactPlayer url="https://www.youtube.com/watch?v=lGnazT38vWc" width="100%" height="100%" />
          </div>
        </div>
      </main>
    </div>
  );
}
