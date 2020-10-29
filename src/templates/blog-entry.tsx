import React from "react"
import { graphql, Link } from "gatsby";
import { LayoutPost } from '../components/layout-post';
import { Head } from "../components/head";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
    query ($slug: String!) {
        mdx (
          fields: {
            slug: {
              eq: $slug
            }
          }
        ) {
            body,
            frontmatter {
                title
            }
        }
      }
    `;

export default function BlogEntry(props: any) {
    return (
        <LayoutPost width={8}>
            <Head title={props.data.mdx.frontmatter.title} />
            <h1 className="font-bold mb-20 text-3xl text-gray-400">{props.data.mdx.frontmatter.title}</h1>
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </LayoutPost>
    )
}