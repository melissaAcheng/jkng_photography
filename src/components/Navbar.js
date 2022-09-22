import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.dropdown}>
            <button className={styles.dropbtn}>Portfolio</button>
            <div className={styles.dropcontent}>
              <Link to="/portfolio/weddings">Weddings</Link>
              <Link to="/portfolio/events">Events</Link>
              <Link to="/portfolio/portraits">Portraits</Link>
              <Link to="/portfolio/families">Families</Link>
              <Link to="/portfolio/couples">Couples</Link>
            </div>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
