import * as React from "react";
import * as styles from "../styles/layout.module.css";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ pageTitle, children }) => {
  const { title } = useSiteMetadata();

  return (
    <div className={styles.layout}>
      <title>
        {pageTitle} | {title}
      </title>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
