/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'jaludev',
        siteUrl: 'https://www.jaludev.com'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-netlify`,
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/ // See below to configure properly
                }
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.md', '.mdx'],
                defaultLayouts: {
                    default: require.resolve("./src/components/layout-post.tsx"),
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-'
                        }
                    },
                    'gatsby-remark-autolink-headers'
                ]

            }
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: false,
                develop: false,
                tailwind: true,
                ignore: ["/src/styles/base.css", '/src/styles/tailwind/base.css', 'prismjs/']
            }
        }
    ],
}
