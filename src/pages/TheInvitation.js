import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';
import './TheInvitation.css';

function TheInvitation() {
    const [visibleContent, setVisibleContent] = useState(new Set());
    const [scrollY, setScrollY] = useState(0);
    const sectionRefs = useRef([]);
    const contentRefs = useRef([]);

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

        const contentObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.content;
                        setVisibleContent((prev) => new Set([...prev, index]));
                        contentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.15
            }
        );

        contentRefs.current.forEach((ref) => {
            if (ref) contentObserver.observe(ref);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            contentObserver.disconnect();
        };
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section with Video */}
            <section className="invitation-hero">
                <div className="invitation-hero-video">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={getImageUrl('invitationVideoPoster')}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    >
                        <source src="/videos/invitation-video-720p.mp4" type="video/mp4" />
                        <source src="/videos/invitation-video-480p.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* Section 1 - CONNECT (Split: Text LEFT, Heading RIGHT) */}
            <section className="split-section mission-section">
                <div className="split-left">
                    <div
                        ref={(el) => (contentRefs.current[0] = el)}
                        data-content="0"
                        className={`split-content ${visibleContent.has('0') ? 'animate-in' : ''}`}
                    >
                        <p>
                            The Way is being formed as a local church with a simple conviction: that Jesus still meets people in the middle of real life, and that the Church is called to walk closely with others through both beauty and brokenness.
                        </p>
                        <p>
                            As a church rooted in Cardiff, we seek to live among the people of this city and bear witness to the way, the truth, and the life of Jesus. From the streets and homes of Cardiff, we trust that God will raise a sent people to the nations, conduits of His grace who will carry the life of Jesus beyond the city to plant and strengthen churches across the UK and Europe.
                        </p>
                    </div>
                </div>
                <div className="split-right mission-heading">
                    <div
                        ref={(el) => (contentRefs.current[2] = el)}
                        data-content="2"
                        className={`${visibleContent.has('2') ? 'animate-in' : ''}`}
                    >
                        <h2>CONNECT</h2>
                    </div>
                </div>
            </section>

            {/* Full-width Forest Road Image */}
            <section
                ref={(el) => (sectionRefs.current[0] = el)}
                className="image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('darkForest')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[0]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Section 2 - SERVE (Split: Heading LEFT, Content RIGHT) */}
            <section className="split-section how-we-live-section">
                <div className="split-left how-we-live-heading">
                    <div
                        ref={(el) => (contentRefs.current[3] = el)}
                        data-content="3"
                        className={`${visibleContent.has('3') ? 'animate-in' : ''}`}
                    >
                        <h2>SERVE</h2>
                    </div>
                </div>
                <div className="split-right">
                    <div
                        ref={(el) => (contentRefs.current[1] = el)}
                        data-content="1"
                        className={`split-content ${visibleContent.has('1') ? 'animate-in' : ''}`}
                    >
                        <p>
                            We believe serving is one of the primary ways people grow, belong, and participate in the life of the Church. God has intentionally placed gifts within each person, not for individual recognition, but for the strengthening of the whole body. As we serve one another, faith is formed, relationships deepen, and the life of Christ is made visible through ordinary acts of love and faithfulness.
                        </p>
                        <p style={{ fontStyle: 'italic', marginTop: '20px' }}>
                            "All of you together are Christ's body, and each of you is a part of it." - 1 Corinthians 12:27
                        </p>
                        <p>
                            We invite you to explore where God may be leading you to serve, trusting that every gift matters and every contribution plays a part in building up the body of Christ.
                        </p>
                    </div>
                </div>
            </section>

            {/* Full-width Mountain Road Image */}
            <section
                ref={(el) => (sectionRefs.current[1] = el)}
                className="image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('mountainRoad')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[1]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>
        </div>
    );
}

export default TheInvitation;
