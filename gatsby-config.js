module.exports = {
  siteMetadata: {
    title: `JKNg Photography`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          "IGQVJXeDF6T0paNWtWQlN5LWNpM0NwdjhGeU9VS1dNMHQ2ZAHJ4YXM3VWd5ZAi12LWhxRFEwLTRob3AyMjNoX0RLNExUSlk5cURsV2ZAGYlpBMjdyUTBZAc2NjQzdyOVlRR3ZAjSVpQZAmQyNzViYk53VHNsVkZAlTHpCUkE5YThN",
        limit: 4,
      },
    },
  ],
};
