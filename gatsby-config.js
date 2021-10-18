module.exports = {
  siteMetadata: {
    title: `Gatsby CodyHouse Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@wavetree`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-codyhouse`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2a6df4`,
        theme_color: `#2a6df4`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
					require(`autoprefixer`)(),
          require(`postcss-calc`)(),
        ],
      },
    },
    // This (optional) plugin enables PurgeCSS to reduce the size of CSS loaded.
    // Some additional configuration may be required.
    // To learn more, visit: https://www.gatsbyjs.com/plugins/gatsby-plugin-purgecss/
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     whitelist: [
    //       "html",
    //       "body",
    //     ],
    //   },
    // },
    // This (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
