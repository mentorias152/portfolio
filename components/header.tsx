import styles from '../styles/Header.module.css'
import { useEffect, useState } from 'react'

const Header = () => {
    const [pageChosen, setPageChosen] = useState('Home');

    useEffect(() => {
        const chosen = document.querySelectorAll('nav a')
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
                <a  href='/#' id='Home'
                    onClick={() => setPageChosen('Home')}>
                    Home
                </a>
                <a  href='/#' id='Exp'
                    onClick={() => setPageChosen('Exp')}>
                    My experience
                </a>
                <a  href='/#' id='About'
                    onClick={() => setPageChosen('About')}>
                    About me
                </a>
            </nav>
        </div>
    )
}

export default Header;