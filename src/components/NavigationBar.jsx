// import React, { useState } from "react";
// import styles from "./stylesheets/Navigation.module.css";

// const NavigationBar = () => {
// const [isNavOpen, setIsNavOpen] = useState(false);

// return (
// <div className={styles.mainDiv}>
// <div className={styles.logo}>
// <img
//        src="https://w7.pngwing.com/pngs/174/600/png-transparent-cat-animal-lovely-cat.png"
//        alt=""
//      />
// </div>
// <nav className={`${styles.primaryNav} ${isNavOpen ? styles.navOpen : ""}`}>
// <ul className={styles.divLinks}>
// <li>
// <a href="/">Home</a>
// </li>
// <li>
// <a href="/Livestock">LiveStock</a>
// </li>
// <li>
// <a href="/AboutUs">About Us</a>
// </li>
// <li>
// <a href="/ThankYou">Thank You</a>
// </li>
// </ul>
// </nav>
// <div className={styles.toggleBtn} onClick={() => setIsNavOpen(!isNavOpen)}>
// {isNavOpen ? <span>×</span> : <span>☰</span>}
// </div>
// </div>
// );
// };
// export default NavigationBar;

import React, { useState } from "react";
import styles from "./stylesheets/Navigation.module.css";

const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.logo}>
        <img
          src="https://w7.pngwing.com/pngs/174/600/png-transparent-cat-animal-lovely-cat.png"
          alt=""
        />
      </div>
      <nav className={`${styles.primaryNav} ${isNavOpen ? styles.navOpen : ""}`}>
        <ul className={styles.divLinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Livestock">LiveStock</a>
          </li>
          <li>
            <a href="/AboutUs">About Us</a>
          </li>
          <li>
            <a href="/ThankYou">Thank You</a>
          </li>
        </ul>
      </nav>
      <div className={styles.toggleBtn} onClick={() => setIsNavOpen(!isNavOpen)}>
        {isNavOpen ? <span>×</span> : <span>☰</span>}
      </div>
    </div>
  );
};
export default NavigationBar;