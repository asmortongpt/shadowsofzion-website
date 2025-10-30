# 🎸 Shadows of Zion - Official Website

**Professional band website built with Next.js, Tailwind CSS, and TypeScript**

Live at: **shadowsofzion.com** (after deployment)

---

## 🚀 Features

- ✅ **Fully Responsive** - Perfect on desktop, tablet, and mobile
- ✅ **Lightning Fast** - Built with Next.js 14 and optimized for performance
- ✅ **SEO Optimized** - Meta tags, structured data, and search engine friendly
- ✅ **Professional Design** - Rock band aesthetic with dark theme
- ✅ **Easy to Update** - Simple content management
- ✅ **Free Hosting** - Deploy to Vercel or Netlify for $0
- ✅ **Streaming Integration** - Ready for Spotify, Apple Music, Amazon Music
- ✅ **Email Capture** - Newsletter signup forms on every page
- ✅ **Contact Forms** - Professional contact page with email integration

---

## 📦 What's Included

### Pages:
1. **Home** (`/`) - Hero section, streaming integration, newsletter signup
2. **Music** (`/music`) - Album showcase, streaming links, track listing
3. **About** (`/about`) - Band story, mission, member bios
4. **Contact** (`/contact`) - Email addresses, contact form, social media, newsletter

### Components:
- **Navigation** - Responsive mobile menu
- **Footer** - Quick links, social media, branding
- **Custom Styling** - Brand colors (red, gold, dark)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Vercel (recommended) or Netlify
- **Domain:** shadowsofzion.com (custom domain support)

---

## 🏃 Quick Start

### 1. Install Dependencies
```bash
cd shadowsofzion-website
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website!

### 3. Build for Production
```bash
npm run build
```

---

## 🌐 Deploy to Production (FREE)

### Option 1: Vercel (Recommended) ⭐

**Why Vercel:**
- Made by the creators of Next.js
- Automatic deployments
- FREE for personal/band websites
- Custom domain support (shadowsofzion.com)
- Global CDN for fast loading
- Automatic HTTPS

**Deploy Steps:**

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New Project"
   - Select this repository
   - Vercel auto-detects Next.js

3. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live!

4. **Add Custom Domain**
   - Go to Project Settings > Domains
   - Add `shadowsofzion.com`
   - Update DNS records at your domain registrar:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```
   - Wait 24-48 hours for DNS propagation

**One-Click Deploy:**
```bash
npm install -g vercel
vercel
```

---

### Option 2: Netlify

**Deploy Steps:**

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "Add new site"
   - Choose "Import an existing project"
   - Select this repository

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Click "Deploy"

4. **Add Custom Domain**
   - Go to Site Settings > Domain Management
   - Click "Add custom domain"
   - Enter `shadowsofzion.com`
   - Update DNS records at your domain registrar

**One-Click Deploy:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🎨 Customize Your Website

### 1. Add Your Streaming Links

**File:** `app/page.tsx` and `app/music/page.tsx`

Replace placeholder links:
```tsx
// Before
<a href="#spotify" ...>

// After (get from CDBaby)
<a href="https://open.spotify.com/album/YOUR_ALBUM_ID" ...>
```

### 2. Add Spotify Embed

**Get embed code:**
1. Go to your album on Spotify
2. Click "..." → Share → Embed
3. Copy the iframe code

**Add to website:**
```tsx
// In app/music/page.tsx, replace:
<div className="bg-gray-900...">
  <p className="text-band-gold">🎵 Spotify Player Embed</p>
</div>

// With:
<iframe
  src="https://open.spotify.com/embed/album/YOUR_ALBUM_ID"
  width="100%"
  height="380"
  frameBorder="0"
  allowtransparency="true"
  allow="encrypted-media"
></iframe>
```

### 3. Add Track Names

**File:** `app/music/page.tsx`

Replace the track listing loop:
```tsx
const tracks = [
  "Track 1 Name",
  "Track 2 Name",
  // ... add all 16 tracks
]

{tracks.map((track, i) => (
  <div key={i} ...>
    <span ...>{(i + 1).toString().padStart(2, '0')}</span>
    <span ...>{track}</span>
  </div>
))}
```

### 4. Add Band Photos

1. Put images in `public/images/`
2. Update component:

```tsx
// In app/about/page.tsx
<div className="bg-gray-800 aspect-square rounded-lg mb-6 flex items-center justify-center">
  <Image
    src="/images/elijah-stone.jpg"
    alt="Elijah Stone"
    width={400}
    height={400}
    className="rounded-lg"
  />
</div>
```

### 5. Update Social Media Links

**Files:** All pages with social links

```tsx
// Before
<a href="#instagram" ...>

// After
<a href="https://instagram.com/shadowsofzion" target="_blank" ...>
```

### 6. Connect Email Forms

**Option A: Formspree (Free)**
```tsx
// In app/contact/page.tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: EmailJS**
1. Create account at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Add to contact form

**Option C: API Route**
Create `app/api/contact/route.ts` with email sending logic

---

## 📧 Email Setup

### Newsletter Signups

**Recommended:** [ConvertKit](https://convertkit.com) (free up to 1000 subscribers)

1. Create ConvertKit account
2. Create a form
3. Get embed code
4. Add to newsletter signup sections

**Alternative:** Mailchimp, SendGrid, EmailOctopus

---

## 🎯 After Deployment Checklist

### Week 1: Launch
- [ ] Deploy website to Vercel/Netlify
- [ ] Add custom domain (shadowsofzion.com)
- [ ] Add streaming links from CDBaby
- [ ] Add Spotify embed player
- [ ] Test all links on mobile and desktop
- [ ] Submit to Google Search Console
- [ ] Share website on social media

### Week 2: Optimize
- [ ] Add Google Analytics
- [ ] Set up email newsletter
- [ ] Create social media accounts
- [ ] Add real band photos
- [ ] Add track names
- [ ] Test contact form
- [ ] Check mobile responsiveness

### Week 3: Promote
- [ ] Post daily on social media
- [ ] Link to website in all bios
- [ ] Submit to Christian rock blogs
- [ ] Submit to Spotify playlists
- [ ] Email friends/family
- [ ] Drive traffic to streaming links

---

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static site
npm run export
```

---

## 📂 Project Structure

```
shadowsofzion-website/
├── app/
│   ├── layout.tsx         # Main layout with nav & footer
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── music/
│   │   └── page.tsx       # Music page
│   ├── about/
│   │   └── page.tsx       # About page
│   └── contact/
│       └── page.tsx       # Contact page
├── components/
│   ├── Navigation.tsx     # Header navigation
│   └── Footer.tsx         # Footer component
├── public/
│   └── images/            # Images go here
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

---

## 🎨 Brand Colors

```css
--band-red: #8B0000      /* Dark red for headings */
--band-gold: #FFD700     /* Gold for accents */
--band-dark: #1a1a1a     /* Dark background */
```

---

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// In layout component
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🚨 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Styling Not Working

```bash
# Reinstall Tailwind
npm install -D tailwindcss @tailwindcss/postcss postcss
```

### Deployment Fails

- Check `next.config.js` has `output: 'export'`
- Verify all imports are correct
- Check build logs for specific errors

---

## 📞 Support

**Need help?**
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Support: [vercel.com/help](https://vercel.com/help)
- Tailwind Docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## 🎸 Your Path to Success

1. **Today:** Deploy this website
2. **Week 1:** Add streaming links and content
3. **Week 2:** Create social media accounts
4. **Week 3:** Launch daily content posting
5. **Month 1:** Hit 334 Spotify streams = **$1 EARNED!**

---

**FROM DUST TO GLORY STARTS NOW! 🔥**

**Let's get shadowsofzion.com live and start earning that first dollar!** 🎸✝️

---

## 📄 License

ISC - Free to use and modify

## 🤘 Rock On!

Built with ❤️ for Shadows of Zion
