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
      spaceId: 'mlx3quf0lk21',
      accessToken: 'N6pWOjlsk4NMLyTTRsyqHRoXNltg7xILIZxJ4J5yAtM',
      environment: "development",
    },
  },
  ]
};