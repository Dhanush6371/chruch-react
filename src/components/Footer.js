import React from 'react';
import { getImageUrl } from '../imageConfig';
import './Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-social">
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                        <img src={getImageUrl('iconYoutube')} alt="Youtube" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src={getImageUrl('iconInstagram')} alt="Instagram" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <img src={getImageUrl('iconFacebook')} alt="Facebook" />
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <img src={getImageUrl('iconTiktok')} alt="TikTok" />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} The Way Church Cardiff</p>
            </div>
        </footer>
    );
}

export default Footer;
