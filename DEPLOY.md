# 🚀 Quick Deploy Guide - Shadows of Zion Website

**Get your band website live in under 10 minutes!**

---

## ⚡ Fastest Path: Deploy to Vercel NOW

###  Step 1: Create Vercel Account (2 minutes)
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel

### Step 2: Import Project (3 minutes)
1. Click "Add New Project"
2. Click "Import Git Repository"
3. Find "shadowsofzion-website" repository
4. Click "Import"

### Step 3: Configure (1 minute)
Vercel auto-detects Next.js - **no configuration needed!**

Just click "Deploy"

### Step 4: Wait for Deployment (2-3 minutes)
Watch the build logs. When you see:
```
✓ Build successful
🎉 Deployment ready
```

Your site is LIVE!

### Step 5: Get Your URL
Vercel gives you a URL like:
```
https://shadowsofzion-website-xxx.vercel.app
```

**YOUR WEBSITE IS NOW ONLINE!** 🎸

---

## 🌐 Add Custom Domain (shadowsofzion.com)

### In Vercel:
1. Go to Project Settings
2. Click "Domains"
3. Type: `shadowsofzion.com`
4. Click "Add"

### In Squarespace (or your domain registrar):
1. Go to Settings > Domains
2. Click DNS Settings
3. Add these records:

**For Root Domain (@):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**For WWW:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

4. Save changes
5. Wait 24-48 hours for DNS propagation

**That's it!** shadowsofzion.com will now point to your Vercel site.

---

## 🎯 One-Command Deploy

If you have Node.js installed:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (from project directory)
cd shadowsofzion-website
vercel
```

Follow the prompts - done in 30 seconds!

---

## 📊 After Deployment

### 1. Test Your Site
Visit your Vercel URL and check:
- [ ] Homepage loads
- [ ] All pages work (Music, About, Contact)
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Forms work

### 2. Add Streaming Links
1. Get links from CDBaby
2. Edit `app/page.tsx` and `app/music/page.tsx`
3. Replace `#spotify`, `#apple`, `#amazon` with real links
4. Git commit and push
5. Vercel auto-deploys!

### 3. Add Content
- Band photos → `public/images/`
- Track names → `app/music/page.tsx`
- Social links → All page files

Every git push triggers a new deployment automatically!

---

## 🔄 Update Workflow

```bash
# Make changes to your code
# ...

# Commit and push
git add .
git commit -m "Update streaming links"
git push

# Vercel automatically deploys!
# Check deployment at vercel.com/dashboard
```

---

## 🆓 Cost Breakdown

**Vercel Hobby Plan (FREE):**
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- 100GB bandwidth/month
- Custom domains
- Automatic previews

**Perfect for a band website!**

When you need more (unlikely for a while):
- Vercel Pro: $20/month
- But stick with free until you're famous! 🎸

---

## 🚨 Quick Fixes

### Site not updating after push?
```bash
# Force redeploy in Vercel
vercel --force
```

### Build failing?
Check Vercel build logs:
1. Go to vercel.com/dashboard
2. Click your project
3. Click failed deployment
4. Read error logs

### Domain not working?
- Wait 24-48 hours for DNS
- Check DNS records are correct
- Use [dnschecker.org](https://dnschecker.org) to verify

---

## 📈 Next Steps

1. **Today**: Deploy to Vercel ✅
2. **Tomorrow**: Add streaming links
3. **Day 3**: Add custom domain
4. **Week 1**: Share on social media
5. **Month 1**: Hit 334 streams = $1!

---

## 🎸 YOU'RE LIVE!

Your band website is now online, professional, and ready to drive streaming revenue!

**Share it everywhere:**
- Social media bios
- Email signatures
- Business cards
- YouTube descriptions
- Instagram stories
- Every post

**Every click brings you closer to that first dollar!**

---

**ROCK ON!** 🤘🔥

From Dust to Glory starts NOW!
