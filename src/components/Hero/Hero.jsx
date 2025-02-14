import React from 'react';
import styles from "./HeroStyles.module.css";

function Hero() {
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
                <a href="#about">
                      About Us
                </a>
                <a href="#contact" >
                Request Info
                </a>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Hero