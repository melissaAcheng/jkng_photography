import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ul className={styles.links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Gallery-1</Link>
          </li>
          <li>
            <Link to="/">Gallery-2</Link>
          </li>
          <li>
            <Link to="/">Gallery-3</Link>
          </li>
          <li>
            <Link to="/">Gallery-4</Link>
          </li>
          <li>
            <Link to="/">Gallery-5</Link>
          </li>
        </ul>
        <p>Copyright 2022 JKNg Photography</p>
      </div>
      <p>
        <a href="https://www.instagram.com/jkng_photography/" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      </p>
    </footer>
  );
};

export default Footer;
