import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';
import './TheInvitation.css';

function TheInvitation() {
    const [loadedSections, setLoadedSections] = useState(new Set());
    const [visibleContent, setVisibleContent] = useState(new Set());
    const sectionRefs = useRef([]);
    const contentRefs = useRef([]);

    useEffect(() => {
        const imageObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index;
                        setTimeout(() => {
                            setLoadedSections((prev) => new Set([...prev, index]));
                        }, 300);
                        imageObserver.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '50px',
                threshold: 0.01
            }
        );

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

        sectionRefs.current.forEach((ref) => {
            if (ref) imageObserver.observe(ref);
        });

        contentRefs.current.forEach((ref) => {
            if (ref) contentObserver.observe(ref);
        });

        return () => {
            imageObserver.disconnect();
            contentObserver.disconnect();
        };
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section with Video Background */}
            <section className="invitation-hero">
                <div className="invitation-hero-video">
                    <img
                        src={getImageUrl('invitationHero')}
                        alt="The Invitation"
                    />
                </div>
            </section>

            {/* Section 1 - CONNECT (Split: Video left, Text right) */}
            <section className="split-section">
                <div className="split-container">
                    <div className="split-left split-video">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={getImageUrl('invitationVideoPoster')}
                        >
                            <source src="https://video.wixstatic.com/video/11062b_3fc3608105274653a4675d6e30353973/720p/mp4/file.mp4" type="video/mp4" />
                            <source src="https://video.wixstatic.com/video/11062b_3fc3608105274653a4675d6e30353973/480p/mp4/file.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="split-right split-content-blue">
                        <div
                            ref={(el) => (contentRefs.current[0] = el)}
                            data-content="0"
                            className={`split-text-content ${visibleContent.has('0') ? 'animate-in' : ''}`}
                        >
                            <h2>CONNECT</h2>
                            <p className="connect-text">
                                The Way is being formed as a local church with a simple conviction: that Jesus still meets people in the middle of real life, and that the Church is called to walk closely with others through both beauty and brokenness.
                            </p>
                            <p className="connect-text">
                                As a church rooted in Cardiff, we seek to live among the people of this city and bear witness to the way, the truth, and the life of Jesus. From the streets and homes of Cardiff, we trust that God will raise a sent people to the nations, conduits of His grace who will carry the life of Jesus beyond the city to plant and strengthen churches across the UK and Europe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full-width Forest Road Image */}
            <section
                ref={(el) => (sectionRefs.current[0] = el)}
                data-index="0"
                className={`image-section ${loadedSections.has('0') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('0') ? `url(${getImageUrl('darkForest')})` : 'none'
                }}
            >
            </section>

            {/* Section 2 - SERVE (Split: Text left, Image right) */}
            <section className="split-section">
                <div className="split-container">
                    <div className="split-left split-content-blue">
                        <div
                            ref={(el) => (contentRefs.current[1] = el)}
                            data-content="1"
                            className={`split-text-content ${visibleContent.has('1') ? 'animate-in' : ''}`}
                        >
                            <h2>SERVE</h2>
                            <p className="serve-text">
                                We believe serving is one of the primary ways people grow, belong, and participate in the life of the Church. God has intentionally placed gifts within each person, not for individual recognition, but for the strengthening of the whole body. As we serve one another, faith is formed, relationships deepen, and the life of Christ is made visible through ordinary acts of love and faithfulness.
                            </p>
                            <p className="serve-quote">
                                "All of you together are Christ's body, and each of you is a part of it." - 1 Corinthians 12:27
                            </p>
                            <p className="serve-text">
                                We invite you to explore where God may be leading you to serve, trusting that every gift matters and every contribution plays a part in building up the body of Christ.
                            </p>
                        </div>
                    </div>
                    <div className="split-right split-image">
                        <img
                            src={getImageUrl('cityTraffic')}
                            alt="Serve"
                        />
                    </div>
                </div>
            </section>

            {/* Full-width Mountain Road Image */}
            <section
                ref={(el) => (sectionRefs.current[1] = el)}
                data-index="1"
                className={`image-section ${loadedSections.has('1') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('1') ? `url(${getImageUrl('mountainRoad')})` : 'none'
                }}
            >
            </section>
        </div>
    );
}

export default TheInvitation;
