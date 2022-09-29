import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
// import { Link } from "gatsby"
// import Img from "gatsby-image"
import React from "react"
// import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
// import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  query ($slug: String) {
    allSanityAuthor(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          slug {
            current
          }
          name
        }
      }
    }
  }
`

const ArtistsTemplatePage = ({ data }) => (
  <Layout>
    <Helmet>
      <body className="ingame" />
    </Helmet>
    <Seo />
    <div className="flex flex-col mt-24">
      <section className="relative w-full max-w-6xl mx-auto">
        <article>
          {data.allSanityAuthor.edges.map(({ node: artist }) => (
            <h2 className="font-mono text-center text-8xl">{artist.name}</h2>
          ))}
        </article>
      </section>
    </div>
  </Layout>
)

export default ArtistsTemplatePage
