import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contacts</h2>
            <p>Feel free to react out.</p>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                    <a href="mailto:yadavvaibhav930@gmail.com">yadavvaibhav930@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"/>
                    <a href="https://www.linkedin.com/vaibhav-yadav">Linkedin.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon"/>
                    <a href="https://www.github.com/VaibhavYada">Github</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
export default Contacts
