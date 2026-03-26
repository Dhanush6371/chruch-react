import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';
import './TheInvitation.css';

function TheInvitation() {

    const [scrollY, setScrollY] = useState(0);
    const sectionRefs = useRef([]);


    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section
                className="invitation-hero"
                style={{
                    backgroundImage: `url(${getImageUrl('invitationHero')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    height: '60vh',
                    minHeight: '400px'
                }}
            >
            </section>

            {/* Section 1 - CONNECT (Split: Heading LEFT, Content RIGHT) */}
            <section className="split-section how-we-live-section">
                <div className="split-left how-we-live-heading">
                    <div
                        className="animate-in"
                    >
                        <h2>CONNECT</h2>
                    </div>
                </div>
                <div className="split-right">
                    <div
                        className="split-content animate-in"
                    >
                        <p>
                            The Way is being formed as a local church with a simple conviction: that Jesus still meets people in the middle of real life, and that the Church is called to walk closely with others through both beauty and brokenness.
                        </p>
                        <p>
                            As a church rooted in Cardiff, we seek to live among the people of this city and bear witness to the way, the truth, and the life of Jesus. From the streets and homes of Cardiff, we trust that God will raise a sent people to the nations, conduits of His grace who will carry the life of Jesus beyond the city to plant and strengthen churches across the UK and Europe.
                        </p>
                    </div>
                </div>
            </section>

            {/* Full-width Image */}
            <section
                ref={(el) => (sectionRefs.current[0] = el)}
                className="image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('invitationSection1')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[0]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Section 2 - SERVE (Split: Heading FIRST, Text SECOND) */}
            <section className="split-section mission-section">
                <div className="split-right mission-heading">
                    <div
                        className="animate-in"
                    >
                        <h2>SERVE</h2>
                    </div>
                </div>
                <div className="split-left">
                    <div
                        className="split-content animate-in"
                    >
                        <p>
                            We believe serving is one of the primary ways people grow, belong, and participate in the life of the Church. God has intentionally placed gifts within each person, not for individual recognition, but for the strengthening of the whole body. As we serve one another, faith is formed, relationships deepen, and the life of Christ is made visible through ordinary acts of love and faithfulness.
                        </p>
                        <p style={{ fontStyle: 'italic', marginTop: '20px', fontSize: '17px' }}>
                            "All of you together are Christ's body, and each of you is a part of it." - 1 Corinthians 12:27
                        </p>
                        <p>
                            We invite you to explore where God may be leading you to serve, trusting that every gift matters and every contribution plays a part in building up the body of Christ.
                        </p>
                    </div>
                </div>
            </section>

            {/* Full-width Image */}
            <section
                ref={(el) => (sectionRefs.current[1] = el)}
                className="image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('invitationSection2')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[1]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Section 3 - GIVE (Split: Text LEFT, Heading RIGHT) */}
            <section className="split-section how-we-live-section">
                <div className="split-left how-we-live-heading">
                    <div
                        className="animate-in"
                    >
                        <h2>GIVE</h2>
                    </div>
                </div>
                <div className="split-right">
                    <div
                        className="split-content animate-in"
                    >
                        <p>
                            Giving is an act of worship that reveals the posture of the heart before God. From the opening pages of Scripture, God shows that what we bring to Him and how we bring it, matters. In Christ, giving flows not from obligation, but from grace, gratitude, and trust.
                        </p>
                        <p style={{ fontStyle: 'italic', marginTop: '20px', fontSize: '17px' }}>
                            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
                        </p>
                        <p>
                            We invite you to give prayerfully and obediently as the Lord leads.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TheInvitation;
