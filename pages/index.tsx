import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Profile from '../components/profile'
import Blog from '../components/blog'

import { useState } from 'react'

export default function Home() {

  const [burgerClass, setBurgerClass] = useState(styles.header_menu_bar + ' ' + styles.header_menu_unclicked)
  const [isMenuClicked, setIsMenuClicked] = useState(true);
  const [menuListClass, setMenuListClass] = useState(styles.header_menu_list + ' ' + styles.hidden)
  
  const handleClickMenu = () => {
    if (isMenuClicked) {
      setBurgerClass(styles.header_menu_bar + ' ' + styles.header_menu_clicked);
      setMenuListClass(styles.header_menu_list + ' ' + styles.visible);
    }
    else {
      setBurgerClass(styles.header_menu_bar + ' ' + styles.header_menu_unclicked);
      setMenuListClass(styles.header_menu_list + ' ' + styles.hidden);
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Mentorias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.header_menu} onClick={handleClickMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
        <Header />
        <Profile />
        <Blog />
      </main>
    </div>

  )
}
