import React from 'react'
import styles from "../components/stylesheets/Home.module.css"

const Home = () => (
  <div className={styles.home}>
    <div className={styles.header}>
      <h1 className={styles.title}>Welcome to Rhodes Ranch</h1>
    </div>
    <div className={styles.liveStockTitle}>
    <h1>Our LiveStocks</h1>
    </div>
    <div className={styles.container}>
      <div className={styles.boxes}>
        <div className={styles.innerBoxes1}>
        <img
          className={styles.images}
          src="https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg"
          alt=""
          />
          <h1>Heifer</h1>
          </div>
          <div className={styles.innerBoxes1}>
        <img
          className={styles.images}
          src="https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg"
          alt=""
        />
          <h1>Horses</h1>
          </div>
          <div className={styles.innerBoxes1}>
        <img
          className={styles.images}
          src="https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg"
          alt=""
        />
          <h1>hello</h1>
          </div>
      </div>
    </div>
  </div>
)

export default Home