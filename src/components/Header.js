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

        // Handle hash scrolling after navigation
        if (location.hash === '#see-you-there') {
            setTimeout(() => {
                const contactSection = document.getElementById('see-you-there');
                if (contactSection) {
                    const headerOffset = 150;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        } else if (location.hash === '#give') {
            setTimeout(() => {
                const giveSection = document.getElementById('give');
                if (giveSection) {
                    const headerOffset = 200;
                    const elementPosition = giveSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    }, [location]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleGiveClick = (e) => {
        setMobileMenuOpen(false); // Close mobile menu
        e.preventDefault();

        // If already on invitation page, scroll to section
        if (location.pathname === '/the-invitation') {
            setTimeout(() => {
                const giveSection = document.getElementById('give');
                if (giveSection) {
                    const headerOffset = 200;
                    const elementPosition = giveSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
        // If on another page, navigate to invitation then scroll
        else {
            window.location.href = '/the-invitation#give';
        }
    };

    const handleConnectClick = (e) => {
        setMobileMenuOpen(false); // Close mobile menu
        e.preventDefault();

        // If already on home page, scroll to section
        if (location.pathname === '/') {
            setTimeout(() => {
                const contactSection = document.getElementById('see-you-there');
                if (contactSection) {
                    const headerOffset = 150;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
        // If on another page, navigate to home then scroll
        else {
            window.location.href = '/#see-you-there';
        }
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
                    </ul>

                    {/* Social icons in mobile menu */}
                    <div className="mobile-social-icons">
                        <Link to="/#see-you-there" className="connect-button-mobile" aria-label="Connect" onClick={handleConnectClick}>
                            CONNECT
                        </Link>
                        <Link to="/the-invitation#give" className="give-button-mobile" aria-label="Give" onClick={handleGiveClick}>
                            GIVE
                        </Link>
                        <div className="social-icons-row">
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
                    </div>
                </nav>

                <div className="desktop-social-icons">
                    <Link to="/#see-you-there" className="connect-button" aria-label="Connect" onClick={handleConnectClick}>
                        CONNECT
                    </Link>
                    <Link to="/the-invitation#give" className="give-button" aria-label="Give" onClick={handleGiveClick}>
                        GIVE
                    </Link>
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
