import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Slideshow from "../components/Project-Images";
import Content from "../components/Content";
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio Home" />
    <Slideshow />
    <Content />
  </Layout>
);

export default IndexPage;
