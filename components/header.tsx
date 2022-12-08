import styles from '../styles/Header.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [pageChosen, setPageChosen] = useState('Home');

    useEffect(() => {
        const chosen = document.querySelectorAll('a')
        if (chosen) {
            chosen.forEach(page => {
                page.classList.remove(styles.header_routes_active)
                if (page.id == pageChosen)
                    page.classList.add(styles.header_routes_active)
            })
        }
    })  

    return (
        <div className={styles.header}>
            <div className={styles.header_mentorias}>
                Mentorias
            </div>
            <nav className={styles.header_routes}>
                <Link  href='/#' id='Home' className={styles.link}
                    onClick={() => setPageChosen('Home')}>
                    Home
                </Link>
                <Link  href='/#' id='Exp' className={styles.link}
                    onClick={() => setPageChosen('Exp')}>
                    My experience
                </Link>
                <Link  href='/#' id='About' className={styles.link}
                    onClick={() => setPageChosen('About')}>
                    About me
                </Link>
            </nav>
        </div>
    )
}

export default Header;