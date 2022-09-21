import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import * as styles from "../../styles/portfolio.module.css";

const Portfolio = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.featuredImage);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h1 className={styles.heading}>{data.mdx.frontmatter.title}</h1>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.featuredImageAlt} />
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        featuredImageAlt
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, transformOptions: { cropFocus: CENTER }, width: 400, aspectRatio: 1)
          }
        }
      }
    }
  }
`;

export default Portfolio;
