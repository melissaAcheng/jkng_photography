import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../styles/instagram.module.css";

const Instagram = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.box}>
        <div className={styles.text}>
          <h3>
            Follow Along @jkng_photography
          </h3>
        </div>
      </div>
      <div className={styles.feed}>
        {data.allInstagramContent.nodes.map((node) => (
          <a href="https://www.instagram.com/jkng_photography/" target="_blank" rel="noreferrer" key={node.media_url}>
            <GatsbyImage image={getImage(node.localFile)} alt={node.caption} />
          </a>
        ))}
      </div> */}
    </div>
  );
};

export default Instagram;
