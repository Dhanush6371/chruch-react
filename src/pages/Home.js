import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import './Home.css';

function Home() {
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
            {/* Hero Section with Video Background */}
            <section
                ref={(el) => (sectionRefs.current[0] = el)}
                className="hero-section video-hero loaded"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="hero-video"
                >
                    <source src="/images-new/home-hero-video.mp4" type="video/mp4" />
                </video>
            </section>

            {/* Quote Section 1 */}
            <section className="quote-section" ref={(el) => (sectionRefs.current[5] = el)}>
                <div
                    className="section-content animate-in"
                    style={{
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[5]?.offsetTop || 0)) * -0.2}px, 0)`
                    }}
                >
                    <h1 className="quote-text">
                        Jesus said, "Come to me, all of you who are weary and carry heavy burdens, and I will give you rest. - Matthew 11:28
                    </h1>
                </div>
            </section>

            {/* Image Section 1 */}
            <section
                ref={(el) => (sectionRefs.current[1] = el)}
                className="image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('homeSection1')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[1]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Quote Section 2 */}
            <section className="quote-section" ref={(el) => (sectionRefs.current[5] = el)}>
                <div className="section-content animate-in">
                    <h1 className="quote-text">
                        To go from Death to Life, where the Father's grace rewrites the story.
                    </h1>
                </div>
            </section>

            {/* The Story Section */}
            <section className="content-section">
                <div className="section-content animate-in">
                    <h2>Why Do We Exist?</h2>
                    <p>
                        It often begins in ordinary moments, when life feels unfinished and questions remain. The Way is formed out of a simple but deep conviction that Jesus still meets people in the middle of real life, and that the Church is called to walk closely with others through both beauty and brokenness. We believe the gospel is not an idea to be admired from a distance, but a life to be lived together patiently, honestly, and faithfully. Rooted in Cardiff, we seek to live among the people of this city as witnesses to the way, the truth, and the life of Jesus. The Way is not about building a platform, but about forming a people who walk faithfully with God and with one another for the sake of the world He loves.
                    </p>
                </div>
            </section>

            {/* Image Section 2 */}
            <section
                ref={(el) => (sectionRefs.current[2] = el)}
                className="image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('homeSection2')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[2]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Quote Section 3 */}
            <section className="quote-section">
                <div className="section-content animate-in">
                    <h1 className="quote-text">
                        To grow from life to fullness, where we abide in the Son, the hope of glory.
                    </h1>
                </div>
            </section>

            {/* The Belief Section */}
            <section className="content-section">
                <div className="section-content animate-in">
                    <h2>What Do We Believe?</h2>
                    <p>
                        Before anything else, there is God, and everything begins with Him. We believe in one God, Father, Son, and Holy Spirit, eternally existing in perfect unity. We believe Jesus Christ is God incarnate, fully God and fully man, who lived a sinless life, died as our substitute, rose bodily from the dead, ascended into heaven, and now reigns as Lord. Through His death and resurrection, salvation is offered freely by grace through faith to all who repent and believe. We believe humanity was created in God's image but is fallen and unable to restore itself apart from Christ. New life comes through the regenerating work of the Holy Spirit, who indwells, transforms, and empowers believers for Christlike living and service.
                    </p>
                </div>
            </section>

            {/* Image Section 3 */}
            <section
                ref={(el) => (sectionRefs.current[3] = el)}
                className="image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('homeSection3')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[3]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Quote Section 4 */}
            <section className="quote-section">
                <div className="section-content animate-in">
                    <h1 className="quote-text">
                        To move from Fullness to Mission, where the Holy Spirit makes Christ's redemption known.
                    </h1>
                </div>
            </section>

            {/* The Team Section */}
            <section className="content-section">
                <div className="section-content animate-in">
                    <h2>Who We Are?</h2>
                    <p>
                        Behind every new beginning are people who said yes before the outcome was visible. The Way is led by Noel and Geraldine, who serve as the founding elders and planting family in Cardiff. Their journey has been shaped by years of faithful ministry, deep personal loss, and living hope, forming in them a steady trust that God builds His Church. Heath and Leah serve alongside them in co-eldership and apostolic oversight, offering wisdom, accountability, and shared discernment. The Way is locally led, yet relationally connected within an apostolic household, following the biblical pattern of shared leadership, mutual accountability, and spiritual covering.
                    </p>
                </div>
            </section>

            {/* Image Section 4 */}
            <section
                ref={(el) => (sectionRefs.current[4] = el)}
                className="image-section home-5-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('homeSection4')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[4]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* The Invitation Section */}
            <section className="content-section">
                <div className="section-content animate-in">
                    <h2>Where Do You Begin?</h2>
                    <p>
                        Every journey begins with a step, even when the way forward is unclear. The Way takes shape through relationship, shared life, and simple steps of obedience. Whether you are exploring faith, returning to church, or sensing a desire to walk with us in this season, you are warmly invited. You do not need to have all the answers, and you do not need to commit to anything. You are welcome to come as you are. If you are curious, interested, or quietly hopeful, we would love to hear from you. The Way is not about perfection, but about walking together toward Jesus, step by step, in faith, hope, and love.
                    </p>
                </div>
            </section>

            {/* Full-width Image Section */}
            <section
                ref={(el) => (sectionRefs.current[10] = el)}
                className="image-section contact-image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('homeSection5')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[10]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Contact Section */}
            <section className="contact-section" style={{ paddingBottom: '0px', marginBottom: '-20px' }}>
                <div className="section-content animate-in">
                    <h2>see you there.</h2>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-section" style={{ paddingTop: '0px' }}>
                <div className="section-content animate-in">
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name *</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>Last Name *</label>
                                <input type="text" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email *</label>
                            <input type="email" required />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="tel" />
                        </div>
                        <div className="form-group">
                            <label>Message *</label>
                            <textarea required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Next</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Home;
