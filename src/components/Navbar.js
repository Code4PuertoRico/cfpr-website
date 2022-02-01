import React from "react";
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Code For Puerto Rico</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/projects">Projects</Link>
                        <Link className="nav-link" to="/events">Events</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};



export default Navbar;
