import React from 'react'
import styles from '../components/stylesheets/Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.form}>
            <div className={styles.name}>
              <div className={styles.firstName}>
            <label for="name">Your Name: </label>
                <input type="text" name="name" id="name" required/>
              </div>
              <div className={styles.lastName}>
                <input type="text" name="name" id="name" required/>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer