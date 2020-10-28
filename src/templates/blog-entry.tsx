import React from "react"
import { graphql, Link } from "gatsby";
import { Layout } from '../components/layout';
import { Head } from "../components/head";

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (
          fields: {
            slug: {
              eq: $slug
            }
          }
        ) {
            html,
            frontmatter {
                title
            }
        }
      }
    `;

export default function BlogEntry(props: any) {

    return (
        <Layout width={8}>
            <Head title={props.data.markdownRemark.frontmatter.title} />
            <h1 className="font-bold mb-20 text-3xl text-gray-400">{props.data.markdownRemark.frontmatter.title}</h1>
            <article
                dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
            </article>
        </Layout>
    )
}