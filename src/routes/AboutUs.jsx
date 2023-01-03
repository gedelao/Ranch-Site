import React from 'react'
import styles from '../components/stylesheets/AboutUs.module.css'

function AboutUs() {
  return (
    <div className={styles.aboutContainer}>
  <div className={styles.mainAboutSectionGrid}>
    <div class={styles.mainAboutText}>
        <h2>Meet The Rhodes</h2>
        <p>Pam Rhodes and David Rhodes have been .</p>
        {/* <button className="mainAboutButton">About Us</button> */}
    </div>  
    <div className={styles.mainAboutPicture}>
      
    </div>
  </div>
</div>
  )
}

export default AboutUs