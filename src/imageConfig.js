// Image configuration with meaningful names
// Using local files for reliable loading

export const images = {
    // Logo
    logo: '/images-new/logo.png',

    // Home Page - Hero images
    hero1: '/images-new/home-hero-1.jpg',
    hero2: '/images-new/home-hero-2.jpg',
    hero3: '/images-new/home-hero-3.jpg',
    hero4: '/images-new/home-hero-4.jpg',
    hero5: '/images-new/home-hero-5.jpg',

    // Shared Images (used across multiple pages)
    cityTraffic: '/images-new/city-traffic.jpg',
    bigBen: '/images-new/big-ben.jpg',
    darkForest: '/images-new/dark-forest.jpg',
    londonBuilding: '/images-new/london-building.jpg',
    mountainRoad: '/images-new/mountain-road.jpg',
    sunsetRoad: '/images-new/sunset-road.jpg',

    // New unique images to replace repeated ones
    bruno: '/images-new/bruno.jpg',
    jinhui: '/images-new/jinhui.jpg',
    johntower: '/images-new/johntower.jpg',
    mattFox: '/images-new/matt-fox.jpg',
    saagar: '/images-new/saagar.jpg',
    sheikh: '/images-new/sheikh.jpg',

    // The Belief Page
    beliefHero: '/images-new/belief-hero.jpg',
    beliefVideoPoster: '/images-new/belief-video-poster.jpg',
    forestAerial: '/images-new/forest-aerial.jpg',
    forestRoadAerial: '/images-new/forest-road-aerial.jpg',

    // The Team Page
    teamHero: '/images-new/team-hero.jpg',
    teamMember1: '/images-new/team-member-1.jpg',
    teamMember2: '/images-new/team-member-2.jpg',
    teamMember3: '/images-new/team-member-3.jpg',
    teamMember4: '/images-new/team-member-4.jpg',

    // The Invitation Page
    invitationHero: '/images-new/invitation-hero.jpg',
    invitationVideoPoster: '/images-new/invitation-video-poster.jpg',

    // Give Page
    giveHeroVideoPoster: '/images-new/give-hero-video-poster.jpg',

    // Social Icons
    iconYoutube: '/icons/youtube.png',
    iconInstagram: '/icons/instagram.png',
    iconFacebook: '/icons/facebook.png',
    iconTiktok: '/icons/tiktok.png',
    iconEnvelope: '/icons/envelope.png',
    iconPhone: '/icons/phone.png',

    // Client Logos (decorative)
    clientLogo1: '/images-new/client-logo-1.png',
    clientLogo2: '/images-new/client-logo-2.png',
    clientLogo3: '/images-new/client-logo-3.png',
    clientLogo4: '/images-new/client-logo-4.png',
    clientLogo5: '/images-new/client-logo-5.png',
};

// Simple getter function
export const getImageUrl = (key) => {
    return images[key] || '';
};
