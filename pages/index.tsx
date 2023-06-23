import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Profile from '../components/profile'
import Blog from '../components/blog'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Mentorias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Profile />
        <Blog />
      </main>
    </div>

  )
}
