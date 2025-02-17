import React from 'react';
import styles from "./AdmissionStyles.module.css";

function Admission() {

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
    <section id="admission" className={styles.admissionSection}>
      <div className={styles.imageContainer}>
        <img src="/admission.jpg" alt="Admission" className={styles.image} loading="lazy"/>
      </div>
      <div className={styles.content}>
        <h2>GRADE 10 ADMISSION</h2>
        <h5>Who is admitted in grade 10?</h5>
        <p>Being a public school, the students are allocated to the school by the Ministry of Education through Merit and Choice.</p>
        <p>A student has to choose the school at his primary candidate class and has to achieve the required score.</p>
        <a onClick={() => handleScroll("contact")}>Request Info</a>
      </div>
    </section>
  );
}

export default Admission;
