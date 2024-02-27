import React, { useState } from "react";
import styles from "./Navbar.module.css";

import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const[menuOpen,setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className ={styles.title} href="/">
            Portfolio
        </a>
        <div className ={styles.menu}>
          <img className = {styles.menuBtn} 
               src={
                menuOpen
                ?getImageUrl("nav/closeIcon.png")
              :getImageUrl("nav/mi.png")
            }
              alt = "menu- button"
                onClick={() =>setMenuOpen(!menuOpen)}>
               </img>
               
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
            >
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
