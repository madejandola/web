import React from "react"
//import clientConfig from "../../client-config"
import BasePortableText from "@sanity/block-content-to-react"
import serializers from "./serializers"

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    projectId={process.env.GATSBY_SANITY_PROJECT_ID}
    imageOptions={{ w: 1200, fit: "fill" }}
    dataset="production"
  />
)

export default PortableText
