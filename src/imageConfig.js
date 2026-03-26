// Image configuration with organized naming convention
// Images are named by page and order of appearance

export const images = {
    // Logo
    logo: '/images-new/logo.png',

    // Home Page Images (in order)
    homeHeroVideo: '/images-new/home-hero-video.mp4',
    homeSection1: '/images-new/home-section-1.jpg',
    homeSection2: '/images-new/home-section-2.jpg',
    homeSection3: '/images-new/home-section-3.jpg',
    homeSection4: '/images-new/home-section-4.jpg',

    // Belief Page Images (in order)
    beliefHero: '/images-new/belief-hero.jpg',
    beliefSection1: '/images-new/belief-section-1.jpg',
    beliefSection2: '/images-new/belief-section-2.jpg',
    beliefSection3: '/images-new/belief-section-3.jpg',
    beliefSection4: '/images-new/belief-section-4.jpg',
    beliefSection5: '/images-new/belief-section-5.jpg',
    beliefSection6: '/images-new/belief-section-6.jpg',

    // Invitation Page Images (in order)
    invitationHero: '/images-new/invitation-hero.jpg',
    invitationSection1: '/images-new/invitation-section-1.jpeg',
    invitationSection2: '/images-new/invitation-section-2.jpeg',

    // Team Page Images (in order)
    teamHero: '/images-new/team-hero.jpg',
    teamLeader1: '/images-new/team-leader-1.jpeg',
    teamLeader2: '/images-new/team-leader-2.jpeg',
    teamMember1: '/images-new/team-member-1.jpg',
    teamMember2: '/images-new/team-member-2.jpg',
    teamMember3: '/images-new/team-member-3.jpg',
    teamMember4: '/images-new/team-member-4.jpg',

    // Story Page Images (in order)
    storySection1: '/images-new/story-1.jpg',
    storySection2: '/images-new/story-2.jpg',
    storySection3: '/images-new/story-3.jpg',
    storySection4: '/images-new/story-4.jpg',

    // Social Icons
    iconYoutube: '/icons/youtube.png',
    iconInstagram: '/icons/instagram.png',
    iconFacebook: '/icons/facebook.png',
    iconTiktok: '/icons/tiktok.png',
    iconEnvelope: '/icons/envelope.png',
    iconPhone: '/icons/phone.png',

    // Client Logos
    clientLogo1: '/images-new/client-logo-1.png',
    clientLogo2: '/images-new/client-logo-2.png',
    clientLogo3: '/images-new/client-logo-3.png',
    clientLogo4: '/images-new/client-logo-4.png',
    clientLogo5: '/images-new/client-logo-5.png',
};

// Responsive image getter function
// Returns desktop (16:9) or mobile (3:4) version based on screen width
export const getImageUrl = (key, forceMobile = false) => {
    const basePath = images[key] || '';

    // Don't apply responsive logic to icons, logos, or client logos
    if (!basePath || basePath.includes('/icons/') || key.includes('icon') || key.includes('Logo') || key === 'logo') {
        return basePath;
    }

    // Check if we should use mobile version
    const isMobile = forceMobile || (typeof window !== 'undefined' && window.innerWidth <= 768);

    // Replace /images-new/ with /images-desktop/ or /images-mobile/
    if (isMobile) {
        return basePath.replace('/images-new/', '/images-mobile/');
    } else {
        return basePath.replace('/images-new/', '/images-desktop/');
    }
};

// Get responsive image URL with window resize support
export const getResponsiveImageUrl = (key) => {
    if (typeof window === 'undefined') {
        return images[key] || '';
    }
    return getImageUrl(key);
};
