import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import '../pages/Home.css';
import './TheTeam.css';

function TheTeam() {
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

    const teamMembers = [
        {
            id: 1,
            image: getImageUrl('teamMember1'),
            name: 'Team Member 1',
            role: 'Position',
            bio: 'Brief description about this team member and their role in the church.',
            social: {
                facebook: '#',
                twitter: '#',
                linkedin: '#'
            }
        },
        {
            id: 2,
            image: getImageUrl('teamMember2'),
            name: 'Team Member 2',
            role: 'Position',
            bio: 'Brief description about this team member and their role in the church.',
            social: {
                facebook: '#',
                twitter: '#',
                linkedin: '#'
            }
        },
        {
            id: 3,
            image: getImageUrl('teamMember3'),
            name: 'Team Member 3',
            role: 'Position',
            bio: 'Brief description about this team member and their role in the church.',
            social: {
                facebook: '#',
                twitter: '#',
                linkedin: '#'
            }
        },
        {
            id: 4,
            image: getImageUrl('teamMember4'),
            name: 'Team Member 4',
            role: 'Position',
            bio: 'Brief description about this team member and their role in the church.',
            social: {
                facebook: '#',
                twitter: '#',
                linkedin: '#'
            }
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

            {/* Section 3 - Meet The Team (Light Blue Background) */}
            <section className="team-members-section">
                <div
                    ref={(el) => (contentRefs.current[2] = el)}
                    data-content="2"
                    className={`section-content ${visibleContent.has('2') ? 'animate-in' : ''}`}
                >
                    <h2>Meet The Team</h2>
                    <div className="horizontal-line"></div>

                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.id}
                                ref={(el) => (contentRefs.current[3 + index] = el)}
                                data-content={`${3 + index}`}
                                className={`team-member-card ${visibleContent.has(`${3 + index}`) ? 'animate-in' : ''}`}
                            >
                                <div className="team-member-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="team-member-info">
                                    <h3>{member.name}</h3>
                                    <p className="team-member-role">{member.role}</p>
                                    <p className="team-member-bio">{member.bio}</p>
                                    <div className="team-member-social">
                                        <a href={member.social.facebook} aria-label="Facebook">
                                            <img src={getImageUrl('facebook')} alt="Facebook" />
                                        </a>
                                        <a href={member.social.twitter} aria-label="Twitter">
                                            <img src={getImageUrl('envelope')} alt="Twitter" />
                                        </a>
                                        <a href={member.social.linkedin} aria-label="LinkedIn">
                                            <img src={getImageUrl('phone')} alt="LinkedIn" />
                                        </a>
                                    </div>
                                </div>
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
                            <img src={getImageUrl('decorative2')} alt="Client 1" />
                        </div>
                        <div className="client-logo">
                            <img src={getImageUrl('decorative1')} alt="Client 2" />
                        </div>
                        <div className="client-logo">
                            <img src={getImageUrl('decorative3')} alt="Client 3" />
                        </div>
                        <div className="client-logo">
                            <img src={getImageUrl('decorative4')} alt="Client 4" />
                        </div>
                        <div className="client-logo">
                            <img src={getImageUrl('decorative5')} alt="Client 5" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TheTeam;
