import React from "react";
import { Link } from "gatsby"

const Footer = () => {
    const d = new Date();
    const year = d.getUTCFullYear();
    return (
        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; Copyright {year} - Todos los derechos reservados.</a>
        </div>
    );
};

export default Footer;