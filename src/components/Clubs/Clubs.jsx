import React from 'react'
import styles from "./ClubsStyles.module.css"

function Clubs() {
  return (
    <section id="clubs" className={styles.container}>
        <div className={styles.wAw}>
            <h2>Clubs & Societies</h2>
            <p>
              Our school offers a wide range of clubs and societies to suit various interests, from personal growth to extracurricular activities. These include the Christian Union (CU), Young Catholic Students (YCS), and Seventh-day Adventist (SDA) societies for spiritual development. In addition, we have the Wildlife and Environment Club, Science Club, Debate Club, Journalism, Scouts/Girl Guides, Mathematics Club, Drama, and Music Club, all fostering community, creativity, and learning across diverse fields.
            </p>
        </div>
    </section>
  )
}

export default Clubs
