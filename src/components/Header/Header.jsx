import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./HeaderStyles.module.css";
import { FaBars, FaTimes} from 'react-icons/fa';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <section id='header' className={styles.container}>
        <div className={styles.sub}>
                <div className={styles.logo}>
                    {/* <img src="" alt="Marimanti Logo" className={styles.logoImage} /> */}
                    <p className={styles.logoName}>Marimanti Girls' High School</p>
                </div>
                <div className={`${styles.navBlock} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <nav className={styles.nav}>
                        <a href="#hero" onClick={toggleMenu}>Home</a>
                        <a href="#about" onClick={toggleMenu}>About</a>
                        <a href="#admission" onClick={toggleMenu}>Admission</a>
                        <a href="#gallery" onClick={toggleMenu}>Gallery</a>
                        <a href="#contact" onClick={toggleMenu}>Contact</a>
                    </nav>
                </div>

                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {isMenuOpen ? <div className={styles.menu}><FaTimes size={30} /></div> : <div className={styles.menu}><FaBars size={30} /></div>}
                </div>
            </div>
    </section>
  )
}

export default Header