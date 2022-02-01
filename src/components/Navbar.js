import React from "react";
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <Link to="/" className="navbar-brand">Code 4 Puerto Rico</Link>
            </div>
        </nav>
    );
};

export default Navbar;
