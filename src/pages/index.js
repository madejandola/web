import Seo from "../components/Seo"
import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "../components/Plugs/hero"
import HeroSlider from "../components/Plugs/heroSlider"
import Quote from "../components/Plugs/quote"
import { Helmet } from "react-helmet";

export const query = graphql`
  {
    route: sanityPage(title: { eq: "Inicio" }) {
      ...PlugComponents
    }
  }
`
const IndexPage = (props) => {
  const { data, errors } = props
  if (errors) {
    return <Layout>error</Layout>
  }
  const page = data.page || data.route
  const content = (page.content || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null
      switch (c._type) {
        case "hero":
          el = <Hero key={c._key} {...c} />
          break
        case "heroSlider":
          el = <HeroSlider key={c._key} {...c} />
          break
        case "quote":
          el = <Quote key={c._key} {...c} />
          break
        default:
          el = null
      }
      return el
    })
  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <Seo title="Inicio" />
      <div className="pageBuilder">{content}</div>
    </Layout>
  )
}
export default IndexPage
