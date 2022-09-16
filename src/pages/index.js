import * as React from "react";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <Gallery />
      <p>About</p>
      <p>Instagram Feed</p>
    </Layout>
  );
};

export const Head = () => <title>Home</title>;

export default IndexPage;
