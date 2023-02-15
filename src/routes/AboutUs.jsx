import React from 'react';
import styles from '../components/stylesheets/AboutUs.module.css';

const people = [
{
name: 'Dave & Moogie',
src: 'Owners.jpeg',
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
<div className={styles.header}>
<h1>Meet The Gang</h1>
</div>
<div className={styles.aboutContainer}>
{people.map(person => (
<div className={styles.mainAboutSectionGrid} key={person.name}>
<div className={styles.mainAboutText}>
</div>
<div className={styles.mainAboutPicture}>
<img src={person.src} alt={person.alt} />
</div>
<h1>{person.name}</h1>
<p>hello</p>
</div>
))}
</div>
</>
);
}

export default AboutUs;