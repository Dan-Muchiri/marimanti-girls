import React from 'react'
import styles from "./AboutStyles.module.css"

function About() {
  return (
    <section id="about" className={styles.container}>
        <div className={styles.wAw}>
            <h2>Who are we</h2>
            <p>Located in Marimanti, Tharaka Nithi County, Marimanti Girls is a leading institution dedicated to academic excellence, discipline, and holistic education. We empower young women with knowledge, skills, and values to excel in their careers and communities. Through academics, leadership, and extracurricular activities, we nurture confident, well-rounded individuals ready for the future.</p>
        </div>
    </section>
  )
}

export default About