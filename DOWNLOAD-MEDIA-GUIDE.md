# Media Download Guide

This guide explains how to download all images and videos from Wix with proper naming and organization.

## Overview

Your project currently uses Wix CDN URLs for all media. This guide helps you:
1. Download all media files locally with meaningful names
2. Understand the new organized structure
3. Optionally switch from CDN to local files

## Quick Start

### Download Images
```bash
node download-images.js
```
- Downloads 35+ images
- Creates `public/images-new/` folder
- Takes 1-2 minutes
- Total size: ~15-30 MB

### Download Videos
```bash
node download-videos.js
```
- Downloads 6 video files (3 videos × 2 qualities)
- Creates `public/videos/` folder
- Takes 5-15 minutes depending on connection
- Total size: ~50-150 MB
- Shows progress during download

## What Gets Downloaded

### Images (35 files)
```
public/images-new/
├── logo.png
├── home-hero-1.jpg
├── home-hero-2.jpg
├── home-hero-3.jpg
├── home-hero-4.jpg
├── home-hero-5.jpg
├── city-traffic.jpg
├── big-ben.jpg
├── dark-forest.jpg
├── london-building.jpg
├── mountain-road.jpg
├── sunset-road.jpg
├── belief-hero.jpg
├── belief-video-poster.jpg
├── forest-aerial.jpg
├── forest-road-aerial.jpg
├── team-hero.jpg
├── team-member-1.jpg
├── team-member-2.jpg
├── team-member-3.jpg
├── team-member-4.jpg
├── invitation-hero.jpg
├── invitation-video-poster.jpg
├── give-hero-video-poster.jpg
├── icon-youtube.png
├── icon-instagram.png
├── icon-facebook.png
├── icon-tiktok.png
├── icon-envelope.png
├── icon-phone.png
├── client-logo-1.png
├── client-logo-2.png
├── client-logo-3.png
├── client-logo-4.png
└── client-logo-5.png
```

### Videos (6 files)
```
public/videos/
├── belief-video-720p.mp4          (~15-30 MB)
├── belief-video-480p.mp4          (~8-15 MB)
├── invitation-video-720p.mp4      (~15-30 MB)
├── invitation-video-480p.mp4      (~8-15 MB)
├── give-hero-video-720p.mp4       (~15-30 MB)
└── give-hero-video-480p.mp4       (~8-15 MB)
```

## Current vs New Structure

### Before (Cryptic Wix Names)
```
public/images/
├── 027521_2791704c4d4f458d9f7c898c90eec300~mv2.png/
├── 11062b_65415aede6d3457abdb845866b364998~mv2.jpg/
├── a3c153_ea643fa0bec04606b8e22e51e7d510b4~mv2.jpg/
└── ... (many nested folders)
```

### After (Meaningful Names)
```
public/images-new/
├── logo.png
├── home-hero-1.jpg
├── city-traffic.jpg
├── team-member-1.jpg
└── ... (flat structure, clear names)
```

## Using Local Files (Optional)

After downloading, you can switch from CDN to local files:

### Option 1: Update imageConfig.js
Replace CDN URLs with local paths:

```javascript
// Before (CDN)
logo: 'https://static.wixstatic.com/media/027521_...',

// After (Local)
logo: '/images-new/logo.png',
```

### Option 2: Update videoConfig.js
Replace CDN URLs with local paths:

```javascript
// Before (CDN)
sources: {
    hd: 'https://video.wixstatic.com/video/11062b_.../720p/mp4/file.mp4',
    sd: 'https://video.wixstatic.com/video/11062b_.../480p/mp4/file.mp4'
}

// After (Local)
sources: {
    hd: '/videos/belief-video-720p.mp4',
    sd: '/videos/belief-video-480p.mp4'
}
```

## Benefits of Local Files

### Pros:
- ✓ Full control over media files
- ✓ No dependency on Wix CDN
- ✓ Faster loading (no external requests)
- ✓ Works offline during development
- ✓ Can optimize/compress as needed
- ✓ Version control for media

### Cons:
- ✗ Larger repository size
- ✗ Need to manage file hosting
- ✗ No automatic CDN optimization
- ✗ Manual updates when images change

## Benefits of CDN (Current Setup)

### Pros:
- ✓ Automatic image optimization (AVIF, WebP)
- ✓ Global CDN distribution
- ✓ Smaller repository size
- ✓ Automatic quality adjustment
- ✓ No hosting bandwidth costs

### Cons:
- ✗ Dependency on Wix CDN
- ✗ Requires internet during development
- ✗ Less control over caching

## Recommended Approach

**For Development:**
- Download files locally for reference
- Keep using CDN URLs for now
- Switch to local only if CDN becomes unreliable

**For Production:**
- If deploying to Netlify/Vercel: Consider local files
- If staying with Wix: Keep using CDN
- Hybrid: Use local for critical images, CDN for others

## Troubleshooting

### Download Script Fails
```bash
# Check Node.js version (needs 12+)
node --version

# Check internet connection
ping static.wixstatic.com

# Try downloading one file manually
curl -O https://static.wixstatic.com/media/027521_2791704c4d4f458d9f7c898c90eec300~mv2.png
```

### Videos Download Slowly
- Videos are large files (5-30 MB each)
- 720p versions are larger than 480p
- Total download: 50-150 MB
- Be patient, progress is shown

### Out of Disk Space
- Check available space: `df -h` (Mac/Linux) or `dir` (Windows)
- Videos need ~150 MB free space
- Images need ~30 MB free space

## File Sizes Reference

| File Type | Size Range | Count | Total |
|-----------|------------|-------|-------|
| Logo | 10-50 KB | 1 | ~30 KB |
| Hero Images | 200-800 KB | 5 | ~2-3 MB |
| Page Images | 100-500 KB | 15 | ~3-5 MB |
| Team Photos | 50-150 KB | 4 | ~300 KB |
| Icons | 1-5 KB | 6 | ~20 KB |
| Client Logos | 10-50 KB | 5 | ~150 KB |
| Video Posters | 100-300 KB | 3 | ~600 KB |
| **Images Total** | | **35** | **~15-30 MB** |
| Videos (720p) | 15-30 MB | 3 | ~45-90 MB |
| Videos (480p) | 8-15 MB | 3 | ~24-45 MB |
| **Videos Total** | | **6** | **~70-135 MB** |
| **Grand Total** | | **41** | **~85-165 MB** |

## Next Steps

1. ✓ Run download scripts
2. ✓ Verify files downloaded correctly
3. ✓ Test website with current CDN setup
4. ⚠ Decide: Keep CDN or switch to local
5. ⚠ If switching to local: Update config files
6. ⚠ Clean up old image folders
7. ✓ Commit changes to git

## Support

If you encounter issues:
1. Check this guide's troubleshooting section
2. Verify Node.js is installed: `node --version`
3. Check internet connection
4. Review console output for specific errors
5. Try downloading individual files manually

## Summary

You now have:
- ✓ Organized image structure with meaningful names
- ✓ Centralized video configuration
- ✓ Download scripts for all media
- ✓ Clear documentation
- ✓ Flexibility to use CDN or local files

The project is set up to work with both CDN and local files, giving you maximum flexibility!
