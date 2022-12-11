import Head from 'next/head';
import SideMenu from './api/SideMenu/SideMenu';
// @ts-ignore
import Landing from './landing/landing';
import DappBar from './Navbar/DappBar';

import ApproveModal from './Stuff/ApproveModal';


export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>Kindred Dapp</title>
        <meta name="description" content="Generated by npx create-web3" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:ital,wght@0,300;0,500,700;0,900;1,400&family=Roboto:wght@700&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <header style={{ padding: '' }}>
        <SideMenu />
      </header>

      <main
        style={{
          minHeight: '60vh',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ECEEFF'
        }}
      >
        <ApproveModal />

        <footer />
      </main>
    </div>
  );
}
