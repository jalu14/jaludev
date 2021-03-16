import React from "react";
import { Link } from 'gatsby'
// @ts-ignore
import ClockLogo from '../../static/svg/clock.svg';

export const EntryCard = (props: any) => {

    return (
        <li key={props.frontmatter.title} className="entry-card bg-gray-800 p-5 rounded-sm shadow-2xl relative">
            <Link className="text-white" style={{ display: 'flex', flexDirection: 'column', height: '100%' }} to={`/blog/${props.fields.slug}`}>
                {
                    (props.frontmatter.categories && props.frontmatter.categories.length) &&
                    <span className="font-bold text-gray-500">{props.frontmatter.categories[0]}</span>
                }
                <h3 className="font-bold text-2xl">{props.frontmatter.title}</h3>
                <span style={{textAlign: 'end'}}>{props.frontmatter.date}</span>
                <div className="mt-10 flex-grow">
                    <p>{props.frontmatter.description}</p>
                </div>
                <div className="flex mt-5">
                    <ClockLogo style={{width: '15px', height: 'auto', marginRight: '7px', fill: 'white'}} />
                    <span>{props.timeToRead} min</span>
                </div>
            </Link>
        </li>
    )
}