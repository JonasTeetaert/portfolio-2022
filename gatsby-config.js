require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Jonas Teetaert - Creative Frontend Developer | Portfolio',
    description:
      'Jonas Teetaert is a Brussels based Frontend Developer passionated about how web animations can enhance a better user experience. He makes websites and web applications from scratch using technologies as Craft CMS and React, fully customised to the customer’s needs.',
    image: '/static/icons/favicon/mstile-150x150.png',
    siteUrl: 'https://www.jonasteetaert.be/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    'gatsby-plugin-sass',
  ],
}
