// Video configuration with meaningful names
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
