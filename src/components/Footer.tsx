import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p className="footer-text">
                © 2023 Your Name. All rights reserved.
            </p>
            <a href="#" className="footer-link">
                Privacy Policy
            </a>
        </footer>
    );
};

export default Footer;
