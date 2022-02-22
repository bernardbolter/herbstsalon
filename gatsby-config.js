require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
      title: `herbstsalon.berlin`,
    siteUrl: `https://herbstsalon.berlin`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.GATSBY_CONTENTFUL_ID,
      accessToken: process.env.GATSBY_CONTENTFUL,
      environment: "master",
    },
  },
  ]
};