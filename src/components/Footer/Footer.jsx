import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from "./FooterStyles.module.css"

function Footer() {

  const currentYear = new Date().getFullYear();

  const [scrollToSection, setScrollToSection] = useState(null);
      const location = useLocation();
      const navigate = useNavigate();
  
      const handleScroll = (id) => {
          if (location.pathname !== "/") {
              setScrollToSection(id);  // Store the section to scroll to
              navigate("/");           // Navigate to the homepage
          } else {
              scrollToElement(id);     // Scroll directly if already on the homepage
          }
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
    <>
      <div className={styles.container}>
      <div className={styles.sect}>
          <h1 >Marimanti Girls' High School</h1>
          <div className={styles.copyright}>
            <p>© MarimantiGirlsHighSchool {currentYear}. All rights reserved.</p>
          </div>
      </div>
      <div className={styles.sect}>
        <div classname={styles.head}>
          <h5 className={styles.head_h5}>Address</h5>
        </div>
        <div className={styles.content}>
          <p>P.O. BOX 30-60215 MARIMANTI, THARAKA</p>
        </div>
        <div classname={styles.head}>
          <h5 className={styles.head_h5}>Contact Us</h5>
        </div>
        <div className={styles.content}>
        <p>Email: marimantigirls@gmail.com</p>
        <p>Phone Number: +254722700361</p>
        </div>
      </div>
      <div className={styles.sect}>
        <div classname={styles.head}>
          <h5 className={styles.head_h5}>Quick Links</h5>
        </div>
        <div className={styles.navigation}>
            <Link to="/" onClick={() => handleScroll("hero")}>Home</Link>
            <Link to="/" onClick={() => handleScroll("about")}>About</Link>
            <Link to="/" onClick={() => handleScroll("admission")}>Admission</Link>
            <Link to="/" onClick={() => handleScroll("clubs")}>Societies</Link>
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
             <Link to="/" onClick={() => handleScroll("contact")}>Contact</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer