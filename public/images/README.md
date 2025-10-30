# Image Setup Instructions

This directory should contain all the images used throughout the website.

## Required Images

Place the following images in this directory:

### Hero & Background Images
1. **hero-bg.jpg** - Homepage hero background (1920x1080px)
2. **about-hero.jpg** - About page header (1920x800px)
3. **services-hero.jpg** - Services page header (1920x800px)
4. **gallery-hero.jpg** - Gallery page header (1920x800px)
5. **contact-hero.jpg** - Contact page header (1920x800px)

### Content Images
6. **about-catering.jpg** - About section image (800x600px)
7. **gallery-1.jpg** through **gallery-8.jpg** - Gallery images (800x800px or larger)

## Image Recommendations

- **Format**: JPG or PNG
- **Optimization**: Compress images for web to improve loading speed
- **Aspect Ratios**: 
  - Hero images: 16:9 or 21:9
  - Gallery images: 1:1 or 4:3
- **File Size**: Keep individual images under 500KB

## Using Placeholder Images

Until you have your actual images, you can use:

1. **Unsplash** - High-quality free photos
   - Visit: https://unsplash.com
   - Search for: "catering", "food", "wedding", "corporate events"
   - Download images with appropriate dimensions

2. **Pexels** - Free stock photos
   - Visit: https://www.pexels.com
   - Similar categories

3. **Placeholder Services**
   - https://placeholder.com
   - https://via.placeholder.com

## Quick Setup with Unsplash

For a quick start, you can use Unsplash Source URLs directly in the code:

```jsx
// Example for hero background
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1920')] bg-cover bg-center"></div>
```

Replace URLs in:
- `components/Hero.js`
- `app/about/page.js`
- `app/services/page.js`
- `app/gallery/page.js`
- `app/contact/pageبة

