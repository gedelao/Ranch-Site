import React from 'react'
import Footer from '../components/Footer'
import styles from '../components/stylesheets/AboutUs.module.css'

function AboutUs() {
  return (
    <>
    <div className={styles.aboutContainer}>
  <div className={styles.mainAboutSectionGrid}>
    <div className={styles.mainAboutText}>
        <h2>Meet The Gang</h2>
        <p>Pam Rhodes and David Rhodes.</p>
    </div>  
    <div className={styles.mainAboutPicture}>
      <img src='Moogie.jpeg' alt='Moogie'></img>
      <div className={styles.hiddenText}>
        <h2>Pam Rhodes and David Rhodes.</h2>
        <div className={styles.hiddenParagraph}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
    </div>
  </div>
</div>
  <div className={styles.specialtyContainer}>
    <h2 className={styles.specialtyHeader}>Meet The Rest!</h2>
    <div className={styles.specialtyGrid}>
      <div className={styles.specialtyCard}>
        <div className={styles.image}>
          <img src='Jackson.jpeg' alt='Jackson'></img>
        </div>
         <div className={styles.aboutUs}>
        <h1>Jackson</h1>
         </div>
        <div className={styles.description}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div> 
     <div className={styles.specialtyCard}>
        <div className={styles.image}>
        <img src='Benji.jpeg' alt='Benji'></img>
        </div>
         <div className={styles.aboutUs}>
        <h1>Benji</h1>
         </div>
        <div className={styles.description}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div> 
     <div className={styles.specialtyCard}>
        <div className={styles.image}>
          <img src='Erin Photo.jpg' alt='Erin'></img>
        </div>
        <div className={styles.aboutUs}>
        <h1>Erin Cranston</h1>
        </div>
        <div className={styles.description}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div> 
      <div className={styles.specialtyCard}>
        <div className={styles.image}>
          <img src='https://images.khinsider.com/KINGDOM%20HEARTS%20III/Artwork/Characters/Sora05.png' alt='Callie'></img>
        </div>
        <div className={styles.aboutUs}>
        <h1>Callie Rhodes</h1>
        </div>
        <div className={styles.description}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div> 
     <div className={styles.specialtyCard}>
        <div className={styles.image}>
          <img src='Natalie Photo.jpg' alt='Nat'></img>
        </div>
         <div className={styles.aboutUs}>
        <h1>Natalie Cranston</h1>
         </div>
        <div className={styles.description}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div> 
    </div>
  </div>
    </>
  )
}

export default AboutUs