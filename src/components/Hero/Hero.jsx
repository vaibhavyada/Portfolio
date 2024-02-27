import React from 'react'
import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Vaibhav</h1>
            <p className={styles.description}>Experienced full-stack web developer skilled in React, Node.js, and Express. Please do not hesitate to contact me should you require further information.</p>
            <a className ={styles.contactBtn} href="mailto:yadavvaibhav930@gmail.com">Contact Me</a>
        </div>
        <img className ={styles.heroImg}  src={getImageUrl("hero/H1.jpeg")} alt="Hero Image of me"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
export default Hero
