import * as React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout pageTitle={"About"}>
      <p>About Jeff</p>
    </Layout>
  );
};

export const Head = () => <title>About</title>;

export default About;
