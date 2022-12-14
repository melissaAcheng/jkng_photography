import * as React from "react";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import AboutBlurb from "../components/AboutBlurb";
import Instagram from "../components/Instagram";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <Gallery />
      <AboutBlurb />
      <Instagram />
      {/* <h3>Follow Along @jkng_photography</h3> */}
    </Layout>
  );
};

// export const Head = () => <title>Home</title>;

export default IndexPage;
