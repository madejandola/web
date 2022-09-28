import React from "react"
import { graphql } from "gatsby"

export const SanityCompomentsPlugsFragment = graphql`
  fragment PlugComponents on SanityPage {
    id
    title
    content {
      ... on SanityQuote {
        _key
        _type
        title
        label
        body
      }
      ... on SanityHero {
        _type
        _key
        tagline
        label
        heading
      }
      ... on SanityHeroSlider {
        _type
        _key
        tagline
        label
        heading
        imagesGallery {
          _key
          url
          secure_url
        }
      }
      }
  }
`
