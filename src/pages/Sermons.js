import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';
import './Sermons.css';

function Sermons() {
    const [visibleContent, setVisibleContent] = useState(new Set());
    const [sermons, setSermons] = useState([]);
    const [loading, setLoading] = useState(true);
    const contentRefs = useRef([]);

    // YouTube API Configuration - Replace these with your actual values
    const YOUTUBE_API_KEY = 'AIzaSyA5rZwWSNRSgA8uiPlIkCy6vVMDQMiMQlM';
    const CHANNEL_ID = 'UCLLCOdaPPPSyNe0eT4gusCw';

    useEffect(() => {
        fetchSermons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchSermons = async () => {
        try {
            let allSermons = [];
            let nextPageToken = '';

            // Fetch all videos using pagination
            do {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=50&type=video${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`
                );
                const data = await response.json();

                const videoIds = data.items.map(item => item.id.videoId).join(',');
                const detailsResponse = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoIds}&part=contentDetails`
                );
                const detailsData = await detailsResponse.json();

                const sermonsData = data.items.map((item, index) => ({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    date: new Date(item.snippet.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }),
                    duration: formatDuration(detailsData.items[index].contentDetails.duration),
                    series: 'Walking in Faith'
                }));

                allSermons = [...allSermons, ...sermonsData];
                nextPageToken = data.nextPageToken || '';
            } while (nextPageToken);

            setSermons(allSermons);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching sermons:', err);
            setLoading(false);
        }
    };

    const formatDuration = (duration) => {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = (match[1] || '').replace('H', '');
        const minutes = (match[2] || '').replace('M', '');
        const seconds = (match[3] || '').replace('S', '');
        if (hours) return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
        return `${minutes || '0'}:${seconds.padStart(2, '0')}`;
    };

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
    }, [sermons]);

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

                    {loading ? (
                        <div className="sermons-loading">Loading sermons...</div>
                    ) : (
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
                                        <span className="sermon-date">{sermon.date}</span>
                                    </div>
                                    <div className="sermon-video-player">
                                        <iframe
                                            width="100%"
                                            height="200"
                                            src={`https://www.youtube.com/embed/${sermon.id}`}
                                            title={sermon.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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
