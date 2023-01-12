import React from 'react'
import styles from "../components/stylesheets/Home.module.css"

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.row}>
        <div className={styles.header}>
        <h1 className={styles.title}>
          Welcome to Rhodes Ranch
        </h1>
        </div>
      </div>
      <div className={styles.box1}>
      <h1 style={{ display: "grid"  }}>hello</h1>
      </div>
    </div>
  )
}

export default Home