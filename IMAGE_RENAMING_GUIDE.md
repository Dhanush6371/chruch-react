# Image Renaming Guide

Follow this guide to rename all images in your project with a clear, organized naming convention.

## Instructions

1. Navigate to the `public/images-new/` folder
2. Rename each file according to the table below
3. After renaming, the code will automatically work with the new names

---

## Renaming Table

### Home Page Images
| Current Name | New Name |
|--------------|----------|
| home-hero-1.jpg | home-1.jpg |
| home-hero-2.jpg | home-2.jpg |
| home-hero-3.jpg | home-3.jpg |
| home-hero-4.jpg | home-4.jpg |
| home-hero-5.jpg | home-5.jpg |
| home-hero-1.mp4 | home-1.mp4 |
| dark-forest.jpg | home-6.jpg |
| mountain-road.jpg | home-7.jpg |

### Story Page Images
| Current Name | New Name |
|--------------|----------|
| london-building.jpg | story-1.jpg |
| london-building.mp4 | story-1.mp4 |
| dark-forest.jpg | story-2.jpg |
| mountain-road.jpg | story-3.jpg |
| sunset-road.jpg | story-4.jpg |

### Belief Page Images
| Current Name | New Name |
|--------------|----------|
| belief-hero.jpg | belief-1.jpg |
| belief-video-poster.jpg | belief-2.jpg |
| forest-aerial.jpg | belief-3.jpg |
| forest-road-aerial.jpg | belief-4.jpg |

### Invitation Page Images
| Current Name | New Name |
|--------------|----------|
| invitation-hero.jpg | invitation-1.jpg |
| invitation-video-poster.jpg | invitation-2.jpg |

### Team Page Images
| Current Name | New Name |
|--------------|----------|
| team-hero.jpg | team-1.jpg |
| bruno.jpg | team-2.jpg |
| jinhui.jpg | team-3.jpg |
| johntower.jpg | team-4.jpg |
| matt-fox.jpg | team-5.jpg |
| saagar.jpg | team-6.jpg |
| sheikh.jpg | team-7.jpg |
| team_1.jpeg | team-8.jpeg |
| team-2.jpeg | team-9.jpeg |
| team-member-1.jpg | team-10.jpg |
| team-member-2.jpg | team-11.jpg |
| team-member-3.jpg | team-12.jpg |
| team-member-4.jpg | team-13.jpg |

### Keep As Is (No Changes)
- logo.png
- icon-envelope.png
- icon-facebook.png
- icon-instagram.png
- icon-phone.png
- icon-tiktok.png
- icon-youtube.png
- client-logo-1.png
- client-logo-2.png
- client-logo-3.png
- client-logo-4.png
- client-logo-5.png
- give-hero-video-poster.jpg
- city-traffic.jpg
- big-ben.jpg

---

## Quick Rename Commands (Optional)

If you're comfortable with command line, you can use these commands in the `public/images-new/` directory:

### Windows (PowerShell):
```powershell
# Home Page
Rename-Item "home-hero-1.jpg" "home-1.jpg"
Rename-Item "home-hero-2.jpg" "home-2.jpg"
Rename-Item "home-hero-3.jpg" "home-3.jpg"
Rename-Item "home-hero-4.jpg" "home-4.jpg"
Rename-Item "home-hero-5.jpg" "home-5.jpg"
Rename-Item "home-hero-1.mp4" "home-1.mp4"
Copy-Item "dark-forest.jpg" "home-6.jpg"
Copy-Item "mountain-road.jpg" "home-7.jpg"

# Story Page
Rename-Item "london-building.jpg" "story-1.jpg"
Rename-Item "london-building.mp4" "story-1.mp4"
Copy-Item "dark-forest.jpg" "story-2.jpg"
Copy-Item "mountain-road.jpg" "story-3.jpg"
Rename-Item "sunset-road.jpg" "story-4.jpg"

# Belief Page
Rename-Item "belief-hero.jpg" "belief-1.jpg"
Rename-Item "belief-video-poster.jpg" "belief-2.jpg"
Rename-Item "forest-aerial.jpg" "belief-3.jpg"
Rename-Item "forest-road-aerial.jpg" "belief-4.jpg"

# Invitation Page
Rename-Item "invitation-hero.jpg" "invitation-1.jpg"
Rename-Item "invitation-video-poster.jpg" "invitation-2.jpg"

# Team Page
Rename-Item "team-hero.jpg" "team-1.jpg"
Rename-Item "bruno.jpg" "team-2.jpg"
Rename-Item "jinhui.jpg" "team-3.jpg"
Rename-Item "johntower.jpg" "team-4.jpg"
Rename-Item "matt-fox.jpg" "team-5.jpg"
Rename-Item "saagar.jpg" "team-6.jpg"
Rename-Item "sheikh.jpg" "team-7.jpg"
Rename-Item "team_1.jpeg" "team-8.jpeg"
Rename-Item "team-2.jpeg" "team-9.jpeg"
Rename-Item "team-member-1.jpg" "team-10.jpg"
Rename-Item "team-member-2.jpg" "team-11.jpg"
Rename-Item "team-member-3.jpg" "team-12.jpg"
Rename-Item "team-member-4.jpg" "team-13.jpg"
```

### Mac/Linux (Bash):
```bash
# Home Page
mv home-hero-1.jpg home-1.jpg
mv home-hero-2.jpg home-2.jpg
mv home-hero-3.jpg home-3.jpg
mv home-hero-4.jpg home-4.jpg
mv home-hero-5.jpg home-5.jpg
mv home-hero-1.mp4 home-1.mp4
cp dark-forest.jpg home-6.jpg
cp mountain-road.jpg home-7.jpg

# Story Page
mv london-building.jpg story-1.jpg
mv london-building.mp4 story-1.mp4
cp dark-forest.jpg story-2.jpg
cp mountain-road.jpg story-3.jpg
mv sunset-road.jpg story-4.jpg

# Belief Page
mv belief-hero.jpg belief-1.jpg
mv belief-video-poster.jpg belief-2.jpg
mv forest-aerial.jpg belief-3.jpg
mv forest-road-aerial.jpg belief-4.jpg

# Invitation Page
mv invitation-hero.jpg invitation-1.jpg
mv invitation-video-poster.jpg invitation-2.jpg

# Team Page
mv team-hero.jpg team-1.jpg
mv bruno.jpg team-2.jpg
mv jinhui.jpg team-3.jpg
mv johntower.jpg team-4.jpg
mv matt-fox.jpg team-5.jpg
mv saagar.jpg team-6.jpg
mv sheikh.jpg team-7.jpg
mv team_1.jpeg team-8.jpeg
mv team-2.jpeg team-9.jpeg
mv team-member-1.jpg team-10.jpg
mv team-member-2.jpg team-11.jpg
mv team-member-3.jpg team-12.jpg
mv team-member-4.jpg team-13.jpg
```

---

## Important Notes

1. **Shared Images**: Some images like `dark-forest.jpg` and `mountain-road.jpg` are used on multiple pages. I've used COPY commands instead of RENAME so you have separate copies for each page.

2. **After Renaming**: Once you've renamed all the files, the website will automatically use the new names because I've updated the `imageConfig.js` file.

3. **Backup**: Consider backing up your `public/images-new/` folder before renaming, just in case.

4. **Verification**: After renaming, check that all pages load images correctly by visiting each page.

---

## Checklist

- [ ] Backup images folder
- [ ] Rename Home page images (7 files)
- [ ] Rename Story page images (5 files)
- [ ] Rename Belief page images (4 files)
- [ ] Rename Invitation page images (2 files)
- [ ] Rename Team page images (13 files)
- [ ] Test website to verify all images load
- [ ] Delete old unused image files (optional)

---

**Total Files to Rename/Copy: 31 files**

Good luck! If you encounter any issues, let me know.
