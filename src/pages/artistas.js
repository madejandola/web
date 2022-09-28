import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const ArtistPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Artistas" />
      <Helmet>
        <body className="ingame" />
      </Helmet>
      <div className="pt-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-serif text-6xl text-center">Artistas</h1>
          <div className="grid grid-cols-3 gap-12 pt-12">
            {data.allSanityAuthor.edges.map(({ node: author }) => (
              <div key={author.id} className="w-full">
                <Link
                  to={`/artistas/${kebabCase(author.slug.current)}`}
                  className="block px-2 py-2 mr-2 font-sans text-2xl font-bold text-center text-gray-900 transition-all duration-300 border-t border-b transform-gpu lg:px-0 hover:border-gray-700">
                  {author.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArtistPage

export const query = graphql`
  {
    allSanityAuthor {
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
