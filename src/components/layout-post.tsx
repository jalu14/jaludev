import React from "react";
import { MDXProvider } from '@mdx-js/react';
import { Highlight } from './mdx.components';
import { Footer } from "./footer";
import { Header } from "./header";

const shortcodes = { Highlight };

export const LayoutPost = ({ children, extraClasses, title }: any) => {
    extraClasses = extraClasses ? extraClasses : 'md:w-10/10';
    return (
        <div>
            <Header title={title} ></Header>
            <div style={{ height: '56px' }}></div>
            <div className={`${extraClasses} mx-auto mt-16 text-gray-300`}>
                <MDXProvider components={shortcodes}>{children}</MDXProvider>
            </div>
            {/* <Footer /> */}
        </div>
    )
}