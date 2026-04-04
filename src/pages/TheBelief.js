import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import './TheBelief.css';

function TheBelief() {
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
            {/* Hero Section */}
            <section
                ref={(el) => (sectionRefs.current[0] = el)}
                className="hero-section loaded"
                style={{
                    backgroundImage: `url(${getImageUrl('beliefHero')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
            </section>

            {/* Split Section - Heading LEFT, Text RIGHT */}
            <section className="split-section how-we-live-section">
                <div className="split-left how-we-live-heading">
                    <div className="animate-in">
                        <h2>THE SCRIPTURES</h2>
                    </div>
                </div>
                <div className="split-right">
                    <div className="split-content animate-in">
                        <p>
                            We believe in the scriptures of the Old and New Testaments in their original writing as fully inspired by God, and accept them as the final authority for faith and life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Section - Forest Road */}
            <section
                ref={(el) => (sectionRefs.current[2] = el)}
                className="image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('beliefSection1')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[2]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Split Section - Heading RIGHT, Content LEFT */}
            <section className="split-section mission-section">
                <div className="split-right mission-heading">
                    <div
                        className="animate-in"
                    >
                        <h2>THE CHURCH</h2>
                    </div>
                </div>
                <div className="split-left">
                    <div
                        className="split-content animate-in"
                    >
                        <p>
                            We believe that the true church comprises all who have been justified by God's grace through faith alone in Christ alone. They are united by the Holy Spirit in the body of Christ, of which He is the Head. The true church is manifest in local churches, whose membership should be composed only of believers. The Lord Jesus mandated two ordinances, baptism and the Lord's Supper, which are to be observed by the church till the end of the age. For the church to function as the body of Christ, every member must be an active part of a local church.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Section - Mountain Road */}
            <section
                ref={(el) => (sectionRefs.current[4] = el)}
                className="image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('beliefSection2')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[4]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Split Section - Heading LEFT, Text RIGHT */}
            <section className="split-section how-we-live-section">
                <div className="split-left how-we-live-heading">
                    <div
                        className="animate-in"
                    >
                        <h2>THE FALL<br /> &<br />SALVATION OF MAN</h2>
                    </div>
                </div>
                <div className="split-right">
                    <div
                        className="split-content animate-in"
                    >
                        <p>
                            We believe that God created man in His image, that man sinned and thereby incurred the penalty of death, physical and spiritual. We believe that all human beings inherit a sinful nature which issues in actual transgression involving personal guilt; that man is totally depraved, and, of himself, utterly unable to remedy his lost condition. We believe that all who repent of their sin and receive the Lord Jesus Christ by faith are born again of the Holy Spirit and thereby become children of God. We believe that all the redeemed, once saved, are kept by God's power and are thus secure in Christ forever. We believe that it is the privilege of believers to rejoice in the assurance of their salvation through the testimony of God's Word.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Section */}
            <section
                ref={(el) => (sectionRefs.current[5] = el)}
                className="image-section team-7-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('beliefSection3')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[5]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Split Section - Heading RIGHT, Content LEFT */}
            <section className="split-section mission-section">
                <div className="split-right mission-heading">
                    <div
                        className="animate-in"
                    >
                        <h2>THE GODHEAD</h2>
                    </div>
                </div>
                <div className="split-left">
                    <div
                        className="split-content animate-in"
                    >
                        <p>
                            We believe in one God, Creator of all things, holy, infinitely perfect, and eternally existing in a loving unity of three equally divine Persons: the Father, the Son and the Holy Spirit. Having limitless knowledge and sovereign power, God has graciously purposed from eternity to redeem a people for Himself and to make all things new for His own glory.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Section */}
            <section
                ref={(el) => (sectionRefs.current[6] = el)}
                className="image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('beliefSection4')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[6]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Split Section - Heading LEFT, Text RIGHT */}
            <section className="split-section how-we-live-section">
                <div className="split-left how-we-live-heading">
                    <div
                        className="animate-in"
                    >
                        <h2>THE CHRISTIAN<br />LIVING</h2>
                    </div>
                </div>
                <div className="split-right">
                    <div
                        className="split-content animate-in"
                    >
                        <p>
                            We believe that the ascended Christ has given various ministries or ministers to the Church to bring all believers to the place of Christian maturity in understanding the truth, the performance and the function of the ministry. We believe that God's justifying grace must not be separated from His sanctifying power and purpose. God commands us to love Him supremely and others sacrificially, and to live out our faith with care for one another, compassion toward the poor and justice for the oppressed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Section - Forest */}
            <section
                ref={(el) => (sectionRefs.current[7] = el)}
                className="image-section loaded"
            >
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('beliefSection5')})`,
                        transform: `translate3d(0, ${(scrollY - (sectionRefs.current[7]?.offsetTop || 0)) * 0.3}px, 0)`
                    }}
                />
            </section>

            {/* Split Section - Heading RIGHT, Text LEFT */}
            <section className="split-section mission-section">
                <div className="split-right mission-heading">
                    <div
                        className="animate-in"
                    >
                        <h2>THE PERSON <br />&<br /> WORKOF JESUS CHRIST</h2>
                    </div>
                </div>
                <div className="split-left">
                    <div
                        className="split-content animate-in"
                    >
                        <p>
                            We believe that Jesus Christ is God incarnate, fully God and fully man, one person in two natures. We believe that Jesus was conceived through the Holy Spirit and born of the virgin Mary. He lived a sinless life, was crucified under Pontius Pilate, arose bodily from the dead, ascended into heaven and sits at the right hand of God the Father as our High Priest and Advocate. We believe that Jesus Christ, as our representative and substitute, shed His blood on the cross as the perfect, all-sufficient sacrifice for our sins. His atoning death and victorious resurrection constitute the only grounds for salvation.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default TheBelief;
