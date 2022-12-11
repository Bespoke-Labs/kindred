import Head from 'next/head';
// @ts-ignore
import Landing from './landing/landing';
import Navbar from './Navbar/Navbar';
import Data from './Stuff/data';
import Intro from './Stuff/name';
import CTA from './Stuff/cta';

export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>Kindred Home</title>
        <meta name="description" content="Generated by npx create-web3" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <header style={{ padding: '1rem' }}>
        <Navbar />
      </header>
      {/* <Intro /> */}
      <CTA />
      <Data />

      <main
        style={{
          minHeight: '60vh',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Landing />
        <footer />
      </main>
    </div>
  );
}
