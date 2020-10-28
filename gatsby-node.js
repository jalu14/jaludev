const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md').replace(/\s+/g, '-').toLowerCase();

        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog-entry.tsx');
    const blogListTemplate = path.resolve('./src/templates/blog-list.tsx');
    const entries = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    // Paginación
    const blogEntriesPerPage = 3;
    const numPages = Math.ceil(entries.data.allMarkdownRemark.edges.length / blogEntriesPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
            component: blogListTemplate,
            context: {
                limit: blogEntriesPerPage,
                skip: i * blogEntriesPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });

    entries.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    });
}