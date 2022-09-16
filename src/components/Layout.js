import * as React from "react";
import * as styles from "../styles/layout.module.css";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
