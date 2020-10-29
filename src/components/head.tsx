import React from "react";
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet';

export const Head = ({ title }: any) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
            <html lang="es" />
            <meta name="og" />
        </Helmet>
    )
}