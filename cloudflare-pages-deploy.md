# Cloudflare Pages Deployment - Exact Steps

## 🚀 Deploy Shadows of Zion to Cloudflare Pages

I've opened Cloudflare Pages in your browser. Follow these EXACT steps:

---

## Step 1: Connect to GitHub (1 minute)

You should see the Cloudflare Pages dashboard.

1. **Click:** "Connect to Git" button
2. **Select:** GitHub
3. **Authorize:** Cloudflare Pages to access your GitHub
   - Click "Install & Authorize"
   - Select: "Only select repositories"
   - Choose: **shadowsofzion-website**
   - Click "Install"

---

## Step 2: Configure Build Settings (30 seconds)

After connecting GitHub, you'll see configuration:

**Project name:** `shadowsofzion-website` (keep it)

**Production branch:** `master`

**Build settings:**
```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: (leave empty)
```

**Environment variables:** *(skip - none needed)*

3. **Click:** "Save and Deploy"

---

## Step 3: Wait for Build (2-3 minutes)

You'll see:
- ✅ Cloning repository
- ✅ Installing dependencies
- ✅ Building application
- ✅ Deploying

**First build takes 2-3 minutes.**

You'll get a temporary URL like: `shadowsofzion-website.pages.dev`

---

## Step 4: Add Custom Domain (30 seconds)

After deployment completes:

1. **Click:** "Custom domains" tab
2. **Click:** "Set up a custom domain"
3. **Enter:** `shadowsofzion.com`
4. **Click:** "Continue"
5. Cloudflare will say "DNS records already configured" ✅
6. **Click:** "Activate domain"

Repeat for www:
7. **Click:** "Set up a custom domain" again
8. **Enter:** `www.shadowsofzion.com`
9. **Click:** "Continue" → "Activate domain"

---

## ✅ DONE!

Your site will be live at:
- **https://shadowsofzion.com**
- **https://www.shadowsofzion.com**
- Temporary URL: **https://shadowsofzion-website.pages.dev**

---

## 🔄 Automatic Deployments

Every time you push to GitHub:
- Cloudflare detects the change
- Builds your site
- Deploys automatically
- Takes 2-3 minutes

**No manual work needed after initial setup!**

---

## Troubleshooting

### Build fails?
- Check "Deployments" tab for error log
- Usually means missing dependency
- Message me the error

### Domain not working?
- Wait 5-10 minutes for DNS propagation
- Check "Custom domains" shows "Active"
- DNS was already configured earlier

### Need help?
- Cloudflare docs: https://developers.cloudflare.com/pages/
- Or just ask me!

---

🤘 **Your band website is about to be LIVE!**
