import React from "react";
import { Link } from 'gatsby'

export interface Props {
    title: string
}

export class Header extends React.Component<Props> {
    public title: string;
    private header: any;
    
    constructor(props: Props) {
        super(props);
        this.title = props.title;
    }
    componentDidMount() {
        this.header = document.getElementById('floating-header');
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            if (scrollPos > 170) {
                this.header.classList.add('active');
            } else {
                this.header.classList.remove('active');
            }
        });
    }
    render() {
        return (
            <header className="w-full bg-gray-900 fixed top-0 text-gray-300" style={{zIndex: 1}}>
                <nav className="flex items-center py-4 mx-4 sm:mx-20 sm:px-2">
                    <Link to="/" className="font-bold">jaludev</Link>
                    <div className="flex-grow">
                        <div id="floating-header" className={`border-l-2 ml-3 pl-3`}>{this.title}</div>
                    </div>
                    <ul className="flex list-none">
                        <li>
                            <Link to="/" className="mx-2" style={{ fontVariant: 'all-small-caps', fontWeight: 500 }}>Blog</Link>
                        </li>
                        <li>
                            <Link to="/sobre-mi" className="mx-2" style={{ fontVariant: 'all-small-caps', fontWeight: 500 }}>Sobre mí</Link>
                        </li>
                        <li>
                            <Link to="/proyectos" className="mx-2" style={{ fontVariant: 'all-small-caps', fontWeight: 500 }}>Proyectos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }

}