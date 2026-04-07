import React, { useEffect, useRef } from 'react';
import { getImageUrl } from '../imageConfig';
import './TheTeam.css';

function TheTeam() {
    const [scrollY, setScrollY] = React.useState(0);
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

    const leadershipTeam = [
        {
            id: 1,
            image: getImageUrl('teamLeader1'),
            name: 'Noel and Geraldine',
            title: 'Noel & Geraldine - The Way',
            subtitle: 'Lead Eldership & Planting Family',
            description: 'Noel and Geraldine are the founding leaders and church planters of The Way. Right after their marriage, they sensed a clear call from God to be equipped for church planting, which led them to Dubai, where they served faithfully at Well of Life Church for nearly a decade. During this time, they served across various ministries, including eldership. They now carry their personal journey, ministry experience, and family into the work God is doing through planting and leading The Way, trusting Him to build His Church and reach the people of Cardiff, Wales, the UK and Europe with the hope of the gospel. Their family story holds both deep loss and living hope. In 2022, they welcomed their daughter, Ella Hadassah, who lived for ten precious days. God later reaffirmed His faithfulness through the birth of their son, Judah, a joyful reminder of God\'s kindness and restoration.',
        },
        {
            id: 2,
            image: getImageUrl('teamLeader2'),
            name: 'Heath and Leah',
            title: 'Heath & Leah Van Staden - Liberty Church',
            subtitle: 'Apostolic Oversight & Co-Eldership - Liberty Church',
            description: 'Heath and Leah Van Staden lead Liberty Church in Newport, Wales. They carry a deep passion to see people fully alive in Christ and growing into the men and women God created them to be. Together with their three children, they serve faithfully both locally and internationally, investing into churches and leaders across the UK, Nepal, Cyprus, Greece, and the Baltic region. Heath and Leah met Noel and Geraldine in 2021, and from the very beginning there was a strong sense of Kingdom friendship and shared vision. What started as relationship quickly grew into a desire to serve God\'s purposes together in Europe. The Way is one of the fruits of that partnership. They now walk closely with Noel and Geraldine, as an apostolic oversight and co-eldership couple to The Way. Their role is to offer wisdom, encouragement, prayer support, and be a trusted voice as Noel and Geraldine lead and pioneer. Together they are helping to establish a healthy biblical model of a local church that is both autonomous and deeply connected through apostolic relationship.',
        },
        {
            id: 3,
            image: getImageUrl('teamLeader3'),
            name: 'Rob & Linda Hutton',
            title: 'Rob & Linda Hutton - Well of Life Church',
            subtitle: 'Apostolic Oversight',
            description: 'Rob and Linda Hutton lead Well of Life Church in Dubai, where Noel and Geraldine were trained, formed, released, and planted from. Married for over 30 years, Rob and Linda have transitioned from professional careers into full-time ministry, led two churches, raised three amazing children, and continue to serve with joy and faithfulness. The unique location and nature of Dubai has made Well of Life a natural kingdom gateway to the nations, shaping and sending leaders across the world. As apostolic oversight Rob and Linda remain an integral part of The Way\'s journey, offering wisdom, relational support, and ongoing apostolic partnership as Noel and Geraldine lead and plant in Cardiff and expand the kingdom of God in Europe.',
        }
    ];



    return (
        <div className="home-page team-page">
            {/* Hero Section */}
            <section
                ref={(el) => (sectionRefs.current[0] = el)}
                className="hero-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('teamHero')})`,
                        transform: `translate3d(0, ${scrollY * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Leadership Team Header */}
            <section className="leadership-team-section">
                <div className="section-content animate-in">
                    <div className="leadership-header">
                        <div className="leadership-text">
                            <h2>Leadership Team</h2>
                            <p>
                                We believe a healthy church is called to be both local and autonomous, deeply rooted in its context while remaining relationally connected through apostolic partnership. These relationships provide prayerful covering, accountability, shared discernment, and encouragement, helping the church remain faithful to Scripture, responsive to the Holy Spirit, and aligned with God’s mission across generations and nations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team Members - Split Sections */}
            {leadershipTeam.map((member, index) => (
                <section key={member.id} className={`split-section team-leader-section ${index % 2 === 0 ? 'image-left-section' : 'image-right-section'}`}>
                    <div className="team-leader-container">
                        <div className="team-leader-top">
                            {index % 2 === 0 ? (
                                <>
                                    <div className="team-image-side">
                                        <div className="team-split-image-wrapper">
                                            <img src={member.image} alt={member.name} />
                                            <div className="team-image-overlay">
                                                <h3>{member.title}</h3>
                                                <p>{member.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-text-side">
                                        <div className="split-content animate-in">
                                            <p>{member.description}</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="team-text-side">
                                        <div className="split-content animate-in">
                                            <p>{member.description}</p>
                                        </div>
                                    </div>
                                    <div className="team-image-side">
                                        <div className="team-split-image-wrapper">
                                            <img src={member.image} alt={member.name} />
                                            <div className="team-image-overlay">
                                                <h3>{member.title}</h3>
                                                <p>{member.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            ))}

            {/* Apostolic Household & Partnership Section */}
            <section className="apostolic-section">
                <div className="section-content animate-in">
                    <h2>Apostolic Household & Partnership</h2>
                    <p>
                        The Way is locally led by Noel and Geraldine, while joyfully walking in apostolic relationship and accountability with trusted leaders from Genesis Collective, a team of seasoned leaders who support pioneers, and help strengthen healthy New Testament communities. To know more about Genesis Collective, please click here: <a href="https://www.genesiscollective.org" target="_blank" rel="noopener noreferrer">https://www.genesiscollective.org</a>
                    </p>

                </div>
            </section>


        </div>
    );
}

export default TheTeam;
