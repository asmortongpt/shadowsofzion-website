# ⚡ Deploy to Cloudflare Pages NOW (3 Methods)

## 🚨 THE ISSUE
Your API tokens don't have Cloudflare Pages deployment permissions. The tokens need to be refreshed or you need to use one of these methods:

---

## ✅ METHOD 1: Cloudflare Dashboard (FASTEST - 60 seconds)

1. Go to: https://dash.cloudflare.com
2. Log in with sara@capitaltechalliance.com
3. Click **"Pages"** in the left sidebar
4. Find **"shadowsofzion-website"** project
5. Click **"View build"** or **"Retry deployment"**
6. OR click **"Create deployment"** → **"Upload assets"** → Drag the `/out` folder
7. Wait 30-60 seconds
8. **DONE!** Your site is live at shadowsofzion.com

**This is the easiest and fastest method!**

---

## ✅ METHOD 2: Connect GitHub to Cloudflare (AUTO-DEPLOY FOREVER)

**Setup once, deploy automatically on every git push:**

1. Go to https://dash.cloudflare.com → **Pages**
2. Click your **shadowsofzion-website** project
3. Go to **Settings** → **Builds & deployments**
4. Click **"Connect to Git"**
5. Select **GitHub**
6. Authorize Cloudflare to access your GitHub
7. Select repository: **asmortongpt/shadowsofzion-website**
8. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Branch**: `master`
9. Click **"Save and Deploy"**

**From now on**: Every git push automatically deploys! No manual work needed.

---

## ✅ METHOD 3: Wrangler CLI (For Command Line Lovers)

**One-time setup:**
```bash
cd /Users/andrewmorton/Documents/GitHub/ai-band-orchestrator/shadowsofzion-website

# Login interactively (opens browser)
wrangler login

# Deploy
wrangler pages deploy out --project-name=shadowsofzion-website
```

**Future deploys:**
```bash
npm run build
wrangler pages deploy out --project-name=shadowsofzion-website
```

---

## 🎯 RECOMMENDED: Use Method 2 (GitHub Auto-Deploy)

**Why?** Because then you never have to think about deployment again. Just:

1. Make code changes
2. `git add . && git commit -m "update" && git push`
3. Cloudflare automatically builds and deploys
4. Live site updates in 60 seconds

---

## 🔧 WHAT TO DO IF CLOUDFLARE PAGES PROJECT DOESN'T EXIST

If you don't see "shadowsofzion-website" in Cloudflare Pages:

1. Go to https://dash.cloudflare.com → **Pages**
2. Click **"Create a project"**
3. Click **"Connect to Git"**
4. Select **GitHub** → **asmortongpt/shadowsofzion-website**
5. Configure:
   - **Project name**: shadowsofzion-website
   - **Build command**: npm run build
   - **Build output directory**: out
   - **Root directory**: (leave blank)
6. Click **"Save and Deploy"**
7. Wait for first deployment (~2 minutes)
8. Go to **Custom domains** → Add **shadowsofzion.com**

---

## 📋 CURRENT STATUS

✅ **Code updated** - Track names, biblical context, analytics
✅ **Build successful** - No errors, ready to deploy
✅ **Pushed to GitHub** - master branch up to date
❌ **Live site** - Still showing old version (needs deployment)

**The ONLY thing left**: Deploy via Method 1, 2, or 3 above

---

## 🎸 WHAT'S WAITING TO GO LIVE

Your fans are about to get:
- Real song titles (no more "Track 1, Track 2")
- Biblical stories for all 16 tracks
- Click any track → Beautiful modal with scripture and story
- "Play on Spotify" buttons
- Full analytics tracking (every click, every view)
- Professional, engaging experience

**All ready. Just needs one deployment click.**

---

## ⚠️ WHY API DEPLOYMENT FAILED

Your `.env` has these tokens:
```
CLOUDFLARE_API_TOKEN=IlchPwcb1TxNQQotkBZaWgQ7_2uVCTVSyKyNJNWg
GlobalAPI=6bdd0035ff7c205a41e103b6b3825f6f78ad0
```

**Problem**: These tokens don't have **Cloudflare Pages:Edit** permission

**Solution**: Either:
- Use dashboard (Method 1)
- Connect GitHub (Method 2)
- Login with `wrangler login` (Method 3)

Or create a new API token at https://dash.cloudflare.com/profile/api-tokens with these permissions:
- Account → Cloudflare Pages → Edit
- User → User Details → Read

---

## 🚀 DEPLOY NOW - PICK A METHOD ABOVE

**Fastest**: Method 1 (60 seconds)
**Best long-term**: Method 2 (auto-deploy forever)
**CLI fans**: Method 3 (wrangler)
