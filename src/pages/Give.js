import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';
import './Give.css';

function Give() {
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
            <section className="give-hero">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={getImageUrl('giveHeroVideoPoster')}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        display: 'block'
                    }}
                >
                    <source src="https://video.wixstatic.com/video/11062b_e12e778250c54ec0aa0d967b228e9cc3/720p/mp4/file.mp4" type="video/mp4" />
                    <source src="https://video.wixstatic.com/video/11062b_e12e778250c54ec0aa0d967b228e9cc3/480p/mp4/file.mp4" type="video/mp4" />
                </video>
            </section>

            {/* Section 1 - Give (Split: Text LEFT, Heading RIGHT) */}
            <section className="split-section mission-section">
                <div className="split-left">
                    <div
                        ref={(el) => (contentRefs.current[0] = el)}
                        data-content="0"
                        className={`split-content ${visibleContent.has('0') ? 'animate-in' : ''}`}
                    >
                        <p>
                            Giving is an act of worship that reveals the posture of the heart before God. From the opening pages of Scripture, God shows that what we bring to Him and how we bring it, matters. In Christ, giving flows not from obligation, but from grace, gratitude, and trust.
                        </p>
                        <p style={{ fontStyle: 'italic', marginTop: '20px' }}>
                            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
                        </p>
                        <p>
                            We invite you to give prayerfully and obediently as the Lord leads.
                        </p>
                    </div>
                </div>
                <div className="split-right mission-heading">
                    <div
                        ref={(el) => (contentRefs.current[2] = el)}
                        data-content="2"
                        className={`${visibleContent.has('2') ? 'animate-in' : ''}`}
                    >
                        <h2>GIVE</h2>
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
                        backgroundImage: `url(${getImageUrl('jinhui')})`,
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
                        backgroundImage: `url(${getImageUrl('mattFox')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[1]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>
        </div>
    );
}

export default Give;
