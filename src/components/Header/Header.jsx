import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from "./HeaderStyles.module.css";
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollToSection, setScrollToSection] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = (id) => {
        if (location.pathname !== "/") {
            setScrollToSection(id);  // Store the section to scroll to
            navigate("/");           // Navigate to the homepage
        } else {
            scrollToElement(id);     // Scroll directly if already on the homepage
        }
        setIsMenuOpen(false); // Close menu on mobile after click
    };

    const scrollToElement = (id) => {
        setTimeout(() => { // Delay to ensure the page is fully loaded
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 88;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }, 200); // Small delay to allow rendering
    };

    // Scroll to the section after navigation completes
    useEffect(() => {
        if (scrollToSection) {
            scrollToElement(scrollToSection);
            setScrollToSection(null); // Reset after scrolling
        }
    }, [location, scrollToSection]);

    return (
        <section id='header' className={styles.container}>
            <div className={styles.sub}>
                <div className={styles.logo}>
                    <p className={styles.logoName}>Marimanti Girls' High School</p>
                </div>
                <div className={`${styles.navBlock} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <nav className={styles.nav}>
                        <Link to="/" onClick={() => handleScroll("hero")}>Home</Link>
                        <Link to="/" onClick={() => handleScroll("about")}>About</Link>
                        <Link to="/" onClick={() => handleScroll("admission")}>Admission</Link>
                        <Link to="/" onClick={() => handleScroll("clubs")}>Societies</Link>
                        <Link to="/" onClick={() => handleScroll("departments")}>Departments</Link>
                        <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                        <Link to="/" onClick={() => handleScroll("contact")}>Contact</Link>
                    </nav>
                </div>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {isMenuOpen ? <div className={styles.menu}><FaTimes size={30} /></div> : <div className={styles.menu}><FaBars size={30} /></div>}
                </div>
            </div>
        </section>
    );
}

export default Header;
