import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import YouTube from 'react-youtube';

export default function Home() {
  const videoId = 'uYuOaES7PDA'; // replace with your YouTube video ID

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
        <div class="react-player-wrapper">
          <div class="react-player">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uYuOaES7PDA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
