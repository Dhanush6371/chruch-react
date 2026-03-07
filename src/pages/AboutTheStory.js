import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';

function AboutTheStory() {
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
            {/* Hero Section - London building video */}
            <section
                ref={(el) => (sectionRefs.current[0] = el)}
                data-index="0"
                className={`hero-section video-hero ${loadedSections.has('0') ? 'loaded' : ''}`}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="hero-video"
                    style={{ objectPosition: 'center bottom' }}
                >
                    <source src="/images-new/london-building.mp4" type="video/mp4" />
                </video>
            </section>

            {/* The Reason Section - Big Ben LEFT, Text RIGHT */}
            <section className="split-section">
                <div
                    ref={(el) => (sectionRefs.current[1] = el)}
                    data-index="1"
                    className={`split-left ${loadedSections.has('1') ? 'loaded' : ''}`}
                    style={{
                        backgroundImage: loadedSections.has('1') ? `url(${getImageUrl('bigBen')})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center'
                    }}
                >
                </div>
                <div className="split-right">
                    <div
                        ref={(el) => (contentRefs.current[0] = el)}
                        data-content="0"
                        className={`split-content ${visibleContent.has('0') ? 'animate-in' : ''}`}
                    >
                        <h2>THE REASON</h2>
                        <p>
                            The Way is being formed as a local church with a simple conviction: that Jesus still meets people in the middle of real life, and that the Church is called to walk closely with others through both beauty and brokenness. As a church rooted in Cardiff, we seek to live among the people of this city and bear witness to the way, the truth, and the life of Jesus. From the streets and homes of Cardiff, we trust that God will raise a sent people to the nations, conduits of His grace who will carry the life of Jesus beyond the city to plant and strengthen churches across the UK and Europe.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Section - Dark forest with sunlight beam */}
            <section
                ref={(el) => (sectionRefs.current[2] = el)}
                data-index="2"
                className={`image-section ${loadedSections.has('2') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('2') ? `url(${getImageUrl('darkForest')})` : 'none'
                }}
            >
            </section>

            {/* The Vision Section - Text LEFT, Turquoise river RIGHT */}
            <section className="split-section">
                <div className="split-left">
                    <div
                        ref={(el) => (contentRefs.current[1] = el)}
                        data-content="1"
                        className={`split-content ${visibleContent.has('1') ? 'animate-in' : ''}`}
                    >
                        <h2>THE VISION</h2>
                        <p>
                            <strong>W — WITNESS</strong> We believe the gospel must be embodied before it is explained. Through transformed lives, loving community, and faithful obedience, we desire to bear witness to Jesus in both word and deed. "But you will receive power when the Holy Spirit comes upon you. And you will be my witnesses, telling people about me everywhere—in Jerusalem, throughout Judea, in Samaria, and to the ends of the earth." - Acts 1:8
                        </p>
                        <p>
                            <strong>A — APOSTOLIC EQUIPPING</strong> We are committed to forming disciples who are grounded in Scripture, filled with the Holy Spirit, and equipped to serve God faithfully in every sphere of life. Through teaching, prayer, and community, we seek to raise mature believers who carry responsibility, humility, and faith. "Now these are the gifts Christ gave to the church: the apostles, the prophets, the evangelists, and the pastors and teachers. Their responsibility is to equip God's people to do his work and build up the body of Christ." - Ephesians 4:11–12
                        </p>
                        <p>
                            <strong>Y — YIELDING NATIONS</strong> We look forward to God raising a sent people who carry the life of Jesus beyond the city. Our heart is to see churches planted, strengthened, and multiplied, as disciples are released into God's mission among the nations. "Therefore, go and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit." - Matthew 28:19
                        </p>
                    </div>
                </div>
                <div
                    ref={(el) => (sectionRefs.current[3] = el)}
                    data-index="3"
                    className={`split-right ${loadedSections.has('3') ? 'loaded' : ''}`}
                    style={{
                        backgroundImage: loadedSections.has('3') ? `url(${getImageUrl('cityTraffic')})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center'
                    }}
                >
                </div>
            </section>

            {/* Image Section - Road in mountains */}
            <section
                ref={(el) => (sectionRefs.current[4] = el)}
                data-index="4"
                className={`image-section ${loadedSections.has('4') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('4') ? `url(${getImageUrl('mountainRoad')})` : 'none'
                }}
            >
            </section>

            {/* The Mission Section - Text LEFT, Heading RIGHT */}
            <section className="split-section mission-section">
                <div className="split-left">
                    <div
                        ref={(el) => (contentRefs.current[2] = el)}
                        data-content="2"
                        className={`split-content ${visibleContent.has('2') ? 'animate-in' : ''}`}
                    >
                        <p>
                            Our mission is to walk with people from death to life, from life to fullness, and from fullness into mission. We form disciples who follow Jesus wholeheartedly, people whose lives are shaped by the Word and the Spirit, expressed through faithful obedience, as we journey together toward Christlikeness and are sent to live on mission in the world.
                        </p>
                    </div>
                </div>
                <div className="split-right mission-heading">
                    <div
                        ref={(el) => (contentRefs.current[3] = el)}
                        data-content="3"
                        className={`${visibleContent.has('3') ? 'animate-in' : ''}`}
                    >
                        <h2>THE MISSION</h2>
                    </div>
                </div>
            </section>

            {/* Image Section - Road with sunset */}
            <section
                ref={(el) => (sectionRefs.current[5] = el)}
                data-index="5"
                className={`image-section ${loadedSections.has('5') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('5') ? `url(${getImageUrl('sunsetRoad')})` : 'none'
                }}
            >
            </section>

            {/* How We Live This Out Section - Heading LEFT, Content RIGHT */}
            <section className="split-section how-we-live-section">
                <div className="split-left how-we-live-heading">
                    <div
                        ref={(el) => (contentRefs.current[4] = el)}
                        data-content="4"
                        className={`${visibleContent.has('4') ? 'animate-in' : ''}`}
                    >
                        <h2>HOW WE LIVE THIS OUT</h2>
                    </div>
                </div>
                <div className="split-right">
                    <div
                        ref={(el) => (contentRefs.current[5] = el)}
                        data-content="5"
                        className={`split-content how-we-live-content ${visibleContent.has('5') ? 'animate-in' : ''}`}
                    >
                        <div className="value-block">
                            <h3>CHRIST EXALTED</h3>
                            <p>We centre everything on Jesus as Lord, Head, and supreme authority.</p>
                            <p className="scripture">"Christ is also the head of the church, which is his body. He is the beginning, supreme over all who rise from the dead. So he is first in everything." - Colossians 1:18</p>
                        </div>
                        <div className="value-block">
                            <h3>SCRIPTURE HONOURED</h3>
                            <p>We submit our lives and direction to the authority of God's Word.</p>
                            <p className="scripture">"All Scripture is inspired by God and is useful to teach us what is true and to make us realize what is wrong in our lives. It corrects us when we are wrong and teaches us to do what is right." - 2 Timothy 3:16</p>
                        </div>
                        <div className="value-block">
                            <h3>SPIRIT DEPENDED</h3>
                            <p>We rely on the Holy Spirit for guidance, power, and transformation.</p>
                            <p className="scripture">"Then he said to me, 'This is what the Lord says to Zerubbabel: It is not by force nor by strength, but by my Spirit, says the Lord of Heaven's Armies.'" - Zechariah 4:6</p>
                        </div>
                        <div className="value-block">
                            <h3>CHARACTER FORMED</h3>
                            <p>We pursue Christlike formation over gifting, platform, or position.</p>
                            <p className="scripture">"Oh, my dear children! I feel as if I'm going through labor pains for you again, and they will continue until Christ is fully developed in your lives." - Galatians 4:19</p>
                        </div>
                        <div className="value-block">
                            <h3>COMMUNITY COVENANTED</h3>
                            <p>We walk in authentic, loving, and accountable life together.</p>
                            <p className="scripture">"Your love for one another will prove to the world that you are my disciples." - John 13:35</p>
                        </div>
                        <div className="value-block">
                            <h3>MISSION EMBRACED</h3>
                            <p>We live as sent people in the world and among the nations.</p>
                            <p className="scripture">"Again he said, 'Peace be with you. As the Father has sent me, so I am sending you.'" - John 20:21</p>
                        </div>
                        <div className="value-block">
                            <h3>GENEROSITY PRACTISED</h3>
                            <p>We live open-handed lives marked by hospitality and sacrifice.</p>
                            <p className="scripture">"And I have been a constant example of how you can help those in need by working hard. You should remember the words of the Lord Jesus: 'It is more blessed to give than to receive.'" - Acts 20:35</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutTheStory;
