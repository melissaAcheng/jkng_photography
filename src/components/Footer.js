import * as React from "react";
import { useState } from "react";
// import { Link } from "gatsby";
import * as styles from "../styles/footer.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>Copyright 2022 Jeffrey Ng Photography</p>
        {/* <button onClick={handleClick} className={styles.arrow}>
          <StaticImage src="../images/arrow-up.png" alt="Arrow Up" width={20} />
        </button> */}
        <div className={styles.contact}>
          <p>Contact</p>
          <a href="https://www.instagram.com/jkng_photography/" target="_blank" rel="noopener noreferrer">
            <StaticImage src="../images/instagram-logo.png" alt="Instagram Logo" width={35} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
