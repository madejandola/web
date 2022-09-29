import React from "react"
// import BasePortableText from "@sanity/block-content-to-react"
import { PortableText } from '@portabletext/react'
import serializers from "./serializers"

const SanityText = ({ blocks }) => (
  <PortableText 
  value={blocks}
    components={serializers}
    projectId="w43yf35m"
    imageOptions={{ w: 1200, fit: "fill" }}
    dataset="production"
  />
)

export default SanityText
