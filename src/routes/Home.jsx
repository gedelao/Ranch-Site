import React from 'react'
import Footer from '../components/Footer'
import styles from "../components/stylesheets/Home.module.css"

function Home() {
  return (
    <>
    <div className={styles.home}>
      <div className={styles.row}>
        <div className={styles.header}>
        <h1 className={styles.title}>
          Welcome to Rhodes Ranch
        </h1>
        </div>
      </div>
      <div className={styles.container}>
      <div className={styles.boxes}>
        <div className={styles.boxes1}>
          <img className={styles.images} src='https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg' alt='' />
        </div>
        <div className={styles.boxes1}>
          <img className={styles.images} src='https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg' alt='' />
        </div>
        <div className={styles.boxes1}>
          <img className={styles.images} src='https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg' alt='' />
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Home