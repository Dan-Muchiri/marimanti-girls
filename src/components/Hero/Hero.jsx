import React from 'react';
import styles from "./HeroStyles.module.css";

function Hero() {

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
    }
};

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.back}>
          <div className={styles.backImage}>
            <img src="/landscape.jpg" className={styles.image} alt="Background" />
            <img src="/potrait.jpg" className={styles.imageSmall} alt="Small Background" />
          </div>
          <div className={styles.overlay} /> {/* Background overlay */}
      </div>
      <div className={styles.heroContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftWords}>
              <h1>Motto : Diligence for excellence</h1>
              <div className={styles.buttons}>
              <a onClick={() => handleScroll("about")}>About Us</a>
              <a onClick={() => handleScroll("contact")}>Request Info</a>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Hero