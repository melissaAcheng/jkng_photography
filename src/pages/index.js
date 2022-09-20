import * as React from "react";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import AboutBlurb from "../components/AboutBlurb";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <Gallery />
      <AboutBlurb />
      <p>Instagram Feed</p>
    </Layout>
  );
};

// export const Head = () => <title>Home</title>;

export default IndexPage;
