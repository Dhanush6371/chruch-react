# Image Structure Documentation

## Overview
This document explains the simplified and organized image structure for The Way website.

## New Image Naming Convention

All images now have meaningful, descriptive names instead of cryptic Wix IDs. The images are organized by category and usage.

### Image Categories

#### 1. Logo
- `logo.png` - The Way logo

#### 2. Home Page Heroes
- `home-hero-1.jpg` - Main hero image (first section)
- `home-hero-2.jpg` - Second hero image
- `home-hero-3.jpg` - Third hero image
- `home-hero-4.jpg` - Fourth hero image
- `home-hero-5.jpg` - Fifth hero image

#### 3. Shared Images (Used Across Multiple Pages)
These images appear on multiple pages throughout the site:
- `city-traffic.jpg` - City traffic/street scene (used in About, Belief, Invitation, Give pages)
- `big-ben.jpg` - Big Ben landmark photo (used in About and Belief pages)
- `dark-forest.jpg` - Dark forest with sunlight beam (used in About, Belief, Invitation, Give pages)
- `london-building.jpg` - London building exterior (used in About page)
- `mountain-road.jpg` - Mountain road scenic view (used in About, Belief, Invitation, Give pages)
- `sunset-road.jpg` - Road at sunset (used in About and Belief pages)

#### 4. The Belief Page
- `belief-hero.jpg` - Hero image for Belief page
- `belief-video-poster.jpg` - Video poster/thumbnail for Belief page
- `forest-aerial.jpg` - Aerial view of forest
- `forest-road-aerial.jpg` - Aerial view of forest road

#### 5. The Team Page
- `team-hero.jpg` - Hero image for Team page
- `team-member-1.jpg` - First team member photo
- `team-member-2.jpg` - Second team member photo
- `team-member-3.jpg` - Third team member photo
- `team-member-4.jpg` - Fourth team member photo

#### 6. The Invitation Page
- `invitation-hero.jpg` - Hero image for Invitation page
- `invitation-video-poster.jpg` - Video poster/thumbnail for Invitation page

#### 7. Give Page
- `give-hero-video-poster.jpg` - Video poster/thumbnail for Give page hero

#### 8. Social Media Icons
- `icon-youtube.png` - YouTube icon (30x30)
- `icon-instagram.png` - Instagram icon (30x30)
- `icon-facebook.png` - Facebook icon (30x30)
- `icon-tiktok.png` - TikTok icon (30x30)
- `icon-envelope.png` - Email/envelope icon (50x50)
- `icon-phone.png` - Phone icon (50x50)

#### 9. Client Logos (Decorative)
- `client-logo-1.png` - First client logo
- `client-logo-2.png` - Second client logo
- `client-logo-3.png` - Third client logo
- `client-logo-4.png` - Fourth client logo
- `client-logo-5.png` - Fifth client logo

## Image Quality Settings

All images are served from Wix CDN with optimized quality settings:
- Hero images: `q_95` (95% quality) at 2560px width
- Team member photos: `q_85` (85% quality) at 443x431px
- Icons: `q_85` (85% quality) at specified dimensions
- All images use AVIF encoding with auto quality fallback

## How to Download Images

A Node.js script (`download-images.js`) is provided to download all images with the new naming convention:

```bash
node download-images.js
```

This will create a `public/images-new` folder with all images properly named.

## Usage in Code

Images are accessed through the centralized `imageConfig.js` file:

```javascript
import { getImageUrl } from '../imageConfig';

// In your component
<img src={getImageUrl('logo')} alt="The Way Logo" />
<div style={{ backgroundImage: `url(${getImageUrl('hero1')})` }} />
```

## Benefits of New Structure

1. **Clarity**: Image names clearly indicate their purpose and content
2. **Maintainability**: Easy to find and replace specific images
3. **Reusability**: Shared images are clearly identified and reused across pages
4. **Organization**: Logical grouping by page and function
5. **Documentation**: Clear mapping between old Wix IDs and new meaningful names

## Migration Notes

All component files have been updated to use the new naming convention:
- `Home.js` - Uses hero1-5
- `TheBelief.js` - Uses belief-specific and shared images
- `TheTeam.js` - Uses team-specific images and icons
- `AboutTheStory.js` - Uses shared images
- `TheInvitation.js` - Uses invitation-specific and shared images
- `Give.js` - Uses give-specific and shared images

## Old vs New Mapping

### Example Mappings:
- `027521_2791704c4d4f458d9f7c898c90eec300~mv2.png` → `logo.png`
- `11062b_65415aede6d3457abdb845866b364998~mv2.jpg` → `city-traffic.jpg`
- `11062b_b8e75213b44c485f81fd5740a917890a~mv2_d_5184_3456_s_4_2.jpg` → `big-ben.jpg`
- `a3c153_ea643fa0bec04606b8e22e51e7d510b4~mv2.jpg` → `team-member-1.jpg`
- `01c3aff52f2a4dffa526d7a9843d46ea.png` → `icon-instagram.png`

## Next Steps

1. Run `node download-images.js` to download all images locally
2. Run `node download-videos.js` to download all videos locally (note: videos are large files)
3. Test the website to ensure all images and videos load correctly
4. Optionally, replace CDN URLs with local paths in `imageConfig.js` and `videoConfig.js`
5. Delete old image folders with cryptic names from `public/images/`

## Video Structure

The project uses 3 videos in multiple quality levels (720p HD and 480p SD):

### Videos:
1. **Belief Video** (`belief-video-720p.mp4`, `belief-video-480p.mp4`)
   - Used in: The Belief page
   - Poster: `belief-video-poster.jpg`
   - Wix ID: `11062b_901619a8201045b2973ebd0fef1ea8c1`

2. **Invitation Video** (`invitation-video-720p.mp4`, `invitation-video-480p.mp4`)
   - Used in: The Invitation page and Give page (Connect section)
   - Poster: `invitation-video-poster.jpg`
   - Wix ID: `11062b_3fc3608105274653a4675d6e30353973`

3. **Give Hero Video** (`give-hero-video-720p.mp4`, `give-hero-video-480p.mp4`)
   - Used in: Give page hero section
   - Poster: `give-hero-video-poster.jpg`
   - Wix ID: `11062b_e12e778250c54ec0aa0d967b228e9cc3`

### Video Configuration

Videos are managed through `src/videoConfig.js` with helper functions:

```javascript
import { getVideoSources, getVideoPoster } from '../videoConfig';
import { getImageUrl } from '../imageConfig';

// Get video sources
const sources = getVideoSources('beliefVideo');
// Returns: { hd: '...720p.mp4', sd: '...480p.mp4' }

// Get video poster
const poster = getVideoPoster('beliefVideo', getImageUrl);
// Returns the poster image URL from imageConfig

// Usage in component
<video poster={getVideoPoster('beliefVideo', getImageUrl)}>
  <source src={getVideoSources('beliefVideo').hd} type="video/mp4" />
  <source src={getVideoSources('beliefVideo').sd} type="video/mp4" />
</video>
```

### Download Videos

Run the video download script:
```bash
node download-videos.js
```

This will download all videos to `public/videos/` with progress tracking. Note that videos are large files (typically 5-50 MB each) and may take several minutes to download.
