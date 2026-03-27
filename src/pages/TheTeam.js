import React, { useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';
import './TheTeam.css';

function TheTeam() {
    const [expandedMember, setExpandedMember] = useState(null);

    const toggleMember = (id) => {
        setExpandedMember(expandedMember === id ? null : id);
    };

    const leadershipTeam = [
        {
            id: 1,
            image: getImageUrl('teamLeader1'),
            name: 'Noel and Geraldine',
            description: 'Noel and Geraldine Wienand are the founding apostolic leaders and spiritual parents of The Way. With decades of ministry experience across multiple continents, they carry a deep passion for church planting, leadership development, and seeing the gospel transform communities.',
            expandedBio: 'Noel and Geraldine have spent over 30 years in full-time ministry, planting churches, training leaders, and establishing apostolic networks across Europe, Africa, and beyond. Their ministry philosophy is rooted in relational discipleship, authentic community, and empowering local leaders to fulfill their God-given calling. They believe that the Church is not built through programs or platforms, but through people who are willing to lay down their lives for the sake of the gospel.'
        },
        {
            id: 2,
            image: getImageUrl('teamLeader2'),
            name: 'Heath and Leah',
            description: 'Heath and Leah are the founding elders and planting family of The Way in Cardiff. Their journey to this moment has been shaped by years of faithful ministry, deep personal loss, and the sustaining grace of God.',
            expandedBio: 'Heath and Leah have walked through seasons of both joy and sorrow, and it is in these places that their faith has been refined and their calling clarified. They understand what it means to trust God when the way forward is unclear, to hold onto hope when circumstances seem impossible, and to believe that God is faithful even when the outcome is not yet visible.'
        },
        {
            id: 3,
            image: getImageUrl('teamMember1'),
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
            {/* Hero Section */}
            <section
                className="hero-section loaded"
                style={{
                    backgroundImage: `url(${getImageUrl('teamHero')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
            </section>

            {/* Leadership Team Header */}
            <section className="leadership-team-section">
                <div className="section-content animate-in">
                    <div className="leadership-header">
                        <div className="leadership-text">
                            <h2>Leadership Team</h2>
                            <p>
                                Our leadership team is driven by a shared passion to tell the gospel story in the four corners of the globe, invest in leadership growth and development, and plant and strengthen healthy, multiplying, Jesus-loving communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team Members - Split Sections */}
            {leadershipTeam.map((member, index) => (
                <section key={member.id} className={`split-section ${index % 2 === 0 ? 'image-right-section' : 'image-left-section'}`}>
                    {index % 2 === 0 ? (
                        <>
                            <div className="split-left">
                                <div className="split-content animate-in">
                                    <p>{member.description}</p>
                                </div>
                            </div>
                            <div className="split-right team-image-side">
                                <div className="team-split-image-wrapper">
                                    <img src={member.image} alt={member.name} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="split-left team-image-side">
                                <div className="team-split-image-wrapper">
                                    <img src={member.image} alt={member.name} />
                                </div>
                            </div>
                            <div className="split-right">
                                <div className="split-content animate-in">
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        </>
                    )}
                </section>
            ))}

            {/* Team Images Grid - 6 images in 3x2 grid */}
            <section className="team-grid-section-wrapper">
                <div className="section-content">
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
                    className="section-content animate-in"
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
