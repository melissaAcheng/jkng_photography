import * as React from "react";
import * as styles from "../styles/about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const AboutBlurb = () => {
  return (
    <div pageTitle={"About"}>
      <div className={styles.about}>
        <StaticImage src="../images/jeff_portrait_2.jpg" alt="Jeff Portrait" />
        <div className={styles.text}>
          <h1>My Name Jeff</h1>
          <h2>Developing style and challenging creativity.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className={styles.button}>
            <Link to="/about" className={styles.link}>
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

// export const Head = () => <title>About</title>;

export default AboutBlurb;
