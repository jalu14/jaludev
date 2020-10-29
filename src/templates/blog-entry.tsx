import React from "react"
import { graphql } from "gatsby";
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
                title,
                date(formatString: "DD MMMM YYYY", locale: "es")
            }
        }
      }
    `;

export default function BlogEntry(props: any) {
    return (
        <LayoutPost title={props.data.mdx.frontmatter.title} extraClasses="w-11/12 md:w-8/12">
            <Head title={props.data.mdx.frontmatter.title} />
            <div className="mb-20">
                <h1 className="font-bold text-3xl text-gray-400">{props.data.mdx.frontmatter.title}</h1>
                <span>{props.data.mdx.frontmatter.date}</span>
            </div>
            <article>
                <MDXRenderer>
                    {props.data.mdx.body}
                </MDXRenderer>
            </article>

        </LayoutPost>
    )
}