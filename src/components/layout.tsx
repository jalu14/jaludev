import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({children}: any) => {
    return (
        <div>
            <Header />
            <div style={{ height: '56px' }}></div>
            <div className={`w-11/12 md:w-10/12 mx-auto mt-16 text-gray-300`}>
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}