import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/about.module.css";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <Layout pageTitle={"About"}>
      <div className={styles.about}>
        <StaticImage src="../images/jeff_portrait_1.jpg" alt="Jeff Portrait" />
        <div className={styles.text}>
          <h1>About Jeff</h1>
          <p>Hi there! I am a photographer based in the New Jersey/Pennsylvania area.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </Layout>
  );
};

// export const Head = () => <title>About</title>;

export default About;
