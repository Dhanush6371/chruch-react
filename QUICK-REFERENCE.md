# Quick Reference - Media Management

## Download Commands

```bash
# Download all images (35 files, ~15-30 MB)
node download-images.js

# Download all videos (6 files, ~70-135 MB)
node download-videos.js
```

## Image Usage

```javascript
import { getImageUrl } from '../imageConfig';

// Use in component
<img src={getImageUrl('logo')} alt="Logo" />
<div style={{ backgroundImage: `url(${getImageUrl('hero1')})` }} />
```

## Video Usage

```javascript
import { getVideoSources, getVideoPoster } from '../videoConfig';
import { getImageUrl } from '../imageConfig';

// Use in component
<video poster={getVideoPoster('beliefVideo', getImageUrl)}>
  <source src={getVideoSources('beliefVideo').hd} type="video/mp4" />
  <source src={getVideoSources('beliefVideo').sd} type="video/mp4" />
</video>
```

## Available Images

### Logo & Branding
- `logo`

### Home Page
- `hero1`, `hero2`, `hero3`, `hero4`, `hero5`

### Shared Images
- `cityTraffic`, `bigBen`, `darkForest`, `londonBuilding`
- `mountainRoad`, `sunsetRoad`

### Page-Specific
- `beliefHero`, `beliefVideoPoster`, `forestAerial`, `forestRoadAerial`
- `teamHero`, `teamMember1`, `teamMember2`, `teamMember3`, `teamMember4`
- `invitationHero`, `invitationVideoPoster`
- `giveHeroVideoPoster`

### Icons
- `iconYoutube`, `iconInstagram`, `iconFacebook`, `iconTiktok`
- `iconEnvelope`, `iconPhone`

### Client Logos
- `clientLogo1`, `clientLogo2`, `clientLogo3`, `clientLogo4`, `clientLogo5`

## Available Videos

- `beliefVideo` - The Belief page main video
- `invitationVideo` - Invitation/Give page connect video
- `giveHeroVideo` - Give page hero video

Each video has:
- `.hd` - 720p quality
- `.sd` - 480p quality
- Poster image linked via imageConfig

## File Locations

```
project/
├── src/
│   ├── imageConfig.js      # Image configuration
│   └── videoConfig.js      # Video configuration
├── public/
│   ├── images-new/         # Downloaded images (after running script)
│   └── videos/             # Downloaded videos (after running script)
├── download-images.js      # Image download script
└── download-videos.js      # Video download script
```

## Common Tasks

### Add New Image
1. Add URL to `src/imageConfig.js`
2. Add to download script if needed
3. Use `getImageUrl('newImageKey')` in component

### Add New Video
1. Add to `src/videoConfig.js`
2. Add to download script
3. Use `getVideoSources('newVideoKey')` in component

### Switch to Local Files
1. Download media using scripts
2. Update paths in config files:
   ```javascript
   // From CDN
   logo: 'https://static.wixstatic.com/...'
   
   // To Local
   logo: '/images-new/logo.png'
   ```

### Update Image
1. Replace file in `public/images-new/`
2. Or update URL in `imageConfig.js`
3. Clear browser cache

## Troubleshooting

### Image not showing
- Check key name matches imageConfig
- Verify URL is correct
- Check browser console for errors

### Video not playing
- Check video sources are correct
- Verify poster image exists
- Check browser console for errors
- Try different browser

### Download fails
- Check internet connection
- Verify Node.js is installed
- Check disk space
- Try downloading one file manually

## Documentation Files

- `MEDIA-REORGANIZATION-SUMMARY.md` - Complete overview
- `IMAGE-STRUCTURE.md` - Detailed image documentation
- `DOWNLOAD-MEDIA-GUIDE.md` - Download instructions
- `QUICK-REFERENCE.md` - This file

## Support

Check documentation files for detailed information on:
- Complete image/video inventory
- File sizes and download times
- CDN vs local file comparison
- Step-by-step guides
- Troubleshooting tips
