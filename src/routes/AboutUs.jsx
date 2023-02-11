// import React from 'react'
// import styles from '../components/stylesheets/AboutUs.module.css'

// function AboutUs() {
//   return (
//     <>
//     <div className={styles.aboutContainer}>
//   <div className={styles.mainAboutSectionGrid}>
//     <div className={styles.mainAboutText}>
//         <h2>Meet The Gang</h2>
//         <p>Pam Rhodes and David Rhodes.</p>
//     </div>  
//     <div className={styles.mainAboutPicture}>
//       <img src='Moogie.jpeg' alt='Moogie'></img>
//       <div className={styles.hiddenText}>
//         <h2>Pam Rhodes and David Rhodes.</h2>
//         <div className={styles.hiddenParagraph}>
//           <p>"laborum."</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   <div className={styles.specialtyContainer}>
//     <h2 className={styles.specialtyHeader}>Meet The Rest!</h2>
//     <div className={styles.specialtyGrid}>
//       <div className={styles.specialtyCard}>
//         <div className={styles.image}>
//           <img src='Jackson.jpeg' alt='Jackson'></img>
//         </div>
//          <div className={styles.aboutUs}>
//         <h1>Jackson</h1>
//          </div>
//         <div className={styles.description}>
//           <p>"laborum."</p>
//         </div>
//       </div> 
//      <div className={styles.specialtyCard}>
//         <div className={styles.image}>
//         <img src='Benji.jpeg' alt='Benji'></img>
//         </div>
//          <div className={styles.aboutUs}>
//         <h1>Benji</h1>
//          </div>
//         <div className={styles.description}>
//           <p>"laborum."</p>
//         </div>
//       </div> 
//      <div className={styles.specialtyCard}>
//         <div className={styles.image}>
//           <img src='Erin Photo.jpg' alt='Erin'></img>
//         </div>
//         <div className={styles.aboutUs}>
//         <h1>Erin Cranston</h1>
//         </div>
//         <div className={styles.description}>
//           <p>"laborum."</p>
//         </div>
//       </div> 
//       <div className={styles.specialtyCard}>
//         <div className={styles.image}>
//           <img src='https://images.khinsider.com/KINGDOM%20HEARTS%20III/Artwork/Characters/Sora05.png' alt='Callie'></img>
//         </div>
//         <div className={styles.aboutUs}>
//         <h1>Callie Rhodes</h1>
//         </div>
//         <div className={styles.description}>
//           <p>"laborum."</p>
//         </div>
//       </div> 
//      <div className={styles.specialtyCard}>
//         <div className={styles.image}>
//           <img src='Natalie Photo.jpg' alt='Nat'></img>
//         </div>
//          <div className={styles.aboutUs}>
//         <h1>Natalie Cranston</h1>
//          </div>
//         <div className={styles.description}>
//           <p>"laborum."</p>
//         </div>
//       </div> 
//     </div>
//   </div>
//     </>
//   )
// }

// export default AboutUs

import React from 'react';
import styles from '../components/stylesheets/AboutUs.module.css';

const people = [
  {
    name: 'Moogie',
    src: 'Moogie.jpeg',
    alt: 'Moogie'
  },
  {
    name: 'Jackson',
    src: 'Jackson.jpeg',
    alt: 'Jackson'
  },
  {
    name: 'Benji',
    src: 'Benji.jpeg',
    alt: 'Benji'
  },
  {
    name: 'Erin',
    src: 'Erin Photo.jpg',
    alt: 'Erin'
  },
  {
    name: 'Callie',
    src: 'https://images.khinsider.com/KINGDOM%20HEARTS%20III/Artwork/Characters/Sora05.png',
    alt: 'Sora'
  },
  {
    name: 'Natalie',
    src: 'Natalie Photo.jpg',
    alt: 'Natalie'
  },
];

function AboutUs() {
  return (
    <>
          <h2>Meet The Gang</h2>
      {people.map(person => (
        <div className={styles.aboutContainer} key={person.name}>
          <div className={styles.mainAboutSectionGrid}>
            <div className={styles.mainAboutText}>
              <h1>{person.name}</h1>
              <p>hello</p>
            </div>  
            <div className={styles.mainAboutPicture}>
              <img src={person.src} alt={person.alt} />
              <div className={styles.hiddenText}>
                <div className={styles.hiddenParagraph}>
                <h2>{person.name}</h2>
                  <p>"Laborum."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default AboutUs;
        
        {/* <div className={styles.specialtyContainer}>
          <h2 className={styles.specialtyHeader}>Meet The Rest!</h2>
          <div className={styles.specialtyGrid}>
            <div className={styles.specialtyCard}>
              <div className={styles.image}>
                <img src='Jackson.jpeg' alt='Jackson' />
              </div>
              <div className={styles.aboutUs}>
                <h1>Jackson</h1>
              </div>
              <div className={styles.description}>
                <p>"Laborum."</p>
              </div>
            </div> 
            <div className={styles.specialtyCard}>
              <div className={styles.image}>
                <img src='Benji.jpeg' alt='Benji' />
              </div>
              <div className={styles.aboutUs}>
                <h1>Benji</h1>
              </div>
              <div className={styles.description}>
                <p>"Laborum."</p>
              </div>
            </div> 
            <div className={styles.specialtyCard}>
              <div className={styles.image}>
                <img src='Erin Photo.jpg' alt='Erin' />
              </div>
              <div className={styles.aboutUs}>
                <h1>Erin Cranston</h1>
              </div>
              <div className={styles.description}>
                <p>"Laborum."</p>
              </div>
            </div> 
            <div className={styles.specialtyCard}>
              <div className={styles.image}>
                <img src='https://images.khinsider.com/KINGDOM%20HEARTS%20III/Artwork/Characters/Sora05.png' alt='Callie' />
              </div>
              <div className={styles.aboutUs}>
                <h1>Callie Rhodes</h1>
              </div>
              <div className={styles.description}>
                <p>"Laborum."</p>
              </div>
            </div>
             <div className={styles.specialtyCard}>
              <div className={styles.image}>
                <img src='Natalie Photo.jpg' alt='Nat' />
              </div>
              <div className={styles.aboutUs}>
                <h1>Natalie Cranston</h1>
              </div>
              <div className={styles.description}>
                <p>"Laborum."</p>
              </div>
            </div>
            </div>
            </div> */}