import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/contact.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Contact = () => {
  return (
    <Layout pageTitle={"Contact"}>
      <div className={styles.contact}>
        <StaticImage src="../images/jeff_portrait_2.jpg" alt="Jeff Portrait" />
        <div className={styles.text}>
          <h1>Let's Connect!</h1>
          <p>DM me on Instagram to book a photo session or to collaborate!</p>
          <a href="https://www.instagram.com/jkng_photography/" target="_blank" rel="noopener noreferrer">
            @jkng_photography
          </a>
        </div>
      </div>
    </Layout>
  );
};

// export const Head = () => <title>Contact</title>;

export default Contact;
