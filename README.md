# Gamra Wood Craft Website

A responsive, multilingual (EN, FR, AR) static website for a custom wood furniture business built with HTML5, CSS3, and JavaScript.

## Features

✅ **Fully Responsive** - Works seamlessly on mobile (360px), tablet (768px), desktop (1024px), and wide screens (1440px)
✅ **Multilingual** - Support for English, French, and Arabic with RTL (right-to-left) support
✅ **Static Site** - No dependencies, no build system needed - just deploy to GitHub Pages or any static host
✅ **Custom i18n System** - Language switching with localStorage persistence
✅ **Portfolio System** - Dynamic portfolio with filtering by category
✅ **Modern Design** - Beautiful color palette and typography with Cairo and Poppins fonts
✅ **Contact Form** - Integrated with Formspree for form submissions
✅ **Legal Pages** - Privacy Policy and Terms & Conditions included
✅ **SEO Ready** - Proper meta tags and semantic HTML

## File Structure

```
/
├── index.html                              # Home page
├── services.html                           # Services page
├── portfolio.html                          # Portfolio gallery
├── item.html                               # Portfolio detail page
├── about.html                              # About page
├── 404.html                                # 404 error page
├── /privacy-terms/
│   ├── privacy-policy.html                 # Privacy policy
│   └── terms-conditions.html               # Terms & conditions
├── /css/
│   ├── base.css                            # Base styles & CSS variables
│   └── components.css                      # Header, footer, cards, etc.
├── /js/
│   ├── i18n.js                             # Internationalization system
│   ├── app.js                              # Common app functionality
│   └── portfolio.js                        # Portfolio page functionality
├── /data/
│   └── portfolio.json                      # Portfolio items data
├── /locales/
│   ├── en.json                             # English translations
│   ├── fr.json                             # French translations
│   └── ar.json                             # Arabic translations
├── /assets/
│   ├── /images/                            # Portfolio and page images
│   ├── /icons/                             # Icon assets
│   └── /fonts/                             # Custom fonts (if needed)
└── README.md                               # This file
```

## Setup & Development

### No Build System Required
This is a static site with no build dependencies. You can work directly with HTML, CSS, and JS files.

### Local Testing
1. Clone or download this repository
2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (if you have http-server installed)
   http-server
   ```
3. Visit `http://localhost:8000`

### Editing Content

**Page Content**: Edit HTML files directly in your editor
**Translations**: Update JSON files in `/locales/` directory
**Portfolio Items**: Modify `/data/portfolio.json`
**Styles**: Edit CSS files in `/css/` directory

## Multilingual System

### How It Works
- User selects language (EN, FR, AR)
- i18n.js loads the appropriate JSON translation file
- All `data-i18n` attributes are replaced with translated text
- RTL layout automatically applied for Arabic

### Adding/Editing Translations
1. Open the language file (e.g., `/locales/en.json`)
2. Update or add translation keys
3. Add `data-i18n="key.path"` attribute to HTML elements
4. Example:
   ```html
   <h1 data-i18n="hero.headline">Expertly Crafted Wood Furniture</h1>
   ```

## Portfolio System

### About Portfolio
Portfolio items are defined in `/data/portfolio.json`. Each item includes:
- Title, category, image
- Multilingual descriptions
- Materials and specifications

### Adding Portfolio Items
1. Edit `/data/portfolio.json`
2. Add new object with required fields:
   ```json
   {
     "id": 10,
     "title": "Project Name",
     "category": "kitchen",
     "image": "/assets/images/project-10.jpg",
     "description_en": "English description",
     "description_fr": "French description",
     "description_ar": "Arabic description",
     "materials": "Oak wood, hardware",
     "specs": "Dimensions here"
   }
   ```

## Contact Form

The contact form uses **Formspree** for handling submissions.

### Setup Formspree
1. Go to https://formspree.io
2. Create a free account
3. Create a new form and get your form ID
4. Update the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Responsive Design

The site is tested at these breakpoints:
- **Mobile**: 360px (iPhone SE, small phones)
- **Tablet**: 768px (iPad, tablets)
- **Desktop**: 1024px (laptops)
- **Wide**: 1440px+ (desktops)

CSS Grid and Flexbox automatically adapt to screen size.

## Color Palette

```css
--color-white: #FFFFFF
--color-light-gray: #F2F2F2
--color-beige: #EAE4D5
--color-taupe: #B6B09F
--color-black: #000000
```

## Typography

- **Headings**: Cairo (Arabic), Poppins (Latin)
- **Body**: Poppins (all languages)
- Fonts loaded from Google Fonts CDN

## RTL Support

Arabic content automatically gets:
- `dir="rtl"` on HTML element
- Right-aligned text
- Reversed flex layouts
- Mirrored icon handling where needed

## Deployment to GitHub Pages

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/gamra-wood-craft.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Select "Deploy from a branch"
   - Choose `main` branch, `/root` folder
   - Click Save

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/gamra-wood-craft/`
   - Or set a custom domain in repository Settings

### Custom Domain
1. In repository Settings → Pages
2. Add your custom domain (e.g., `gamrawoodcraft.com`)
3. Update DNS records with your domain registrar
4. Verify domain ownership

## Performance Optimization

- **Images**: Use optimized JPG/WebP files, add `loading="lazy"` to offscreen images
- **CSS**: Minify before production deployment
- **JS**: Already lightweight, no external dependencies
- **Lighthouse Target**: 80+ score on all metrics

## Testing Checklist

- [ ] Language switcher works (EN, FR, AR)
- [ ] RTL display correct for Arabic
- [ ] Responsive at 360px, 768px, 1024px, 1440px
- [ ] Navigation links active on current page
- [ ] Portfolio filters work correctly
- [ ] Individual portfolio items load correctly
- [ ] Contact form submits successfully
- [ ] All links are working (no 404s)
- [ ] Images load properly
- [ ] Footer links work
- [ ] Mobile menu opens/closes
- [ ] Lighthouse score 80+

## Common Issues & Solutions

### Images Not Loading
- Check image paths (should be `/assets/images/filename.jpg`)
- Verify image files exist in the directory
- Ensure file extensions match

### Translations Not Showing
- Check `data-i18n` attribute spelling
- Verify key exists in JSON file (e.g., `hero.headline`)
- Check browser console for errors

### Form Not Working
- Update Formspree form ID
- Ensure form action URL is correct
- Check Formspree account is active

### RTL Issues
- Arabic language should automatically set RTL
- Check `dir="rtl"` is applied to html element
- Test in Firefox and Chrome (best RTL support)

## Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: All modern versions

## Future Enhancements (P1/P2)

- [ ] Blog/news page
- [ ] Interactive gallery lightbox
- [ ] Basic analytics integration
- [ ] Portfolio search functionality
- [ ] Testimonials section
- [ ] Newsletter subscription

## Support & Questions

For questions about the website:
- 📧 contact@gamrawoodcraft.com
- 📍 Gamra, Medina, Morocco
- 📞 +212 XXX XXX XXX

## License

© 2024 Gamra Wood Craft. All rights reserved.
