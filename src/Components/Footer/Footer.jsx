import React from 'react';
import './Footer.css'; 


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/about" className="footer-link">About Us</a>
                    <a href="/contact" className="footer-link">Contact</a>
                    <a href="/terms" className="footer-link">Terms of Use</a>
                    <a href="/privacy" className="footer-link">Privacy Policy</a>
                </div>
                <div className="footer-socials">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social">Instagram</a>
                </div>
                <div className="footer-info">
                    <p>© 2024 GSK. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
