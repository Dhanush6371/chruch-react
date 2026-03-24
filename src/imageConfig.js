// Image configuration with organized naming convention
// All images follow pattern: [page]-[number].[extension]

export const images = {
    // Logo
    logo: '/images-new/logo.png',

    // Home Page Images (home-1 to home-7)
    home1: '/images-new/home-1.jpg',
    home2: '/images-new/home-2.jpg',
    home3: '/images-new/home-3.jpg',
    home4: '/images-new/home-4.jpg',
    home5: '/images-new/home-5.jpg',
    home6: '/images-new/home-6.jpg',  // dark forest
    home7: '/images-new/home-7.jpg',  // mountain road

    // Story Page Images (story-1 to story-4)
    story1: '/images-new/story-1.jpg',      // london building
    story2: '/images-new/story-2.jpg',      // dark forest
    story3: '/images-new/story-3.jpg',      // mountain road
    story4: '/images-new/story-4.jpg',      // sunset road

    // Belief Page Images (belief-1 to belief-4)
    belief1: '/images-new/belief-1.jpg',    // hero
    belief2: '/images-new/belief-2.jpg',    // video poster
    belief3: '/images-new/belief-3.jpg',    // forest aerial
    belief4: '/images-new/belief-4.jpg',    // forest road aerial

    // Invitation Page Images (invitation-1 to invitation-6)
    invitation1: '/images-new/invitation-1.jpg',  // hero
    invitation2: '/images-new/invitation-2.jpg',  // video poster
    invitation3: '/images-new/invitation-3.jpg',  // image 1
    invitation4: '/images-new/invitation-4.jpg',  // image 2
    invitation5: '/images-new/invitation-5.jpeg', // image 3 (under CONNECT)
    invitation6: '/images-new/invitation-6.jpeg', // image 4 (under SERVE)

    // Team Page Images (team-1 to team-13)
    team1: '/images-new/team-1.jpg',    // hero
    team2: '/images-new/team-2.jpg',    // bruno
    team3: '/images-new/team-3.jpg',    // jinhui
    team4: '/images-new/team-4.jpg',    // johntower
    team5: '/images-new/team-5.jpg',    // matt-fox
    team6: '/images-new/team-6.jpg',    // saagar
    team7: '/images-new/team-7.jpg',    // sheikh
    team8: '/images-new/team-8.jpeg',   // team group 1
    team9: '/images-new/team-9.jpeg',   // team group 2
    team10: '/images-new/team-10.jpg',  // team member 1
    team11: '/images-new/team-11.jpg',  // team member 2
    team12: '/images-new/team-12.jpg',  // team member 3
    team13: '/images-new/team-13.jpg',  // team member 4

    // Other Images (kept original names)
    cityTraffic: '/images-new/city-traffic.jpg',
    bigBen: '/images-new/big-ben.jpg',
    giveHeroVideoPoster: '/images-new/give-hero-video-poster.jpg',

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

    // Legacy aliases for backward compatibility (will be removed after migration)
    hero1: '/images-new/home-1.jpg',
    hero2: '/images-new/home-2.jpg',
    hero3: '/images-new/home-3.jpg',
    hero4: '/images-new/home-4.jpg',
    hero5: '/images-new/home-5.jpg',
    darkForest: '/images-new/home-6.jpg',
    mountainRoad: '/images-new/home-7.jpg',
    londonBuilding: '/images-new/story-1.jpg',
    sunsetRoad: '/images-new/story-4.jpg',
    beliefHero: '/images-new/belief-1.jpg',
    beliefVideoPoster: '/images-new/belief-2.jpg',
    forestAerial: '/images-new/belief-3.jpg',
    forestRoadAerial: '/images-new/belief-4.jpg',
    invitationHero: '/images-new/invitation-1.jpg',
    invitationVideoPoster: '/images-new/invitation-2.jpg',
    teamHero: '/images-new/team-1.jpg',
    bruno: '/images-new/team-2.jpg',
    jinhui: '/images-new/team-3.jpg',
    johntower: '/images-new/team-4.jpg',
    mattFox: '/images-new/team-5.jpg',
    saagar: '/images-new/team-6.jpg',
    sheikh: '/images-new/team-7.jpg',
    teamMember1: '/images-new/team-10.jpg',
    teamMember2: '/images-new/team-11.jpg',
    teamMember3: '/images-new/team-12.jpg',
    teamMember4: '/images-new/team-13.jpg',
};

// Simple getter function
export const getImageUrl = (key) => {
    return images[key] || '';
};
