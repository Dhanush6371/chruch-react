import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getImageUrl } from '../imageConfig';
import './Header.css';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo">
                    <Link to="/">
                        <img
                            src={getImageUrl('logo')}
                            alt="The Way Church Cardiff"
                            className="logo-img"
                        />
                    </Link>
                </div>

                <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <ul className="nav-menu">
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>home</Link></li>
                        <li><Link to="/about-the-story" className={location.pathname === '/about-the-story' ? 'active' : ''}>the story</Link></li>
                        <li><Link to="/the-belief" className={location.pathname === '/the-belief' ? 'active' : ''}>the belief</Link></li>
                        <li><Link to="/the-team" className={location.pathname === '/the-team' ? 'active' : ''}>the team</Link></li>
                        <li><Link to="/the-invitation" className={location.pathname === '/the-invitation' ? 'active' : ''}>the invitation</Link></li>
                        <li><Link to="/sermons" className={location.pathname === '/sermons' ? 'active' : ''}>sermons</Link></li>
                    </ul>

                    {/* Social icons in mobile menu */}
                    <div className="mobile-social-icons">
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
                </nav>

                <div className="desktop-social-icons">
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

                <button
                    className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}

export default Header;
