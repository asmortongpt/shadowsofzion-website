# Deploy Shadows of Zion Website - Simple Guide

Your website is **built and ready**. Just need to deploy it!

## ✅ What's Ready:
- Production build complete
- GitHub repository live
- Domain configured
- DNS active

## 🚀 Choose ONE Deployment Option:

---

### Option 1: Netlify (EASIEST - 2 clicks)

1. **Go to:** https://app.netlify.com/start
2. **Click:** "Import from Git"
3. **Select:** GitHub → `shadowsofzion-website`
4. **Build settings** (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next`
   - **Click "Deploy"**

**Site will be live in 2 minutes!**

Then add custom domain:
- Site settings → Domain management
- Add custom domain: `shadowsofzion.com`

**DONE!**

---

### Option 2: Cloudflare Pages (What We Set Up)

1. **Go to:** https://dash.cloudflare.com/
2. **Click:** Workers & Pages (sidebar)
3. **Click:** "Create application" → "Pages" → "Connect to Git"
4. **Select:** `shadowsofzion-website`
5. **Framework:** Next.js
6. **Build command:** `npm run build`
7. **Build output:** `.next`
8. **Click:** "Save and Deploy"

**Site will be live in 3 minutes!**

Then add custom domain:
- Custom domains tab
- Add: `shadowsofzion.com`

**DONE!**

---

### Option 3: Vercel (FASTEST - 1 command)

In terminal:

```bash
cd /Users/andrewmorton/Documents/GitHub/ai-band-orchestrator/shadowsofzion-website

# Login (opens browser)
vercel login

# Deploy!
vercel --prod
```

Follow prompts, then add custom domain in Vercel dashboard.

**DONE!**

---

## 🎯 After Deployment:

1. **Test:** Visit https://shadowsofzion.com
2. **Claim Instagram:** @shadowsofzionband
3. **Add streaming links** when album drops
4. **Start promoting!**

---

## 💡 Recommended: Netlify

**Why?** Simplest, free, auto-deploys from GitHub, great for Next.js.

**2 minutes total:** Import repo → Deploy → Add domain → LIVE!

---

## Need Help?

Run in terminal:
```bash
open https://app.netlify.com/start
```

Then follow Option 1 above.

🤘 **Your site is ready to rock!**
