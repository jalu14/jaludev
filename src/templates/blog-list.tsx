import { graphql, Link } from "gatsby";
import React from "react";
import { EntryCard } from "../components/entry-card";
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
                <ol className="blog-entries" style={{ display: 'grid'}}>
                    {props.data.allMdx.edges.map((edge: any) => {
                        return (
                            <EntryCard {...edge.node} />
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
