import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';
import './Give.css';

function Give() {
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

            {/* Section 1 - Give (Split: Video left, Text right) */}
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
                            <h2>Give</h2>
                            <p className="give-text">
                                Giving is an act of worship that reveals the posture of the heart before God. From the opening pages of Scripture, God shows that what we bring to Him and how we bring it, matters. In Christ, giving flows not from obligation, but from grace, gratitude, and trust.
                            </p>
                            <p className="give-quote">
                                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
                            </p>
                            <p className="give-text">
                                We invite you to give prayerfully and obediently as the Lord leads.
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

            {/* Full-width Mountain Road Video */}
            <section
                ref={(el) => (sectionRefs.current[1] = el)}
                data-index="1"
                className={`image-section video-section ${loadedSections.has('1') ? 'loaded' : ''}`}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        display: 'block'
                    }}
                >
                    <source src="/images-new/mountain-road.mp4" type="video/mp4" />
                </video>
            </section>
        </div>
    );
}

export default Give;
