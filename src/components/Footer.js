import React from "react";
import { Link } from "gatsby"

const Footer = () => {
    const d = new Date();
    const year = d.getUTCFullYear();
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/events">Events</Link></li>
            <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/contact">Contact</Link></li>
            </ul>
            <p className="text-center text-muted">© {year} Code For Puerto Rico</p>
        </footer>
    );
};

export default Footer;