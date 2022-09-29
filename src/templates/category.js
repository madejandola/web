import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import React from "react"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
// import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  query ($slug: String) {
    sanityCategory(slug: { current: { eq: $slug } }) {
      title
      image {
        secure_url
      }
      description
    }
    allSanityPost(filter: { categories: { elemMatch: { slug: { current: { eq: $slug } } } } }, sort: { order: DESC, fields: publishedAt }) {
      edges {
        node {
          title
          categories {
            title
            slug {
              current
            }
            _id
          }
          image {
            secure_url
            url
          }
          publishedAt(locale: "es", formatString: "LL")
          slug {
            current
          }
          _createdAt(locale: "es", formatString: "LL")
          author {
            name
          }
        }
      }
    }
  }
`

const CategoriesTemplatePage = ({ data }) => (
  <Layout>
    <Helmet>
      <body className="ingame" />
    </Helmet>
    
    <Seo title={data.sanityCategory.title} image={data.sanityCategory.image.secure_url} />
    <div className="flex flex-col mt-24">
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 pt-12 mx-auto mb-6 text-center bg-gray-100 md:mb-0 md:py-24 md:px-24">
        <Link to="/blog" className="inline-block mb-6 font-serif text-gray-800 border-b-2 border-gray-700">
          Ver todo el blog
        </Link>
        <h1 className="font-serif text-4xl text-gray-900">{data.sanityCategory.title}</h1>
        <div className="block mt-6 font-sans prose prose-xl text-center text-gray-900 ">{data.sanityCategory.description && <>{data.sanityCategory.description}</>}</div>
      </div>
      <section className="relative w-full max-w-6xl mx-auto overflow-y-auto">
        <div className="grid gap-2 px-6 py-6 md:grid-cols-2">
          {data.allSanityPost.edges.map(({ node: article }) => (
            <div
              key={article.slug.current}
              className="relative flex items-center justify-center h-64 overflow-hidden transition-all duration-700 ease-in-out transform bg-gray-900 blog-item">
              <figure className="absolute inset-0 w-full h-64 overflow-hidden opacity-30 ">
                {article.image && <img title={article.title} className="object-scale-down w-full" alt={article.title} src={article.image.secure_url}/>}
              </figure>
              <div className="relative z-50 w-full px-3 ">
                <Link
              to={`/blog/${kebabCase(article.slug.current)}`} className="px-6 mt-2 font-sans text-xl font-bold tracking-wider text-center text-white no-underline transition-all duration-500 transform-gpu md:text-3xl hover:opacity-70">
                  {article.title}
                </Link>
                <div className="flex-col items-center justify-center hidden mt-4">
                  {article.categories.map(({ title, slug, _id }) => (
                    <Link
                      key={_id}
                      className="inline-block mb-1 font-mono font-bold uppercase transition-all duration-500 transform-gpu hover:opacity-80 hover:text-gray-300"
                      to={`/categories/${kebabCase(slug.current)}`}>
                      « {title} »
                    </Link>
                  ))}
                </div>
                <p className="hidden italic text-center text-white ">{article._createdAt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </Layout>
)

export default CategoriesTemplatePage


