import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import { LayoutPost } from '../components/layout-post';
import { Head } from "../components/head";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { EntryCard } from "../components/entry-card";

export const query = graphql`
    query ($slug: String!, $suggestedPostSlug: String!) {
        entry: mdx (
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
        suggested: mdx (
            fields: {
              slug: {
                eq: $suggestedPostSlug
              }
            }
        ) {
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

    `;

export default function BlogEntry(props: any) {
    return (
        <LayoutPost title={props.data.entry.frontmatter.title} extraClasses="w-11/12 md:w-8/12">
            <Head title={props.data.entry.frontmatter.title} />
            <div className="mb-20">
                <h1 className="font-bold text-3xl text-gray-400">{props.data.entry.frontmatter.title}</h1>
                <span>{props.data.entry.frontmatter.date}</span>
            </div>
            <article>
                <MDXRenderer>
                    {props.data.entry.body}
                </MDXRenderer>
            </article>

            <hr className="border-gray-100 mb-20 mt-10"/>

            <div className="footer mb-20 md:w-5/12">
                <EntryCard {...props.data.suggested} />
            </div>

        </LayoutPost>
    )
}