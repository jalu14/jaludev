import { graphql, Link } from "gatsby";
import React from "react";
import { Head } from "../components/head";
import { Layout } from '../components/layout';

export const query = graphql`
    query ($skip: Int!, $limit: Int!) {
        allMarkdownRemark (
            sort: {fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip
        ) {
            edges {
            node {
                frontmatter {
                title,
                date
                },
                html,
                excerpt,
                timeToRead,
                fields {
                    slug
                }
            }
            }
        }
    }
`;

export default function BlogList(props: any) {

    const { currentPage, numPages } = props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/blog" : (currentPage - 1).toString();
    const nextPage = "/blog/page/" + (currentPage + 1);

    return (
        <Layout>
            <Head title="Blog" />
            <div>
                <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2em' }}>
                    {props.data.allMarkdownRemark.edges.map((edge: any) => {
                        return (
                            <li key={edge.node.frontmatter.title} className="bg-gray-800 p-5 rounded-sm shadow-2xl relative">
                                <Link className="text-white" style={{display: 'flex', flexDirection: 'column', height: '100%'}} to={`/blog/${edge.node.fields.slug}`}>
                                    <span className="font-bold text-gray-500">{`Development`}</span>
                                    <h3 className="font-bold text-2xl">{edge.node.frontmatter.title}</h3>
                                    <div className="mt-10 flex-grow">
                                        <p>{edge.node.excerpt}</p>
                                    </div>
                                    <div className="mt-5">
                                        <span className="font-bold">Leer más</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
                {!isFirst && (
                    <Link to={prevPage} rel="prev">
                        ← Previous Page
                    </Link>
                )}
                {!isLast && (
                    <Link to={nextPage} rel="next">
                        Next Page →
                    </Link>
                )}
            </div>
        </Layout>
    )
}
