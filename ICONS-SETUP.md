# Icons Setup - Separate Folder

## What Was Done

Social media and contact icons have been organized into their own dedicated folder for better organization.

## New Structure

```
public/
├── icons/                    # NEW - Dedicated icons folder
│   ├── youtube.png          # YouTube icon
│   ├── instagram.png        # Instagram icon
│   ├── facebook.png         # Facebook icon
│   ├── tiktok.png           # TikTok icon
│   ├── envelope.png         # Email/contact icon
│   └── phone.png            # Phone icon
│
└── images-new/              # All other images
    ├── logo.png
    ├── home-hero-1.jpg
    ├── team-member-1.jpg
    └── ... (other images)
```

## Benefits

1. **Better Organization** - Icons separated from images
2. **Cleaner Structure** - Easy to find and manage icons
3. **Simpler Names** - No "icon-" prefix needed
4. **Scalability** - Easy to add more icons in the future

## Updated Configuration

The `imageConfig.js` now points to the icons folder:

```javascript
// Social Icons
iconYoutube: '/icons/youtube.png',
iconInstagram: '/icons/instagram.png',
iconFacebook: '/icons/facebook.png',
iconTiktok: '/icons/tiktok.png',
iconEnvelope: '/icons/envelope.png',
iconPhone: '/icons/phone.png',
```

## Usage in Components

No changes needed in components! They still use the same keys:

```javascript
import { getImageUrl } from '../imageConfig';

<img src={getImageUrl('iconYoutube')} alt="YouTube" />
<img src={getImageUrl('iconFacebook')} alt="Facebook" />
```

## Adding New Icons

To add new icons:

1. Place the icon file in `public/icons/`
2. Add entry to `imageConfig.js`:
   ```javascript
   iconNewIcon: '/icons/new-icon.png',
   ```
3. Use in components:
   ```javascript
   <img src={getImageUrl('iconNewIcon')} alt="New Icon" />
   ```

## File Sizes

All icons are optimized:
- Social media icons: ~1-5 KB each
- Contact icons: ~1-5 KB each
- Total: ~20-30 KB for all icons

## Current Icons

| Icon | File | Size | Usage |
|------|------|------|-------|
| YouTube | youtube.png | ~3 KB | Footer, social links |
| Instagram | instagram.png | ~2 KB | Footer, social links |
| Facebook | facebook.png | ~2 KB | Footer, social links |
| TikTok | tiktok.png | ~3 KB | Footer, social links |
| Envelope | envelope.png | ~2 KB | Contact, email links |
| Phone | phone.png | ~2 KB | Contact, phone links |

## Next Steps

1. Restart your dev server: `npm start`
2. Verify icons display correctly
3. Icons should now load from `/icons/` folder

## Summary

✅ Icons moved to dedicated `/icons/` folder
✅ Cleaner file names (no "icon-" prefix)
✅ imageConfig.js updated
✅ Better organization and scalability
✅ Ready to use!
