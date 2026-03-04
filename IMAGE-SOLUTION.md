# Image Solution

## Problem
The downloaded images from HTTrack were stored in a complex nested folder structure and were very small (thumbnail sizes). The original structure looked like:
```
images/027521_967e6a7efdc24b54a18fdc06b2f128c5_mv2.jpg/v1/fill/w_147,h_72,al_c,q_80.../image.jpg
```

## Solution
Instead of using the downloaded images, we're using the **Wix CDN URLs directly** in the React app. This provides:

✅ **High-quality images** - Full resolution (1920px wide for hero images)
✅ **Optimized delivery** - Wix CDN is fast and reliable
✅ **No storage needed** - No need to store large image files locally
✅ **Automatic optimization** - Wix serves AVIF format for modern browsers

## Implementation

All image URLs are configured in `src/imageConfig.js`:

```javascript
export const images = {
    logo: 'https://static.wixstatic.com/media/...',
    hero1: 'https://static.wixstatic.com/media/...',
    hero2: 'https://static.wixstatic.com/media/...',
    // etc.
};
```

## Usage in Components

```javascript
import { getImageUrl } from '../imageConfig';

<img src={getImageUrl('hero1')} alt="Hero" />
```

## Image Sizes

- **Hero images**: 1920px wide (full screen)
- **Logo**: 233x109px
- **Social icons**: 30x30px
- **Team photos**: 400px wide

## Benefits

1. Images load immediately (no 404 errors)
2. High quality and properly optimized
3. Simple configuration
4. Easy to update URLs if needed

## Note

The Wix CDN URLs are public and stable. They won't change unless the original site is modified. If you need to host images locally in the future, you can download the full-resolution images from these CDN URLs.
