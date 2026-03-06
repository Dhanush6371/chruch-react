# Media Management - Quick Start

## 🎯 What You Need to Know

Your images and videos are now organized with meaningful names instead of cryptic Wix IDs.

**Current Status:** Using Wix CDN (works fine, no action needed)

## 🚀 Quick Actions

### Fix Images Not Showing
```bash
node setup-local-media.js
```
Downloads everything and switches to local files.

### Clean Up Old Folders
```bash
node cleanup-old-images.js
```
Deletes old Wix folders with cryptic names.

### Test CDN Access
```bash
node test-image-urls.js
```
Checks if Wix CDN URLs are working.

## 📁 New Structure

### Images (35 files)
```
public/images-new/
├── logo.png
├── home-hero-1.jpg → home-hero-5.jpg
├── city-traffic.jpg, big-ben.jpg, dark-forest.jpg
├── team-member-1.jpg → team-member-4.jpg
├── icon-facebook.png, icon-instagram.png, etc.
└── client-logo-1.png → client-logo-5.png
```

### Videos (6 files)
```
public/videos/
├── belief-video-720p.mp4 & 480p.mp4
├── invitation-video-720p.mp4 & 480p.mp4
└── give-hero-video-720p.mp4 & 480p.mp4
```

## 📚 Documentation

| File | Purpose |
|------|---------|
| `FINAL-SETUP-GUIDE.md` | Complete setup instructions |
| `TROUBLESHOOTING-IMAGES.md` | Fix image loading issues |
| `QUICK-REFERENCE.md` | Quick reference for developers |
| `IMAGE-STRUCTURE.md` | Detailed image documentation |
| `DOWNLOAD-MEDIA-GUIDE.md` | Download instructions |

## 🔧 Available Scripts

| Command | What It Does |
|---------|--------------|
| `node setup-local-media.js` | Download everything & switch to local |
| `node download-images.js` | Download images only |
| `node download-videos.js` | Download videos only |
| `node cleanup-old-images.js` | Delete old Wix folders |
| `node test-image-urls.js` | Test if CDN URLs work |

## ❓ Common Questions

**Q: Do I need to do anything?**
A: No, everything works with CDN. Download only if you want local files.

**Q: Can I delete old image folders?**
A: Yes! Run `node cleanup-old-images.js`

**Q: Images not showing?**
A: Run `node setup-local-media.js` to download locally.

**Q: How much space needed?**
A: ~200 MB (30 MB images + 150 MB videos)

## 🎨 Usage in Code

### Images
```javascript
import { getImageUrl } from '../imageConfig';

<img src={getImageUrl('logo')} alt="Logo" />
<img src={getImageUrl('teamMember1')} alt="Team" />
```

### Videos
```javascript
import { getVideoSources, getVideoPoster } from '../videoConfig';
import { getImageUrl } from '../imageConfig';

<video poster={getVideoPoster('beliefVideo', getImageUrl)}>
  <source src={getVideoSources('beliefVideo').hd} />
  <source src={getVideoSources('beliefVideo').sd} />
</video>
```

## 📖 Read More

Start with `FINAL-SETUP-GUIDE.md` for complete instructions.

---

**Everything is organized and ready to use!** 🎉
