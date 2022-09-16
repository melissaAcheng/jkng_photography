import * as React from "react";
import Navbar from "./Navbar";
import * as styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <h2>Jeffrey Ng</h2>
        <h2>Photography</h2>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
