import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PortableText from "../components/portableText"
import { Link } from "gatsby"
import Seo from "../components/Seo"
// import Img from "gatsby-image"
// import "./post.css"
import { kebabCase } from "lodash"
// import { GatsbyImage } from "gatsby-plugin-image"

const PostTemplatePage = ({ data, pageContext, location }) => {
  const { prev, next } = pageContext
  return (
    <Layout>
      <Seo title={data.sanityPost.title} image={data.sanityPost.image.secure_url} />
      <header className="relative flex flex-col items-center justify-center pt-24 overflow-hidden" style={{ minHeight: "70vh" }}>
        {data.sanityPost.image && (
          <div className="absolute inset-0 min-h-screen bg-gray-900">
            <img
              alt={data.sanityPost.title}
              src={data.sanityPost.image.secure_url}
              className="object-cover w-full h-screen transition-all duration-1000 ease-in-out transform opacity-10 hover:opacity-30"
            />
          </div>
        )}
        <div className="relative z-50 flex my-6 uppercase hover:opacity-80 hover:border-gray-500">
          {data.sanityPost.categories && (
            <div className="">
              {data.sanityPost.categories.map(({ title, slug, _id }) => (
                <Link key={title} className="inline-block mx-2 text-white border-b-2 border-white" to={`/blog/categoria/${kebabCase(slug.current)}`}>
                  {title}
                </Link>
              ))}
            </div>
          )}
        </div>
        <h1 className="relative z-50 max-w-6xl px-3 mx-auto my-3 mb-12 font-sans text-2xl tracking-wider text-center text-gray-100 md:text-6xl ">{data.sanityPost.title}</h1>
        <div className="flex flex-col items-center mb-6 md:justify-between md:flex-row">
          <p className="py-1 font-sans font-bold text-center text-gray-100 md:text-lg opacity-90">
            Por {data.sanityPost.author.name}
            <span className="hidden px-4 text-white md:inline-block">•</span>
          </p>

          <time className="py-1 font-sans font-bold text-center text-gray-100 md:text-lg opacity-90">{data.sanityPost.publishedAt}</time>
        </div>
      </header>
      <div className="relative z-20 max-w-3xl px-6 mx-auto mt-6">
        <div className="flex flex-col justify-center mb-6 md:flex-row">{data.sanityPost.author.name && <b className="hidden mr-2">{data.sanityPost.author.name}</b>}</div>

          <article className="px-0 pb-12 mx-auto mt-6 prose prose-lg text-left text-gray-800 break-words md:px-0 md:prose-xl letter-light ">
            {data.sanityPost._rawBody && <PortableText blocks={data.sanityPost._rawBody} />}
          </article>
      </div>
      <nav className="flex flex-col items-center justify-between w-full max-w-3xl mx-auto mb-12 border-t border-gray-300 md:flex-row">
        <div className="flex-1 px-2 py-6 text-center border-b border-gray-300 md:border-b-0 md:border-r md:text-left hover:text-gray-500">
          {prev && (
            <Link to={`/blog/${kebabCase(prev.slug.current)}`} rel="prev" className="text-xl font-bold transition-all duration-200 transform hover:translate-x-2">
              ← {prev.title}
            </Link>
          )}
        </div>
        <div className="flex-1 px-2 py-6 text-center md:text-right hover:text-gray-500 " style={{ justifySelf: "flex-end" }}>
          {next && (
            <Link to={`/blog/${kebabCase(next.slug.current)}`} rel="next" className="text-xl font-bold transition-all duration-200 transform hover:-translate-x-2">
              {next.title} →
            </Link>
          )}
        </div>
      </nav>
      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
        {data.category.edges.map(({ node: post }) => (
          <div
            key={post.title}
            className="relative flex items-center justify-center h-64 overflow-hidden transition-all duration-700 ease-in-out transform bg-gray-900 blog-item">
            <figure className="absolute inset-0 w-full h-64 overflow-hidden opacity-30 ">
              {post.image && <img alt={post.title} src={post.image.secure_url} className="w-full h-64 object-full" />}
            </figure>
            <div className="relative z-50 w-full px-3 ">
              <h4 className="px-6 mt-2 font-sans text-xl font-bold tracking-wider text-center text-white no-underline transition-all duration-500 transform-gpu lg:text-3xl hover:opacity-70">
                {post.title}
              </h4>
              <div className="flex flex-col items-center justify-center mt-4">
                {post.categories.map(({ title, slug, _id }) => (
                  <Link
                    key={title}
                    className="inline-block mb-1 font-mono text-sm font-bold text-center text-gray-100 uppercase transition-all duration-500 transform-gpu hover:opacity-80 hover:text-gray-300"
                    to={`/blog/categoria/${kebabCase(slug.current)}`}>
                    « {title} »
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default PostTemplatePage

export const query = graphql`
  query ($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      author {
        name
      }
      categories {
        title
        slug {
          current
        }
        _id
      }
      _rawBody(resolveReferences: { maxDepth: 10 })
      body {
        _type
        _key
        children {
          _key
          text
          marks
          _type
        }
        list
        style
        _rawChildren(resolveReferences: {maxDepth: 10})
      }
      image {
        secure_url
        url
      }
      slug {
        current
      }
      _createdAt(locale: "es", formatString: "LL")
      publishedAt(locale: "es", formatString: "LL")
      author {
        name
      }
    }
    category: allSanityPost(limit: 9, sort: { order: DESC, fields: publishedAt }) {
      edges {
        node {
          title
          image {
            secure_url
            url
          }
          categories {
            title
            slug {
              current
            }
            _id
          }
          _createdAt(locale: "es", formatString: "LL")
          publishedAt(locale: "es", formatString: "LL")
          slug {
            current
          }
        }
      }
    }
  }
`
