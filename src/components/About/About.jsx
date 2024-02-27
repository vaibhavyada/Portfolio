import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")}
            alt ="Me sitting wth a laptop"
            className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} 
                    alt ="Cursor Icon"
                    ></img>
                    <div className={styles.aboutItemText}>
                        <h3>
                            FRONTEND Developer
                        </h3>
                        <p>
                            I'm, a frontend developer with experience in
                             building responsive and optimized sites.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt ="Cursor Icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>
                            BACKEND Developer
                        </h3>
                        <p>
                            I have  experience in developing fast and optimized 
                            back-end systems and API's.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt ="Ui Icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>
                            UI Designer
                        </h3>
                        <p>
                            I have designed multiple landing pages and have 
                            designed systems as well.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
