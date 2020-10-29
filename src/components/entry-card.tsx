import React from "react";
import { Link } from 'gatsby'

export const EntryCard = (props: any) => {

    return (
        <li key={props.frontmatter.title} className="entry-card bg-gray-800 p-5 rounded-sm shadow-2xl relative">
            <Link className="text-white" style={{ display: 'flex', flexDirection: 'column', height: '100%' }} to={`/${props.fields.slug}`}>
                {
                    (props.frontmatter.categories && props.frontmatter.categories.length) &&
                    <span className="font-bold text-gray-500">{props.frontmatter.categories[0]}</span>
                }
                <h3 className="font-bold text-2xl">{props.frontmatter.title}</h3>
                <span>{props.frontmatter.date}</span>
                <div className="mt-10 flex-grow">
                    <p>{props.excerpt}</p>
                </div>
                <div className="mt-5">
                    <span className="font-bold">Leer más</span>
                </div>
            </Link>
        </li>
    )
}