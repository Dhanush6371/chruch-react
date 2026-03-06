const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Setting up local media files...\n');
console.log('This will:');
console.log('1. Download all images from Wix CDN');
console.log('2. Download all videos from Wix CDN');
console.log('3. Update config files to use local paths');
console.log('4. Clean up old Wix folders\n');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Continue? (y/n): ', (answer) => {
    if (answer.toLowerCase() !== 'y') {
        console.log('Cancelled.');
        readline.close();
        process.exit(0);
    }

    readline.close();

    console.log('\n' + '='.repeat(60));
    console.log('Step 1: Downloading images...');
    console.log('='.repeat(60) + '\n');

    try {
        execSync('node download-images.js', { stdio: 'inherit' });
    } catch (err) {
        console.error('Error downloading images:', err.message);
    }

    console.log('\n' + '='.repeat(60));
    console.log('Step 2: Downloading videos...');
    console.log('='.repeat(60) + '\n');

    try {
        execSync('node download-videos.js', { stdio: 'inherit' });
    } catch (err) {
        console.error('Error downloading videos:', err.message);
    }

    console.log('\n' + '='.repeat(60));
    console.log('Step 3: Updating imageConfig.js...');
    console.log('='.repeat(60) + '\n');

    const imageConfigContent = `// Image configuration with meaningful names
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
    iconYoutube: '/images-new/icon-youtube.png',
    iconInstagram: '/images-new/icon-instagram.png',
    iconFacebook: '/images-new/icon-facebook.png',
    iconTiktok: '/images-new/icon-tiktok.png',
    iconEnvelope: '/images-new/icon-envelope.png',
    iconPhone: '/images-new/icon-phone.png',

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
`;

    fs.writeFileSync('src/imageConfig.js', imageConfigContent);
    console.log('✓ Updated imageConfig.js to use local paths');

    console.log('\n' + '='.repeat(60));
    console.log('Step 4: Updating videoConfig.js...');
    console.log('='.repeat(60) + '\n');

    const videoConfigContent = `// Video configuration with meaningful names
// Using local files for reliable loading

export const videos = {
    // The Belief Page - Main video
    beliefVideo: {
        id: '11062b_901619a8201045b2973ebd0fef1ea8c1',
        poster: 'beliefVideoPoster',
        sources: {
            hd: '/videos/belief-video-720p.mp4',
            sd: '/videos/belief-video-480p.mp4'
        }
    },

    // The Invitation Page - Connect video (also used in Give page)
    invitationVideo: {
        id: '11062b_3fc3608105274653a4675d6e30353973',
        poster: 'invitationVideoPoster',
        sources: {
            hd: '/videos/invitation-video-720p.mp4',
            sd: '/videos/invitation-video-480p.mp4'
        }
    },

    // Give Page - Hero video
    giveHeroVideo: {
        id: '11062b_e12e778250c54ec0aa0d967b228e9cc3',
        poster: 'giveHeroVideoPoster',
        sources: {
            hd: '/videos/give-hero-video-720p.mp4',
            sd: '/videos/give-hero-video-480p.mp4'
        }
    }
};

// Helper function to get video sources
export const getVideoSources = (key) => {
    return videos[key]?.sources || { hd: '', sd: '' };
};

// Helper function to get video poster from imageConfig
export const getVideoPoster = (key, getImageUrl) => {
    const posterKey = videos[key]?.poster;
    return posterKey ? getImageUrl(posterKey) : '';
};

// Helper function to get all video info
export const getVideo = (key) => {
    return videos[key] || null;
};
`;

    fs.writeFileSync('src/videoConfig.js', videoConfigContent);
    console.log('✓ Updated videoConfig.js to use local paths');

    console.log('\n' + '='.repeat(60));
    console.log('Step 5: Cleaning up old Wix folders...');
    console.log('='.repeat(60) + '\n');

    try {
        execSync('node cleanup-old-images.js', { stdio: 'inherit' });
    } catch (err) {
        console.error('Error cleaning up:', err.message);
    }

    console.log('\n' + '='.repeat(60));
    console.log('✓ Setup Complete!');
    console.log('='.repeat(60));
    console.log('\nYour media is now set up locally:');
    console.log('  • Images: public/images-new/');
    console.log('  • Videos: public/videos/');
    console.log('  • Config files updated to use local paths');
    console.log('  • Old Wix folders cleaned up');
    console.log('\nNext steps:');
    console.log('  1. Restart your dev server: npm start');
    console.log('  2. Verify all images and videos load correctly');
    console.log('  3. Test the website thoroughly');
    console.log('\nIf you encounter issues, check TROUBLESHOOTING-IMAGES.md');
});
