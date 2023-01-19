import React from 'react'
import styles from '../components/stylesheets/ThankYou.module.css'

function ThankYou() {
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.titleDiv}>
          <h1>Thanks! You're Awesome. Seriously.</h1>
        </div>
      </div>
      <div className={styles.boxes}>
        <div className={styles.innerBoxes}>
          <h1>hello</h1>
        </div>
        <div className={styles.innerBoxes}>
          <h1>hello</h1>
        </div>
        <div className={styles.innerBoxes}>
          <h1>hello</h1>
        </div>
      </div>
    </div>
  )
}

export default ThankYou