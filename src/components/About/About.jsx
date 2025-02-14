import React from 'react';
import { FaBullhorn, FaChalkboardTeacher, FaGlobe } from 'react-icons/fa'; // Example icons
import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section id="about" className={styles.container}>
        <div className={styles.wAw}>
            <h2>Who are we</h2>
            <p>Located in Marimanti, Tharaka Nithi County, Marimanti Girls is a leading institution dedicated to academic excellence, discipline, and holistic education. We empower young women with knowledge, skills, and values to excel in their careers and communities. Through academics, leadership, and extracurricular activities, we nurture confident, well-rounded individuals ready for the future.</p>
        </div>
        <div className={styles.mVm}>
            <div className={styles.mvmContainer}>
                {/* Moto Card */}
                <div className={styles.card}>
                    <FaBullhorn className={styles.icon} />
                    <h3>Motto</h3>
                    <p>"Diligence for excellence."</p>
                </div>

                {/* Mission Card */}
                <div className={styles.card}>
                    <FaChalkboardTeacher className={styles.icon} />
                    <h3>Mission</h3>
                    <p>To provide high-quality education that fosters leadership, academic achievement, and holistic development in young women.</p>
                </div>

                {/* Vision Card */}
                <div className={styles.card}>
                    <FaGlobe className={styles.icon} />
                    <h3>Vision</h3>
                    <p>To be a world-class institution empowering women to lead with integrity and contribute positively to their communities.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
