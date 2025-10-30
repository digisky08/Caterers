# Premium Caterers Website

A fully responsive, elegant catering website built with Next.js, featuring smooth animations, a luxury design theme, and comprehensive event catering information.

## 🚀 Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for professional transitions
- **Luxury Theme**: Elegant design with gold, maroon, and cream color scheme
- **Pages**: Home, About Us, Services, Gallery, and Contact
- **Interactive Components**: Testimonial carousel, image gallery with lightbox, contact form
- **SEO Optimized**: Meta tags and structured content for search engines
- **Sticky Navigation**: Smooth scroll navigation with active link highlighting
- **Mobile Menu**: Collapsible navigation menu for mobile devices

## 🛠️ Tech Stack

- **Next.js 16**: React framework for production
- **React 19**: Latest React features
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **Swiper.js**: Touch slider for testimonials

## 📁 Project Structure

```
catererswebsite/
├── app/
│   ├── about/
│   │   └── page.js          # About Us page
│   ├── contact/
│   │   └── page.js          # Contact page
│   ├── gallery/
│   │   └── page.js          # Gallery page
│   ├── services/
│   │   └── page.js          # Services page
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── components/
│   ├── Footer.js            # Footer component
│   ├── Hero.js              # Hero section component
│   ├── Navbar.js            # Navigation bar component
│   └── TestimonialCarousel.js # Testimonials carousel
└── public/
    └── images/              # Image assets directory
```

## 🖼️ Images Setup

The website references several images that need to be added to the `public/images/` directory:

### Required Images:
- `hero-bg.jpg` - Hero background (1920x1080px or larger)
- `about-catering.jpg` - About section image (800x600px)
- `about-hero.jpg` - About page hero (1920x800px)
- `services-hero.jpg` - Services page hero (1920x800px)
- `gallery-hero.jpg` - Gallery page hero (1920x800px)
- `contact-hero.jpg` - Contact page hero (1920x800px)
- `gallery-1.jpg` through `gallery-8.jpg` - Gallery images (800x800px or larger)

### How to Add Images:

1. **Download or create your images** with the names listed above
2. **Optimize images** for web (use tools like TinyPNG or ImageOptim)
3. **Place images** in the `public/images/` directory
4. **Ensure proper dimensions** for best display quality

### Using Placeholder Images:

You can use placeholder services temporarily:
- Visit [Placeholder.com](https://placeholder.com)
- Or use [Unsplash Source](https://source.unsplash.com) for food/catering images

Example for hero background:
```jsx
// Replace in Hero.js
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1920')] bg-cover bg-center"></div>
```

## 🎨 Color Scheme

- **Gold**: `#D4AF37` - Accent color for highlights and CTAs
- **Maroon**: `#800020` - Primary brand color
- **Cream**: `#F5F5DC` - Background highlights
- **White**: `#FFFFFF` - Main background
- **Dark Gray**: `#1a1a1a` - Text and footer

## 📝 Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 🔧 Customization

### Updating Content:
- Edit page files in `app/[page]/page.js`
- Modify components in `components/`
- Update metadata in `app/layout.js`

### Styling:
- Global styles: `app/globals.css`
- Component styles: Tailwind utility classes
- Custom animations: Define in `globals.css`

### Colors:
- Modify CSS variables in `app/globals.css`
- Update Tailwind color classes throughout components

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Pages Overview

### Home Page
- Hero section with call-to-action
- About section with features
- Statistics showcase
- Services preview
- Gallery preview
- Testimonials carousel
- Final CTA section

### About Us
- Company story
- Core values
- Timeline/milestones
- Team members

### Services
- Detailed service listings
- Additional service options
- Process explanation
- CTA for consultation

### Gallery
- Image grid with categories
- Lightbox popup on click
- Responsive layout
- Filter options (ready for implementation)

### Contact
- Contact form with validation
- Contact information
- Google Maps embed
- Business hours

## 📞 Contact Form

The contact form currently logs to console. To make it functional:

1. Set up a backend API route in Next.js
2. Integrate with email service (SendGrid, Nodemailer, etc.)
3. Update `handleSubmit` in `app/contact/page.js`

## 🚀 Deployment

### Vercel (Recommended):
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms:
- Netlify
- AWS Amplify
- Digital Ocean App Platform

## 📄 License

This project is created for educational and commercial use.

## 🤝 Support

For questions or support, contact:
- Email: info@premiumcaterers.com
- Phone: +1 (234) 567-8900

---

**Note**: Remember to replace placeholder text, images, and contact information with your actual business details.
