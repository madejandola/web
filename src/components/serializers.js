//import ReactPlayer from "react-player"
// import { kebabCase } from "lodash"
import React from "react"
import getYouTubeId from "get-youtube-id"
import YouTube from "react-youtube"
import { Link } from "gatsby";

const QuoteReference = ({ node }) => {
  if (node && node.label && node.title) {
    return (
      <div className="px-2 py-1 mx-1 text-white bg-red-500">
        <div className="bg-blue-500">{node.label}</div>
        <div className="bg-red-500">{node.title}</div>
      </div>
    )
  }
  return <></>
}

const serializers = {
  types: {
    quote: QuoteReference,

    youtube: ({ node }) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (
        <div class="aspect-w-16 aspect-h-9 mb-6">
          <YouTube videoId={id} />
        </div>
      )
    },

    break: props => {
      const { style } = props.node
      if (style === "lineBreak") {
        return <hr className="lineBreak" />
      }
      return null
    },
  },

  marks: {
    internalLink: ({ mark, children }) => {
      const href = `/${mark.reference._type}/${mark.reference.slug.current}`
      return (
        <Link className="underline" to={href}>
          {children}
        </Link>
      )
    },

    link: ({ mark, children }) => {
      const { blank, href } = mark
      return blank ? (
        <a
          href={href}
          className="text-indigo-400 underline"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ) : (
        <a className="text-white underline" href={href}>
          {children}
        </a>
      )
    },
  },
}

export default serializers
