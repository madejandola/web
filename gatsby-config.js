require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `MuseoGaleria`,
    titleTemplate: "%s | MuseoGaleria",
    description: `Museo Galeria`,
    author: `@centrodeestudiosajmatova`,
    siteUrl: "https://www.museogaleria.com.ar",
    image: "https://www.museogaleria.com.ar/ogimage.jpg",
    twitterUsername: `@museogaleria`
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `w43yf35m`,
        dataset: `production`,
        //overlayDrafts: true,
        watchMode: true,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_READ_TOKEN,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default"
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-postcss",
    `gatsby-plugin-netlify`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icon.png"
      }
    }
  ]
}
