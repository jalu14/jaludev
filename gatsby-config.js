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
        `gatsby-plugin-netlify`,
        // {
        //     resolve: `gatsby-plugin-mdx`,
        //     options: {
        //         extensions: [`.mdx`, `.md`],
        //     },
        // },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: 'gatsby-plugin-mdx',
            extensions: [`.md`, `.mdx`],
            options: {
                defaultLayouts: {
                    default: require.resolve("./src/components/layout-post.tsx"),
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-'
                        }
                    }
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
                postCssPlugins: [require('tailwindcss')],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: false,
                develop: process.env.DEVELOPMENT === 'true',
                tailwind: true,
                ignore: ["/src/styles/base.css", '/src/styles/tailwind/base.css', 'prismjs/'],
                whitelist: [/^md:w-/]
            }
        }
    ],
}
