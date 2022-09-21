import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../styles/gallery.module.css";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      one: allMdx(filter: { frontmatter: { row: { eq: "one" } } }, sort: { fields: frontmatter___title, order: DESC }) {
        nodes {
          frontmatter {
            title
            slug
            row
            featuredImageAlt
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 1125, transformOptions: { cropFocus: CENTER }, aspectRatio: 1.5)
              }
            }
          }
        }
      }
      two: allMdx(filter: { frontmatter: { row: { eq: "two" } } }, sort: { fields: frontmatter___title, order: DESC }) {
        nodes {
          frontmatter {
            title
            slug
            row
            featuredImageAlt
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 750, transformOptions: { cropFocus: CENTER }, aspectRatio: 1)
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <div className={styles.one}>
        {data.one.nodes.map((node) => (
          <div key={node.frontmatter.title} className={styles.container}>
            <Link to={`portfolio/${node.frontmatter.slug}`}>
              <GatsbyImage
                image={getImage(node.frontmatter.featuredImage)}
                alt={node.frontmatter.featuredImageAlt}
                className={styles.image}
              />
            </Link>
            <div className={styles.middle}>
              <Link to={`portfolio/${node.frontmatter.slug}`} className={styles.text}>
                {node.frontmatter.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.two}>
        {data.two.nodes.map((node) => (
          <div key={node.frontmatter.title} className={styles.container}>
            <Link to={`portfolio/${node.frontmatter.slug}`}>
              <GatsbyImage
                image={getImage(node.frontmatter.featuredImage)}
                alt={node.frontmatter.featuredImageAlt}
                className={styles.image}
              />
            </Link>
            <div className={styles.middle}>
              <Link to={`portfolio/${node.frontmatter.slug}`} className={styles.text}>
                {node.frontmatter.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
