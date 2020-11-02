import React from "react";
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet';

export const Head = ({ title, children }: any) => {

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
        <Helmet title={`${title ? `${title} | ` : ''}${data.site.siteMetadata.title}`}>
            <html lang="es" />
            <meta name="google-site-verification" content="Q5hFA7PrMGkvUMPMQpwPVT_zT6AhbQFIq4tOxnC3Le0" />
            {children}
        </Helmet>
    )
}