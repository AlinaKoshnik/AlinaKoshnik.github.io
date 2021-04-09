import React from "react"
import {Link} from "react-router-dom"
import './Header.scss';


const Header = () => {
    return (
        <header className="header">
                <div className="header-content">
                    <div className="header-menu menu">
                        <div className="menu-icon icon-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav className="menu-body">
                            <ul className="menu-list">
                                <li><Link to="/works" className="menu-link">Works</Link></li>
                                <li><Link to="/blog" className="menu-link">Blog</Link></li>
                                <li><Link to="/" className="menu-link">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    )
}

export default Header