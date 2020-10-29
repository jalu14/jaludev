import { graphql, Link } from "gatsby";
import React from "react";
import { Head } from "../components/head";
import { Layout } from '../components/layout';

export const query = graphql`
    query ($skip: Int!, $limit: Int!) {
        allMdx (
            filter: { frontmatter: { draft: { ne: true } } }
            sort: {fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip
        ) {
            edges {
            node {
                frontmatter {
                    categories,
                    title,
                    date(formatString: "DD MMM YYYY", locale: "es")
                },
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
    const prevPage = currentPage - 1 === 1 ? "/" : '/page/' + (currentPage - 1).toString();
    const nextPage = "/page/" + (currentPage + 1);

    return (
        <Layout>
            <Head title="Blog" />
            <div className="mb-10">
                <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2em' }}>
                    {props.data.allMdx.edges.map((edge: any) => {
                        return (
                            <li key={edge.node.frontmatter.title} className="bg-gray-800 p-5 rounded-sm shadow-2xl relative">
                                <Link className="text-white" style={{ display: 'flex', flexDirection: 'column', height: '100%' }} to={`/${edge.node.fields.slug}`}>
                                    {
                                        (edge.node.frontmatter.categories && edge.node.frontmatter.categories.length) &&
                                        <span className="font-bold text-gray-500">{edge.node.frontmatter.categories[0]}</span>
                                    }
                                    <h3 className="font-bold text-2xl">{edge.node.frontmatter.title}</h3>
                                    <span>{edge.node.frontmatter.date}</span>
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
