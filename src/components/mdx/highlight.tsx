import React from "react";

export const Highlight = ({ children }: any) => {
    return (
        <div className="p-4 border-2 border-blue-900">
            {children}
        </div>
    )
}