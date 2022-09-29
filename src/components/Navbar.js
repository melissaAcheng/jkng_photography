import * as React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import * as styles from "../styles/navbar.module.css";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav className={`${navbarOpen ? styles.showMenu : ""}`}>
        <div className={styles.hamburger}>
          <Hamburger direction="left" toggled={navbarOpen} toggle={setNavbarOpen} color="#818181" />
        </div>
        <ul className={styles.desktopNav}>
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
        <ul className={styles.mobileNav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio/weddings">Weddings</Link>
          </li>
          <li>
            <Link to="/portfolio/events">Events</Link>
          </li>
          <li>
            <Link to="/portfolio/portraits">Portraits</Link>
          </li>
          <li>
            <Link to="/portfolio/families">Families</Link>
          </li>
          <li>
            <Link to="/portfolio/couples">Couples</Link>
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
