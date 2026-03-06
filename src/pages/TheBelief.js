import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../imageConfig';
import './TheBelief.css';

function TheBelief() {
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
            {/* Hero Section */}
            <section
                ref={(el) => (sectionRefs.current[0] = el)}
                data-index="0"
                className={`hero-section ${loadedSections.has('0') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('0') ? `url(${getImageUrl('beliefHero')})` : 'none',
                    backgroundPosition: 'center top'
                }}
            >
            </section>

            {/* Split Section - Image LEFT, Text RIGHT */}
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
                        <h2>THE SCRIPTURES</h2>
                        <p>
                            We believe in the scriptures of the Old and New Testaments in their original writing as fully inspired by God, and accept them as the final authority for faith and life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Section - Forest Road */}
            <section
                ref={(el) => (sectionRefs.current[2] = el)}
                data-index="2"
                className={`image-section ${loadedSections.has('2') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('2') ? `url(${getImageUrl('darkForest')})` : 'none'
                }}
            >
            </section>

            {/* Split Section - Text LEFT, Image RIGHT */}
            <section className="split-section">
                <div className="split-left">
                    <div
                        ref={(el) => (contentRefs.current[1] = el)}
                        data-content="1"
                        className={`split-content ${visibleContent.has('1') ? 'animate-in' : ''}`}
                    >
                        <h2>THE CHURCH</h2>
                        <p>
                            We believe that the true church comprises all who have been justified by God's grace through faith alone in Christ alone. They are united by the Holy Spirit in the body of Christ, of which He is the Head. The true church is manifest in local churches, whose membership should be composed only of believers. The Lord Jesus mandated two ordinances, baptism and the Lord's Supper, which are to be observed by the church till the end of the age. For the church to function as the body of Christ, every member must be an active part of a local church.
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

            {/* Image Section - Mountain Road */}
            <section
                ref={(el) => (sectionRefs.current[4] = el)}
                data-index="4"
                className={`image-section ${loadedSections.has('4') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('4') ? `url(${getImageUrl('mountainRoad')})` : 'none'
                }}
            >
            </section>

            {/* Split Section - Text LEFT, Heading RIGHT (Black) */}
            <section className="split-section">
                <div className="split-left">
                    <div
                        ref={(el) => (contentRefs.current[2] = el)}
                        data-content="2"
                        className={`split-content ${visibleContent.has('2') ? 'animate-in' : ''}`}
                    >
                        <p>
                            We believe that God created man in His image, that man sinned and thereby incurred the penalty of death, physical and spiritual. We believe that all human beings inherit a sinful nature which issues in actual transgression involving personal guilt; that man is totally depraved, and, of himself, utterly unable to remedy his lost condition. We believe that all who repent of their sin and receive the Lord Jesus Christ by faith are born again of the Holy Spirit and thereby become children of God. We believe that all the redeemed, once saved, are kept by God's power and are thus secure in Christ forever. We believe that it is the privilege of believers to rejoice in the assurance of their salvation through the testimony of God's Word.
                        </p>
                    </div>
                </div>
                <div className="split-right" style={{ backgroundColor: '#000000' }}>
                    <div
                        ref={(el) => (contentRefs.current[3] = el)}
                        data-content="3"
                        className={`split-content ${visibleContent.has('3') ? 'animate-in' : ''}`}
                    >
                        <h2 style={{ color: '#ffffff', textAlign: 'center' }}>THE FALL & SALVATION OF MAN</h2>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section
                ref={(el) => (sectionRefs.current[5] = el)}
                data-index="5"
                className={`image-section video-section ${loadedSections.has('5') ? 'loaded' : ''}`}
            >
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
                    <source src="https://video.wixstatic.com/video/11062b_901619a8201045b2973ebd0fef1ea8c1/720p/mp4/file.mp4" type="video/mp4" />
                    <source src="https://video.wixstatic.com/video/11062b_901619a8201045b2973ebd0fef1ea8c1/480p/mp4/file.mp4" type="video/mp4" />
                </video>
            </section>

            {/* Split Section - Text LEFT, Text RIGHT */}
            <section className="split-section">
                <div className="split-left">
                    <div
                        ref={(el) => (contentRefs.current[4] = el)}
                        data-content="4"
                        className={`split-content ${visibleContent.has('4') ? 'animate-in' : ''}`}
                    >
                        <h2>THE GODHEAD</h2>
                    </div>
                </div>
                <div className="split-right">
                    <div
                        ref={(el) => (contentRefs.current[5] = el)}
                        data-content="5"
                        className={`split-content ${visibleContent.has('5') ? 'animate-in' : ''}`}
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
                data-index="6"
                className={`image-section ${loadedSections.has('6') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('6') ? `url(${getImageUrl('sunsetRoad')})` : 'none'
                }}
            >
            </section>

            {/* Split Section - Text LEFT, Heading RIGHT (Black) */}
            <section className="split-section">
                <div className="split-left">
                    <div
                        ref={(el) => (contentRefs.current[6] = el)}
                        data-content="6"
                        className={`split-content ${visibleContent.has('6') ? 'animate-in' : ''}`}
                    >
                        <p>
                            We believe that the ascended Christ has given various ministries or ministers to the Church to bring all believers to the place of Christian maturity in understanding the truth, the performance and the function of the ministry. We believe that God's justifying grace must not be separated from His sanctifying power and purpose. God commands us to love Him supremely and others sacrificially, and to live out our faith with care for one another, compassion toward the poor and justice for the oppressed.
                        </p>
                    </div>
                </div>
                <div className="split-right" style={{ backgroundColor: '#000000' }}>
                    <div
                        ref={(el) => (contentRefs.current[7] = el)}
                        data-content="7"
                        className={`split-content ${visibleContent.has('7') ? 'animate-in' : ''}`}
                    >
                        <h2 style={{ color: '#ffffff', textAlign: 'center' }}>THE CHRISTIAN LIVING</h2>
                    </div>
                </div>
            </section>

            {/* Image Section - Forest */}
            <section
                ref={(el) => (sectionRefs.current[7] = el)}
                data-index="7"
                className={`image-section ${loadedSections.has('7') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('7') ? `url(${getImageUrl('forestAerial')})` : 'none'
                }}
            >
            </section>

            {/* Split Section with Background Image - Heading LEFT (Black), Text RIGHT */}
            <section
                ref={(el) => (sectionRefs.current[8] = el)}
                data-index="8"
                className={`split-section ${loadedSections.has('8') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('8') ? `url(${getImageUrl('sunsetRoad')})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="split-left" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <div
                        ref={(el) => (contentRefs.current[8] = el)}
                        data-content="8"
                        className={`split-content ${visibleContent.has('8') ? 'animate-in' : ''}`}
                    >
                        <h2 style={{ color: '#ffffff', textAlign: 'center' }}>THE PERSON & WORK OF JESUS CHRIST</h2>
                    </div>
                </div>
                <div className="split-right" style={{ backgroundColor: 'rgba(232, 232, 245, 0.95)' }}>
                    <div
                        ref={(el) => (contentRefs.current[9] = el)}
                        data-content="9"
                        className={`split-content ${visibleContent.has('9') ? 'animate-in' : ''}`}
                    >
                        <p>
                            We believe that Jesus Christ is God incarnate, fully God and fully man, one person in two natures. We believe that Jesus was conceived through the Holy Spirit and born of the virgin Mary. He lived a sinless life, was crucified under Pontius Pilate, arose bodily from the dead, ascended into heaven and sits at the right hand of God the Father as our High Priest and Advocate. We believe that Jesus Christ, as our representative and substitute, shed His blood on the cross as the perfect, all-sufficient sacrifice for our sins. His atoning death and victorious resurrection constitute the only grounds for salvation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Section - Forest Road Aerial */}
            <section
                ref={(el) => (sectionRefs.current[9] = el)}
                data-index="9"
                className={`image-section ${loadedSections.has('9') ? 'loaded' : ''}`}
                style={{
                    backgroundImage: loadedSections.has('9') ? `url(${getImageUrl('forestRoadAerial')})` : 'none'
                }}
            >
            </section>

            {/* Split Section - Text LEFT, Text RIGHT */}
            <section className="split-section">
                <div className="split-left">
                    <div
                        ref={(el) => (contentRefs.current[10] = el)}
                        data-content="10"
                        className={`split-content ${visibleContent.has('10') ? 'animate-in' : ''}`}
                    >
                        <p>
                            We believe that the Holy Spirit, in all that He does, glorifies the Lord Jesus Christ. He convicts the world of its guilt. He regenerates sinners, and in Him they are baptized into union with Christ and adopted as heirs in the family of God. He also indwells, illuminates, guides, equips and empowers believers for Christ-like living and service.
                        </p>
                    </div>
                </div>
                <div className="split-right">
                    <div
                        ref={(el) => (contentRefs.current[11] = el)}
                        data-content="11"
                        className={`split-content ${visibleContent.has('11') ? 'animate-in' : ''}`}
                    >
                        <h2>THE PERSON & WORK OF THE HOLY SPIRIT</h2>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TheBelief;
