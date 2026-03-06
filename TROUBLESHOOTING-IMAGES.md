# Troubleshooting Images Not Showing

## Issue: Client Logos Not Displaying

If you see placeholder icons instead of actual logos, follow these steps:

### Step 1: Test if Wix CDN URLs are accessible

```bash
node test-image-urls.js
```

This will check if all image URLs are working from Wix CDN.

### Step 2: Check Browser Console

1. Open your website in browser
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Look for errors like:
   - `Failed to load resource: net::ERR_BLOCKED_BY_CLIENT`
   - `CORS policy` errors
   - `404 Not Found` errors

### Step 3: Solutions Based on Error

#### Solution A: Images Deleted from Wix or URLs Changed
**Symptom**: 404 errors in console

**Fix**: Download images locally
```bash
# Download all images
node download-images.js

# Then update imageConfig.js to use local paths
# Change from:
logo: 'https://static.wixstatic.com/...'

# To:
logo: '/images-new/logo.png'
```

#### Solution B: Ad Blocker Blocking Images
**Symptom**: `ERR_BLOCKED_BY_CLIENT` in console

**Fix**: 
1. Disable ad blocker for localhost
2. Or download images locally (see Solution A)

#### Solution C: CORS Issues
**Symptom**: CORS policy errors in console

**Fix**: Download images locally (see Solution A)

#### Solution D: Slow Network
**Symptom**: Images load slowly or timeout

**Fix**: 
1. Wait longer for images to load
2. Or download images locally for faster loading

### Step 4: Clean Up Old Wix Folders

Once you've verified images are working, clean up old folders:

```bash
node cleanup-old-images.js
```

This will delete all the old Wix image folders with cryptic names.

## Quick Fix: Download Everything Locally

If you want to avoid CDN issues entirely:

### 1. Download Images
```bash
node download-images.js
```

### 2. Download Videos
```bash
node download-videos.js
```

### 3. Update imageConfig.js

Replace CDN URLs with local paths:

```javascript
export const images = {
    // Logo
    logo: '/images-new/logo.png',
    
    // Home Page
    hero1: '/images-new/home-hero-1.jpg',
    hero2: '/images-new/home-hero-2.jpg',
    hero3: '/images-new/home-hero-3.jpg',
    hero4: '/images-new/home-hero-4.jpg',
    hero5: '/images-new/home-hero-5.jpg',
    
    // Shared Images
    cityTraffic: '/images-new/city-traffic.jpg',
    bigBen: '/images-new/big-ben.jpg',
    darkForest: '/images-new/dark-forest.jpg',
    londonBuilding: '/images-new/london-building.jpg',
    mountainRoad: '/images-new/mountain-road.jpg',
    sunsetRoad: '/images-new/sunset-road.jpg',
    
    // Belief Page
    beliefHero: '/images-new/belief-hero.jpg',
    beliefVideoPoster: '/images-new/belief-video-poster.jpg',
    forestAerial: '/images-new/forest-aerial.jpg',
    forestRoadAerial: '/images-new/forest-road-aerial.jpg',
    
    // Team Page
    teamHero: '/images-new/team-hero.jpg',
    teamMember1: '/images-new/team-member-1.jpg',
    teamMember2: '/images-new/team-member-2.jpg',
    teamMember3: '/images-new/team-member-3.jpg',
    teamMember4: '/images-new/team-member-4.jpg',
    
    // Invitation Page
    invitationHero: '/images-new/invitation-hero.jpg',
    invitationVideoPoster: '/images-new/invitation-video-poster.jpg',
    
    // Give Page
    giveHeroVideoPoster: '/images-new/give-hero-video-poster.jpg',
    
    // Icons
    iconYoutube: '/images-new/icon-youtube.png',
    iconInstagram: '/images-new/icon-instagram.png',
    iconFacebook: '/images-new/icon-facebook.png',
    iconTiktok: '/images-new/icon-tiktok.png',
    iconEnvelope: '/images-new/icon-envelope.png',
    iconPhone: '/images-new/icon-phone.png',
    
    // Client Logos
    clientLogo1: '/images-new/client-logo-1.png',
    clientLogo2: '/images-new/client-logo-2.png',
    clientLogo3: '/images-new/client-logo-3.png',
    clientLogo4: '/images-new/client-logo-4.png',
    clientLogo5: '/images-new/client-logo-5.png',
};
```

### 4. Update videoConfig.js

Replace CDN URLs with local paths:

```javascript
export const videos = {
    beliefVideo: {
        id: '11062b_901619a8201045b2973ebd0fef1ea8c1',
        poster: 'beliefVideoPoster',
        sources: {
            hd: '/videos/belief-video-720p.mp4',
            sd: '/videos/belief-video-480p.mp4'
        }
    },
    invitationVideo: {
        id: '11062b_3fc3608105274653a4675d6e30353973',
        poster: 'invitationVideoPoster',
        sources: {
            hd: '/videos/invitation-video-720p.mp4',
            sd: '/videos/invitation-video-480p.mp4'
        }
    },
    giveHeroVideo: {
        id: '11062b_e12e778250c54ec0aa0d967b228e9cc3',
        poster: 'giveHeroVideoPoster',
        sources: {
            hd: '/videos/give-hero-video-720p.mp4',
            sd: '/videos/give-hero-video-480p.mp4'
        }
    }
};
```

### 5. Clean Up
```bash
node cleanup-old-images.js
```

### 6. Restart Dev Server
```bash
npm start
```

## Verification Checklist

- [ ] Run `node test-image-urls.js` to test CDN access
- [ ] Check browser console for errors
- [ ] Download images if needed: `node download-images.js`
- [ ] Download videos if needed: `node download-videos.js`
- [ ] Update config files if using local files
- [ ] Clean up old folders: `node cleanup-old-images.js`
- [ ] Restart dev server
- [ ] Verify all images load correctly

## Common Issues

### Issue: Images show briefly then disappear
**Cause**: React re-rendering or state issues
**Fix**: Check component state management

### Issue: Some images work, others don't
**Cause**: Mixed CDN/local paths or incorrect keys
**Fix**: Verify all keys in imageConfig match usage in components

### Issue: Images work in dev but not in production
**Cause**: Build process or path issues
**Fix**: Ensure images are in public folder and paths are correct

### Issue: Videos don't play
**Cause**: Video format or codec issues
**Fix**: Ensure browser supports MP4/H.264 codec

## Need Help?

1. Check browser console for specific errors
2. Run test script: `node test-image-urls.js`
3. Verify file paths are correct
4. Check network tab in browser dev tools
5. Try downloading images locally as a fallback

## Summary

The most reliable solution is to download all media locally and update the config files to use local paths. This eliminates dependency on external CDN and ensures consistent loading.
