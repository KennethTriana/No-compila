import React from "react";
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>©{currentYear} SENA. ALL rigths reserved.</p>
        </footer>
    );
};

export default Footer;
