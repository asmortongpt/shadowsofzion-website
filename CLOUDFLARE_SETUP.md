# Cloudflare Pages Deployment Guide for Shadows of Zion

## What You'll Get
- ✅ Free hosting on Cloudflare Pages
- ✅ Automatic HTTPS/SSL certificate
- ✅ Global CDN for fast loading
- ✅ Professional email (band@shadowsofzion.com)
- ✅ Connected to your shadowsofzion.com domain

---

## Step 1: Deploy to Cloudflare Pages (5 minutes)

### 1.1 Log into Cloudflare
1. Go to https://dash.cloudflare.com/
2. Log in (or create free account)

### 1.2 Connect GitHub Repository
1. Click **"Workers & Pages"** in the left sidebar
2. Click **"Create application"**
3. Click **"Pages"** tab
4. Click **"Connect to Git"**
5. Click **"Connect GitHub"**
6. Authorize Cloudflare to access your GitHub
7. Select repository: **shadowsofzion-website**
8. Click **"Begin setup"**

### 1.3 Configure Build Settings
**Project name:** `shadowsofzion-website`

**Production branch:** `master`

**Build settings:**
```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: (leave empty)
```

**Environment variables:** *(none needed for now)*

9. Click **"Save and Deploy"**

### 1.4 Wait for Build
- First build takes 2-3 minutes
- You'll get a URL like: `shadowsofzion-website.pages.dev`
- Test this URL to make sure site works!

---

## Step 2: Connect Your Domain (10 minutes)

### 2.1 Add Domain to Cloudflare
1. In Cloudflare dashboard, click **"Add a site"**
2. Enter: `shadowsofzion.com`
3. Select **Free plan**
4. Click **"Continue"**

### 2.2 Update Nameservers at Squarespace
1. Log into Squarespace
2. Go to **Settings** → **Domains** → `shadowsofzion.com`
3. Click **"Advanced Settings"**
4. Find **"Custom Nameservers"** section
5. Replace Squarespace nameservers with Cloudflare's:
   - You'll see 2 nameservers like:
     - `alice.ns.cloudflare.com`
     - `bob.ns.cloudflare.com`
   - Copy these EXACT nameservers from Cloudflare
6. Click **"Save"**

**⏰ DNS propagation takes 1-24 hours (usually 1-2 hours)**

### 2.3 Connect Domain to Pages
1. Go back to **Workers & Pages** → **shadowsofzion-website**
2. Click **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Enter: `shadowsofzion.com`
5. Click **"Continue"**
6. Also add: `www.shadowsofzion.com` (repeat step)
7. Cloudflare automatically configures DNS records

---

## Step 3: Set Up Email (5 minutes)

### 3.1 Enable Email Routing
1. In Cloudflare dashboard, select **shadowsofzion.com**
2. Click **"Email"** in left sidebar
3. Click **"Email Routing"**
4. Click **"Get started"**

### 3.2 Create Email Address
1. Click **"Destination addresses"** tab
2. Click **"Add destination"**
3. Enter your personal email where you want band emails forwarded
4. Check email and verify the link

### 3.3 Create Routing Rule
1. Click **"Routing rules"** tab
2. Click **"Create address"**
3. **Custom address:** `band`
4. **Action:** Forward to → [select your verified email]
5. Click **"Save"**

### 3.4 Repeat for Other Addresses
Create these additional email addresses:
- `booking@shadowsofzion.com` → forwards to your email
- `press@shadowsofzion.com` → forwards to your email

**Now you can receive emails at band@shadowsofzion.com!**

To **send** from band@shadowsofzion.com, you'll need to set up:
- Gmail forwarding (free but shows "via gmail.com")
- Cloudflare Email Workers (more complex)
- Or use Mailgun/SendGrid (cheap)

---

## Step 4: Update Website Links (2 minutes)

After domain is live:

1. **Log into your streaming platforms** (Spotify, Apple Music, Amazon)
2. **Update artist website** to: `https://shadowsofzion.com`
3. **Add to social media bios**

---

## Automatic Deployments

Every time you push to GitHub, Cloudflare automatically:
1. Detects the change
2. Builds your site
3. Deploys to shadowsofzion.com
4. Takes 2-3 minutes

No manual work needed!

---

## Troubleshooting

### Site not loading after 24 hours?
1. Check nameservers at Squarespace match Cloudflare exactly
2. In Cloudflare, check DNS tab for CNAME record pointing to `.pages.dev`

### Email not working?
1. Check destination email is verified
2. Send test email to band@shadowsofzion.com
3. Check your spam folder

### Build failed?
1. Check **Deployments** tab in Cloudflare Pages
2. Click failed build to see error log
3. Usually means missing dependency or build issue

---

## Cost: $0/month

Everything is FREE:
- ✅ Cloudflare Pages hosting
- ✅ SSL certificate
- ✅ CDN
- ✅ Email routing (receive unlimited)
- ✅ Automatic deployments

Only paid if you need:
- More than 500 builds/month (unlikely)
- Advanced email sending features

---

## Your Links

**GitHub Repo:** https://github.com/asmortongpt/shadowsofzion-website
**Cloudflare Dashboard:** https://dash.cloudflare.com/
**Live Site (after Step 2):** https://shadowsofzion.com

---

## Need Help?

1. Check build logs in Cloudflare Pages dashboard
2. Make sure shadowsofzion.com nameservers point to Cloudflare
3. Email routing requires domain to be fully on Cloudflare (Step 2 complete)

🤘 **Your website will be live at shadowsofzion.com in ~1-2 hours!**
