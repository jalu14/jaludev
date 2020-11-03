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

    title = title ? `${title} | ${data.site.siteMetadata.title}` : 'jaludev - Cosas de programación'

    return (
        <Helmet title={title}>
            <html lang="es" />
            <meta name="google-site-verification" content="Q5hFA7PrMGkvUMPMQpwPVT_zT6AhbQFIq4tOxnC3Le0" />
            <script data-ad-client="ca-pub-7944174490154863" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            {children}
        </Helmet>
    )
}