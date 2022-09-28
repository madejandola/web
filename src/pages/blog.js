import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
// import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export const query = graphql`
  {
    allSanityPost(sort: { order: DESC, fields: publishedAt }) {
      edges {
        node {
          title
          image {
            secure_url
            url
          }
          publishedAt(locale: "es", formatString: "LL")
          categories {
            title
            slug {
              current
            }
            _id
          }
          _createdAt(locale: "es", formatString: "LL")
          slug {
            current
          }
        }
      }
    }
    allSanityCategory {
      edges {
        node {
          id
          title
          description
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <body className="ingame" />
      </Helmet>
      <Seo title="Blog" />
      <div className="grid max-w-6xl gap-6 mx-auto mt-12 lg:grid-cols-4">
        <div className="w-full px-2 pt-24 mb-6">
          <div className="w-full pt-0 lg:mt-24 lg:top-24 lg:sticky">
            <h1 className="my-12 font-serif text-4xl text-left text-gray-900">Blog</h1>
            <div className="flex flex-wrap justify-start w-full lg:flex-col">
              {data.allSanityCategory.edges.map(({ node: article }) => (
                <div key={article.id} className="mb-6 ">
                  <Link
                    to={`/blog/categoria/${kebabCase(article.slug.current)}`}
                    className="px-2 py-2 mr-2 font-sans text-sm font-bold text-gray-900 transition-all duration-300 border-b transform-gpu lg:px-0 hover:border-gray-700">
                    {article.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="flex flex-col w-full pb-12 mx-auto lg:mt-24 lg:col-span-3 max-w-7xl">
          <div className="grid w-full gap-3 lg:grid-cols-1 ">
            {data.allSanityPost.edges.map(({ node: post }) => (
              <div className="relative">
                <Link
                  key={post.title}
                  to={`/blog/${kebabCase(post.slug.current)}`}
                  className="relative flex items-center justify-center h-64 overflow-hidden transition-all duration-700 ease-in-out transform bg-gray-900 blog-item">
                  <figure className="absolute inset-0 w-full h-64 overflow-hidden opacity-30 ">
                    {post.image && <img title={post.title} className="object-scale-down w-full" alt={post.title} src={post.image.secure_url} />}
                  </figure>
                  <div className="relative z-50 w-full px-3 ">
                    <time className="w-full px-4 py-1 ml-2 font-mono text-xs font-bold text-right text-gray-100 lg:text-base opacity-90">Públicado el {post.publishedAt}</time>
                    <h4 className="px-6 mt-6 font-sans text-xl font-bold tracking-wider text-left text-white no-underline transition-all duration-500 transform-gpu md:text-3xl hover:opacity-70">
                      {post.title}
                    </h4>
                  </div>
                </Link>
                <div className="absolute right-0 items-start justify-start px-2 mt-4 mr-6 space-x-6 bottom-3">
                  {post.categories.map(({ title, slug, _id }) => (
                    <Link
                      key={_id}
                      className="inline-block px-2 mb-1 font-mono text-xs font-bold text-left text-white transition-all duration-500 rounded bg-indigo-500/50 md:text-base transform-gpu hover:bg-indigo-500/80 "
                      to={`/blog/categoria/${kebabCase(slug.current)}`}>
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BlogPage
