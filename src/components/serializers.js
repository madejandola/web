//import ReactPlayer from "react-player"
// import { kebabCase } from "lodash"
import React from "react"
import getYouTubeId from "get-youtube-id"
import YouTube from "react-youtube"
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
const QuoteReference = ({ value }) => {
  if (value && value.label && value.title) {
    return (
      <div className="px-2 py-1 mx-1 text-white bg-red-500">
        <div className="bg-blue-500">{value.label}</div>
        <div className="bg-red-500">{value.title}</div>
      </div>
    )
  }
  return <></>
}

const serializers = {
  types: {
    quote: QuoteReference,
    youtube: ({ value }) => {
      const { url } = value
      const id = getYouTubeId(url)
      return (
        <div className="mb-6 aspect-w-16 aspect-h-9">
          <YouTube videoId={id} />
        </div>
      )
    },

    image: ({ value }) => {
      const { url } = value
      console.log(value)
      return (
        <>
          <GatsbyImage
            title="ads"
            className="mx-auto"
            alt="ads"
            image={url}
          />
          {url}
        </>
      )
    },

    break: props => {
      const { style } = props.value
      if (style === "lineBreak") {
        return <hr className="lineBreak" />
      }
      return null
    },
  },

  marks: {
    internalLink: ({ value, children }) => {
      const href = `/${value.reference._type}/${value.reference.slug.current}`
      return (
        <Link className="underline" to={href}>
          {children}
        </Link>
      )
    },

    link: ({ value, children }) => {
      const { blank, href } = value
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
