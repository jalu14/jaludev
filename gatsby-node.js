const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx') {
        let slug;
        if (node.internal.type === 'MarkdownRemark') {
            slug = path.basename(node.fileAbsolutePath, '.md').replace(/\s+/g, '-').toLowerCase();
        } else {
            slug = path.basename(node.fileAbsolutePath, '.mdx').replace(/\s+/g, '-').toLowerCase();
        }

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
            allMdx (filter: { frontmatter: { draft: { ne: true } } }) {
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
    const blogEntriesPerPage = 6;
    const numPages = Math.ceil(entries.data.allMdx.edges.length / blogEntriesPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/` : `/page/${i + 1}`,
            component: blogListTemplate,
            context: {
                limit: blogEntriesPerPage,
                skip: i * blogEntriesPerPage,
                numPages,
                currentPage: i + 1
            },
        });
    });

    entries.data.allMdx.edges.forEach((edge) => {
        const suggestedPost = entries.data.allMdx.edges[Math.floor(Math.random() * entries.data.allMdx.edges.length)];
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug,
                suggestedPostSlug: suggestedPost.node.fields.slug
            }
        })
    });
}