import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";

const Portfolio = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      {/* <p>{data.mdx.frontmatter.title}</p> */}
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

export default Portfolio;
