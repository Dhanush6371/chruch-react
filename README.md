# The Way Cardiff - React App

A pixel-perfect React recreation of The Way Cardiff website.

## 🚀 Quick Start

```bash
cd react-way-cardiff
npm install
npm start
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
react-way-cardiff/
├── public/
│   ├── images/          # All images copied from original site
│   └── fonts/           # Font files (if needed locally)
├── src/
│   ├── components/
│   │   ├── Header.js    # Navigation header
│   │   ├── Footer.js    # Site footer
│   │   └── Layout.js    # Page wrapper
│   ├── pages/
│   │   ├── Home.js      # ✅ COMPLETE - Pixel-perfect
│   │   ├── AboutTheStory.js
│   │   ├── TheBelief.js
│   │   ├── TheTeam.js
│   │   ├── TheInvitation.js
│   │   └── Give.js
│   ├── App.js           # Main app with routing
│   ├── fonts.css        # Wix font imports
│   └── imageConfig.js   # Image path configuration
└── package.json
```

## ✅ What's Complete

### Home Page (100%)
- All 4 quote sections with exact text
- 2 content sections (The Story, The Belief)
- 4 image sections with correct heights
- Pixel-perfect styling:
  - Exact fonts: futura-lt-w01-light, futura-lt-w01-book
  - Exact colors: #E7F1FB, #342216, #2c3e50
  - Exact sizes: 40px quotes, 60px headings, 20px body
  - Exact heights: 825px, 550px, 697px, 672px
  - Max width: 980px

### Infrastructure (100%)
- React Router setup
- Component structure
- Font configuration with Wix CDN
- Image system with local files + CDN fallback
- All images copied to public folder

## 🔄 What's Remaining

- Extract and implement content for 5 other pages
- Add responsive design for mobile
- Complete footer with links
- Add navigation hover states
- Test all functionality

## 🎨 Design Specifications

### Colors
- Primary Text: `#342216`
- Light Text (on dark): `#E7F1FB`
- Dark Background: `#2c3e50`

### Typography
- Body Font: `futura-lt-w01-light`
- Heading Font: `futura-lt-w01-book`
- Quote Size: `40px`
- Heading Size: `60px`
- Body Size: `20px`

### Layout
- Max Width: `980px`
- Section Heights: `825px`, `550px`, `697px`, `672px`

## 📝 Notes

- All images are stored locally in `public/images/`
- Fonts load from Wix CDN (no local files needed)
- Image config has CDN fallback if local files missing
- Home page is fully functional and pixel-perfect

## 🌐 Original Site

https://www.thewaycardiff.co.uk

---

**Status:** Home page complete and pixel-perfect. Ready for content extraction on remaining pages.
