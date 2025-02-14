import React from 'react'
import styles from "./ClubsStyles.module.css"

function Clubs() {
  return (
    <section id="clubs" className={styles.container}>
        <div className={styles.wAw}>
            <h2>Clubs & Societies</h2>
            <p>
              Our school offers a variety of societies that cater to different interests and beliefs, fostering personal growth and a sense of community. The Christian Union (CU) provides a platform for students to strengthen their faith through worship, prayer, and fellowship. The Young Catholic Students (YCS) society encourages spiritual development and service among Catholic students. The Seventh-day Adventist (SDA) society offers a space for Sabbath worship, Bible study, and community outreach. These societies, along with many others, create an inclusive environment where students can connect, learn, and grow together.
            </p>
        </div>
    </section>
  )
}

export default Clubs
