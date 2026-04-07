import React from 'react';
import { getImageUrl } from '../imageConfig';
import './Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-social">
                    <a href="https://www.youtube.com/channel/UCoxbIC_3Gr9b91S38SlML0w" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                        <img src={getImageUrl('iconYoutube')} alt="Youtube" />
                    </a>
                    <a href="https://www.instagram.com/thewaycardiff?igsh=MXVtd2J6OHhjM2gyNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src={getImageUrl('iconInstagram')} alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com/share/1Bj44P8xUq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <img src={getImageUrl('iconFacebook')} alt="Facebook" />
                    </a>
                    <a href="https://tiktok.com/@thewaycardiff" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <img src={getImageUrl('iconTiktok')} alt="TikTok" />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} The Way Church Cardiff | made my afterlife<br />A Liberty Church Plant </p>
            </div>
        </footer>
    );
}

export default Footer;
