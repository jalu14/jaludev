import React from "react";
import { MDXProvider } from '@mdx-js/react';
import { Highlight } from './mdx.components';
import { Footer } from "./footer";
import { Header } from "./header";

const shortcodes = { Highlight };

export const LayoutPost = ({ children, width }: any) => {
    // md:w-8/12 md:w-10/12
    width = width ? width : 10;
    return (
        <div>
            <Header />
            <div style={{ height: '56px' }}></div>
            <div className={`md:w-${width}/12 mx-auto mt-16 text-gray-300`}>
                <MDXProvider components={shortcodes}>{children}</MDXProvider>
            </div>
            {/* <Footer /> */}
        </div>
    )
}