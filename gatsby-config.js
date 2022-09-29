require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Madejandola`,
    titleTemplate: "%s | Madejandola",
    description: `Sumérgete en un universo lleno de historias que nacen en los hilos de América Latina`,
    author: `@Madejandola`,
    siteUrl: "https://www.madejandola.com",
    image: "https://www.madejandola.com/ogimage.jpg",
    twitterUsername: `@Madejandola`
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
