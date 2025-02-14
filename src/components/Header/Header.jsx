import React, { useState } from 'react';
import styles from "./HeaderStyles.module.css";
import { FaBars, FaTimes} from 'react-icons/fa';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 88; // Adjust according to your header height
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
    
            setIsMenuOpen(false); // Close menu on mobile after click
        }
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
                    <a onClick={() => handleScroll("hero")}>Home</a>
                    <a onClick={() => handleScroll("about")}>About</a>
                    <a onClick={() => handleScroll("admission")}>Admission</a>
                    <a onClick={() => handleScroll("clubs")}>Societies</a>
                    <a onClick={() => handleScroll("gallery")}>Gallery</a>
                    <a onClick={() => handleScroll("contact")}>Contact</a>
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