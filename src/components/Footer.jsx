import React from 'react'
import styles from '../components/stylesheets/Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
      <h1 className={styles.footerHeader}>LET'S CONNECT</h1>
            <form action="action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit"/>
  </form>
        </div>
    </div>
  )
}

export default Footer