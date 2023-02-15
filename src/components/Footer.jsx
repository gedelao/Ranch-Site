import React, { useState } from "react";
import styles from '../components/stylesheets/Footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can use an API or a back-end service to send the email with the form data.
    console.log("Form data: ", formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  
  return (
    <div className={styles.footer}>
      <form onSubmit={handleSubmit}>        
        <div className={styles.container}>
          <h1 className={styles.footerHeader}>LET'S CONNECT</h1>
          <div>
            <label htmlFor="name">Your Name</label>
            <input 
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              value={formData.name}
              onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email.."
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Subject</label>
            <textarea 
              id="message" 
              placeholder="Write something.." 
              style={{height:"200px"}}
              name="message"
              value={formData.message}
              onChange={handleChange}></textarea>
            <input type="submit" value="Submit"/>
          </div>
          <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/"><FaFacebook size={32} /></a>
            <a href="https://www.twitter.com/"><FaTwitter size={32} /></a>
            <a href="https://www.instagram.com/"><FaInstagram size={32} /></a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Footer
