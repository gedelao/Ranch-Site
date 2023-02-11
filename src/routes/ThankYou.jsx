import React from 'react'
import styles from '../components/stylesheets/ThankYou.module.css'

const ThankYou = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Thanks! You're Awesome. Seriously.</h1>
    <div className={styles.boxesContainer}>
      <div className={styles.box}>
        <h1>Hello</h1>
      </div>
      <div className={styles.box}>
        <h1>Hello</h1>
      </div>
      <div className={styles.box}>
        <h1>Hello</h1>
      </div>
    </div>
  </div>
)
export default ThankYou