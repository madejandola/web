import * as React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Seo from "../components/Seo";
const AboutPage = () => {
  return (
    <Layout>
      <Seo title="Quienes Somos" />
      <Helmet>
        <body className="ingame" />
      </Helmet>
      <div className="pt-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-6xl font-bold ">Quienes Somos</h1>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
