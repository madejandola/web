import * as React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import Seo from "../components/Seo"
const ExposPages = () => {
  return (
    <Layout>
      <Seo title="Expos / Muestras" />
      <Helmet>
        <body className="ingame" />
      </Helmet>
      <div className="pt-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-6xl font-bold ">Expos/Muestras</h1>
        </div>
      </div>
    </Layout>
  )
}

export default ExposPages
