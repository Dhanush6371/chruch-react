import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';
import './Sermons.css';

function Sermons() {
    const [visibleContent, setVisibleContent] = useState(new Set());
    const contentRefs = useRef([]);

    useEffect(() => {
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
            contentObserver.disconnect();
        };
    }, []);

    // Sample sermon data - you'll update this every Sunday
    const sermons = [
        {
            id: 1,
            title: 'The Way of Faith',
            speaker: 'Pastor Name',
            date: 'March 17, 2026',
            duration: '45:30',
            audioUrl: '#',
            series: 'Walking in Faith'
        },
        {
            id: 2,
            title: 'Grace Upon Grace',
            speaker: 'Pastor Name',
            date: 'March 10, 2026',
            duration: '42:15',
            audioUrl: '#',
            series: 'Walking in Faith'
        },
        {
            id: 3,
            title: 'Living in the Light',
            speaker: 'Pastor Name',
            date: 'March 3, 2026',
            duration: '38:45',
            audioUrl: '#',
            series: 'Walking in Faith'
        },
        {
            id: 4,
            title: 'The Power of Prayer',
            speaker: 'Pastor Name',
            date: 'February 24, 2026',
            duration: '41:20',
            audioUrl: '#',
            series: 'Foundations'
        },
        {
            id: 5,
            title: 'Love One Another',
            speaker: 'Pastor Name',
            date: 'February 17, 2026',
            duration: '44:10',
            audioUrl: '#',
            series: 'Foundations'
        },
        {
            id: 6,
            title: 'The Gospel Message',
            speaker: 'Pastor Name',
            date: 'February 10, 2026',
            duration: '39:55',
            audioUrl: '#',
            series: 'Foundations'
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section with Video */}
            <section className="sermons-hero">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={getImageUrl('beliefVideoPoster')}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        display: 'block'
                    }}
                >
                    <source src="/videos/belief-video-720p.mp4" type="video/mp4" />
                    <source src="/videos/belief-video-480p.mp4" type="video/mp4" />
                </video>
                <div className="sermons-hero-overlay">
                    <h1>SERMONS</h1>
                    <p>Listen to our weekly messages</p>
                </div>
            </section>

            {/* Sermons Grid Section */}
            <section className="sermons-grid-section">
                <div
                    ref={(el) => (contentRefs.current[0] = el)}
                    data-content="0"
                    className={`sermons-container ${visibleContent.has('0') ? 'animate-in' : ''}`}
                >
                    <div className="sermons-intro">
                        <h2>Recent Messages</h2>
                        <p>Catch up on our latest Sunday sermons. New messages uploaded every week.</p>
                    </div>

                    <div className="sermons-grid">
                        {sermons.map((sermon, index) => (
                            <div
                                key={sermon.id}
                                ref={(el) => (contentRefs.current[index + 1] = el)}
                                data-content={index + 1}
                                className={`sermon-card ${visibleContent.has(String(index + 1)) ? 'animate-in' : ''}`}
                            >
                                <div className="sermon-card-header">
                                    <span className="sermon-series">{sermon.series}</span>
                                    <span className="sermon-duration">{sermon.duration}</span>
                                </div>
                                <h3 className="sermon-title">{sermon.title}</h3>
                                <div className="sermon-meta">
                                    <span className="sermon-speaker">{sermon.speaker}</span>
                                    <span className="sermon-date">{sermon.date}</span>
                                </div>
                                <div className="sermon-audio-player">
                                    <audio controls>
                                        <source src={sermon.audioUrl} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscribe Section */}
            <section className="sermons-subscribe-section">
                <div
                    ref={(el) => (contentRefs.current[10] = el)}
                    data-content="10"
                    className={`subscribe-content ${visibleContent.has('10') ? 'animate-in' : ''}`}
                >
                    <h2>Never Miss a Message</h2>
                    <p>Subscribe to our podcast or follow us on YouTube to get notified when new sermons are available.</p>
                    <div className="subscribe-buttons">
                        <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer" className="subscribe-btn">Subscribe on Podcast</a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="subscribe-btn">Watch on YouTube</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sermons;
