import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';
import './TheTeam.css';

function TheTeam() {
    const [visibleContent, setVisibleContent] = useState(new Set());
    const [expandedMember, setExpandedMember] = useState(null);
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

    const toggleMember = (id) => {
        setExpandedMember(expandedMember === id ? null : id);
    };

    const leadershipTeam = [
        {
            id: 1,
            image: getImageUrl('teamMember1'),
            name: 'Chris & Meryl Wienand',
            description: 'Chris and Meryl Wienand are the founding apostolic leaders and spiritual parents of The Way. With decades of ministry experience across multiple continents, they carry a deep passion for church planting, leadership development, and seeing the gospel transform communities.',
            expandedBio: 'Chris and Meryl have spent over 30 years in full-time ministry, planting churches, training leaders, and establishing apostolic networks across Europe, Africa, and beyond. Their ministry philosophy is rooted in relational discipleship, authentic community, and empowering local leaders to fulfill their God-given calling. They believe that the Church is not built through programs or platforms, but through people who are willing to lay down their lives for the sake of the gospel.'
        },
        {
            id: 2,
            image: getImageUrl('teamMember2'),
            name: 'Noel & Geraldine',
            description: 'Noel and Geraldine are the founding elders and planting family of The Way in Cardiff. Their journey to this moment has been shaped by years of faithful ministry, deep personal loss, and the sustaining grace of God.',
            expandedBio: 'Noel and Geraldine have walked through seasons of both joy and sorrow, and it is in these places that their faith has been refined and their calling clarified. They understand what it means to trust God when the way forward is unclear, to hold onto hope when circumstances seem impossible, and to believe that God is faithful even when the outcome is not yet visible.'
        },
        {
            id: 3,
            image: getImageUrl('teamMember3'),
            name: 'Heath & Leah',
            description: 'Heath and Leah serve alongside Noel and Geraldine in co-eldership and apostolic oversight. They bring wisdom, accountability, and shared discernment to the leadership team.',
            expandedBio: 'Heath and Leah have been in ministry for many years, serving in various leadership capacities within the apostolic network. They understand the importance of healthy leadership structures, mutual accountability, and the biblical pattern of shared authority.'
        }
    ];

    const teamMembers = [
        {
            id: 4,
            image: getImageUrl('teamMember4'),
            name: 'Team Member 1',
            description: 'Brief description about this team member and their role in the church community.'
        },
        {
            id: 5,
            image: getImageUrl('teamMember1'),
            name: 'Team Member 2',
            description: 'Brief description about this team member and their role in the church community.'
        },
        {
            id: 6,
            image: getImageUrl('teamMember2'),
            name: 'Team Member 3',
            description: 'Brief description about this team member and their role in the church community.'
        },
        {
            id: 7,
            image: getImageUrl('teamMember3'),
            name: 'Team Member 4',
            description: 'Brief description about this team member and their role in the church community.'
        },
        {
            id: 8,
            image: getImageUrl('teamMember4'),
            name: 'Team Member 5',
            description: 'Brief description about this team member and their role in the church community.'
        },
        {
            id: 9,
            image: getImageUrl('teamMember1'),
            name: 'Team Member 6',
            description: 'Brief description about this team member and their role in the church community.'
        }
    ];

    return (
        <div className="home-page">
            {/* Section 1 - About Us (Light Blue Background) */}
            <section className="team-about-section">
                <div
                    ref={(el) => (contentRefs.current[0] = el)}
                    data-content="0"
                    className={`section-content ${visibleContent.has('0') ? 'animate-in' : ''}`}
                >
                    <h1>About Us</h1>
                    <p className="subtitle">Finding Inspiration in Every Turn</p>
                    <p className="description">
                        This is your About Page. This space is a great opportunity to give a full background on who you are, what you do and what your website has to offer. Double click on the text box to start editing your content and make sure to add all the relevant details you want site visitors to know.
                    </p>

                    {/* Hero Image */}
                    <div className="team-hero-image">
                        <img
                            src={getImageUrl('teamHero')}
                            alt="The Team"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2 - Our Story (Light Blue Background) */}
            <section className="content-section">
                <div
                    ref={(el) => (contentRefs.current[1] = el)}
                    data-content="1"
                    className={`section-content ${visibleContent.has('1') ? 'animate-in' : ''}`}
                >
                    <h2>Our Story</h2>
                    <div className="horizontal-line"></div>
                    <p>
                        Every website has a story, and your visitors want to hear yours. This space is a great opportunity to give a full background on who you are, what your team does, and what your site has to offer. Double click on the text box to start editing your content and make sure to add all the relevant details you want site visitors to know.
                    </p>
                    <p>
                        If you're a business, talk about how you started and share your professional journey. Explain your core values, your commitment to customers, and how you stand out from the crowd. Add a photo, gallery, or video for even more engagement.
                    </p>
                </div>
            </section>

            {/* Section 3 - Leadership Team */}
            <section className="leadership-team-section">
                <div
                    ref={(el) => (contentRefs.current[2] = el)}
                    data-content="2"
                    className={`section-content ${visibleContent.has('2') ? 'animate-in' : ''}`}
                >
                    <div className="leadership-header">
                        <div className="leadership-text">
                            <h2>Leadership Team</h2>
                            <p>
                                Our leadership team is driven by a shared passion to tell the gospel story in the four corners of the globe, invest in leadership growth and development, and plant and strengthen healthy, multiplying, Jesus-loving communities.
                            </p>
                        </div>
                    </div>

                    <div className="team-members-list">
                        {leadershipTeam.map((member, index) => (
                            <div
                                key={member.id}
                                className={`team-member-item ${expandedMember === member.id ? 'expanded' : ''} ${index % 2 === 0 ? 'image-right' : 'image-left'}`}
                            >
                                <div className="team-member-row">
                                    {index % 2 === 1 && (
                                        <div className="team-member-image-wrapper">
                                            <div className="team-member-photo">
                                                <img src={member.image} alt={member.name} />
                                            </div>
                                            <button
                                                className="team-member-expand-btn"
                                                onClick={() => toggleMember(member.id)}
                                                aria-expanded={expandedMember === member.id}
                                            >
                                                <span className="expand-icon">
                                                    {expandedMember === member.id ? '−' : '+'}
                                                </span>
                                                <span className="expand-name">{member.name}</span>
                                            </button>
                                        </div>
                                    )}
                                    <div className="team-member-content">
                                        <p>{member.description}</p>
                                    </div>
                                    {index % 2 === 0 && (
                                        <div className="team-member-image-wrapper">
                                            <div className="team-member-photo">
                                                <img src={member.image} alt={member.name} />
                                            </div>
                                            <button
                                                className="team-member-expand-btn"
                                                onClick={() => toggleMember(member.id)}
                                                aria-expanded={expandedMember === member.id}
                                            >
                                                <span className="expand-icon">
                                                    {expandedMember === member.id ? '−' : '+'}
                                                </span>
                                                <span className="expand-name">{member.name}</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                                {expandedMember === member.id && (
                                    <div className="team-member-details">
                                        <p>{member.expandedBio}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Team Images Grid - 6 images in 3x2 grid */}
                    <div className="team-images-grid">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="team-image-item">
                                <img src={member.image} alt={member.name} />
                                <button
                                    className="team-image-expand-btn"
                                    onClick={() => toggleMember(member.id)}
                                    aria-expanded={expandedMember === member.id}
                                >
                                    <span className="expand-icon">
                                        {expandedMember === member.id ? '−' : '+'}
                                    </span>
                                    <span className="expand-name">{member.name}</span>
                                </button>
                                {expandedMember === member.id && (
                                    <div className="team-image-description">
                                        <p>{member.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4 - Our Clients (Light Blue Background) */}
            <section className="content-section">
                <div
                    ref={(el) => (contentRefs.current[7] = el)}
                    data-content="7"
                    className={`section-content ${visibleContent.has('7') ? 'animate-in' : ''}`}
                >
                    <h2>Our Clients</h2>
                    <div className="horizontal-line"></div>

                    <div className="clients-grid">
                        <div className="client-logo">
                            <img src={getImageUrl('clientLogo2')} alt="Client 1" />
                        </div>
                        <div className="client-logo">
                            <img src={getImageUrl('clientLogo1')} alt="Client 2" />
                        </div>
                        <div className="client-logo">
                            <img src={getImageUrl('clientLogo3')} alt="Client 3" />
                        </div>
                        <div className="client-logo">
                            <img src={getImageUrl('clientLogo4')} alt="Client 4" />
                        </div>
                        <div className="client-logo">
                            <img src={getImageUrl('clientLogo5')} alt="Client 5" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TheTeam;
