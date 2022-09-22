import * as React from "react";
import Navbar from "./Navbar";
import * as styles from "../styles/header.module.css";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h2>Jeffrey Ng</h2>
        <h2>Photography</h2>
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
