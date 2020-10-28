import React from "react";
import { Link } from 'gatsby'

export const Header = () => {
    return (
        <header className="w-full bg-gray-900 fixed top-0 text-gray-300">
            <nav className="flex items-center py-4 mx-4 sm:mx-20 sm:px-2">
                <Link to="/" className="font-bold">jaludev</Link>
                <div className="flex-grow"></div>
                <ul className="flex list-none">
                    <li>
                        <Link to="/blog" className="mx-2" style={{fontVariant: 'all-small-caps', fontWeight: 500}}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/sobre-mi" className="mx-2" style={{fontVariant: 'all-small-caps', fontWeight: 500}}>Sobre mí</Link>
                    </li>
                    <li>
                        <Link to="/proyectos" className="mx-2" style={{fontVariant: 'all-small-caps', fontWeight: 500}}>Proyectos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}