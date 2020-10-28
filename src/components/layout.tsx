import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({children, width}: any) => {
    // md:w-8/12 md:w-10/12
    width = width ? width : 10;
    return (
        <div>
            <Header />
            <div style={{ height: '56px' }}></div>
            <div className={`md:w-${width}/12 mx-auto mt-16 text-gray-300`}>
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}