import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';
import './Sermons.css';

// YouTube Audio Player Component
const YouTubeAudioPlayer = React.forwardRef(({ videoId, onPlay }, ref) => {
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isReady, setIsReady] = useState(false);

    // Expose stop method to parent via ref
    React.useImperativeHandle(ref, () => ({
        stop: () => {
            if (playerRef.current && playerRef.current.pauseVideo) {
                playerRef.current.pauseVideo();
                setIsPlaying(false);
            }
        }
    }));

    useEffect(() => {
        const initPlayer = () => {
            if (window.YT && window.YT.Player) {
                const player = new window.YT.Player(`player-${videoId}`, {
                    height: '0',
                    width: '0',
                    videoId: videoId,
                    playerVars: {
                        controls: 0,
                        disablekb: 1,
                        modestbranding: 1,
                    },
                    events: {
                        onReady: (event) => {
                            playerRef.current = event.target;
                            setDuration(event.target.getDuration());
                            setIsReady(true);
                        },
                        onStateChange: (event) => {
                            if (event.data === window.YT.PlayerState.PLAYING) {
                                setIsPlaying(true);
                                onPlay(videoId); // Notify parent that this player started
                            } else {
                                setIsPlaying(false);
                            }
                        },
                    },
                });
                return player;
            }
            return null;
        };

        // Load YouTube IFrame API if not loaded
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                initPlayer();
            };
        } else {
            initPlayer();
        }

        return () => {
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy();
            }
        };
    }, [videoId, onPlay]);

    useEffect(() => {
        let interval;
        if (isPlaying && playerRef.current) {
            interval = setInterval(() => {
                if (playerRef.current && playerRef.current.getCurrentTime) {
                    setCurrentTime(playerRef.current.getCurrentTime());
                }
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isPlaying]);

    const togglePlay = () => {
        if (playerRef.current && isReady) {
            if (isPlaying) {
                playerRef.current.pauseVideo();
            } else {
                playerRef.current.playVideo();
            }
        }
    };

    const handleSeek = (e) => {
        if (!playerRef.current || !isReady) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        const newTime = percentage * duration;
        playerRef.current.seekTo(newTime);
        setCurrentTime(newTime);
    };

    const formatTime = (seconds) => {
        if (!seconds || isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="custom-audio-player">
            <div id={`player-${videoId}`} style={{ display: 'none' }}></div>
            <div className="audio-controls">
                <button className="play-button" onClick={togglePlay} disabled={!isReady}>
                    {isPlaying ? '⏸' : '▶'}
                </button>
                <div className="time-display">{formatTime(currentTime)}</div>
                <div className="progress-bar" onClick={handleSeek}>
                    <div
                        className="progress-fill"
                        style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                    ></div>
                </div>
                <div className="time-display">{formatTime(duration)}</div>
            </div>
        </div>
    );
});

function Sermons() {
    const [visibleContent, setVisibleContent] = useState(new Set());
    const [sermons, setSermons] = useState([]);
    const [loading, setLoading] = useState(false); // Changed to false initially
    const [currentPage, setCurrentPage] = useState(1);
    const contentRefs = useRef([]);
    const playerRefs = useRef({});

    const SERMONS_PER_PAGE = 12;

    // YouTube API Configuration
    const YOUTUBE_API_KEY = 'AIzaSyA5rZwWSNRSgA8uiPlIkCy6vVMDQMiMQlM';
    const CHANNEL_ID = 'UCLLCOdaPPPSyNe0eT4gusCw';

    // Handle when a player starts playing
    const handlePlay = (videoId) => {
        // Stop all other players
        Object.keys(playerRefs.current).forEach((id) => {
            if (id !== videoId && playerRefs.current[id] && playerRefs.current[id].stop) {
                playerRefs.current[id].stop();
            }
        });
    };

    // Force refresh - clear cache and fetch new data
    const handleRefresh = () => {
        sessionStorage.removeItem('sermons');
        sessionStorage.removeItem('sermonsTimestamp');
        fetchSermons();
    };

    useEffect(() => {
        fetchSermons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchSermons = async () => {
        // Check if data exists in sessionStorage
        const cachedSermons = sessionStorage.getItem('sermons');
        const cacheTimestamp = sessionStorage.getItem('sermonsTimestamp');
        const cacheExpiry = 24 * 60 * 60 * 1000; // 24 hours (until next day's sermon)

        // Use cached data if available and not expired
        if (cachedSermons && cacheTimestamp) {
            const age = Date.now() - parseInt(cacheTimestamp);
            if (age < cacheExpiry) {
                setSermons(JSON.parse(cachedSermons));
                setLoading(false);
                return; // Don't fetch new data
            }
        }

        // Only show loading if no cache exists
        if (!cachedSermons) {
            setLoading(true);
        }

        // Fetch fresh data if no cache or expired
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

            // Save to sessionStorage
            sessionStorage.setItem('sermons', JSON.stringify(allSermons));
            sessionStorage.setItem('sermonsTimestamp', Date.now().toString());

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

    // Pagination logic
    const totalPages = Math.ceil(sermons.length / SERMONS_PER_PAGE);
    const startIndex = (currentPage - 1) * SERMONS_PER_PAGE;
    const endIndex = startIndex + SERMONS_PER_PAGE;
    const currentSermons = sermons.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

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
                        <button className="refresh-btn" onClick={handleRefresh} disabled={loading}>
                            {loading ? 'Checking for new sermons...' : 'Check for New Sermons'}
                        </button>
                    </div>

                    {loading ? (
                        <div className="sermons-loading">Loading sermons...</div>
                    ) : (
                        <>
                            <div className="sermons-grid">
                                {currentSermons.map((sermon, index) => (
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
                                        <div className="sermon-audio-player">
                                            <YouTubeAudioPlayer
                                                videoId={sermon.id}
                                                onPlay={handlePlay}
                                                ref={(el) => (playerRefs.current[sermon.id] = el)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="pagination">
                                    <button
                                        className="pagination-btn"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                    <div className="pagination-numbers">
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i + 1}
                                                className={`pagination-number ${currentPage === i + 1 ? 'active' : ''}`}
                                                onClick={() => handlePageChange(i + 1)}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>
                                    <button
                                        className="pagination-btn"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
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

