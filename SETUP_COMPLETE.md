# Shadows of Zion - Setup Complete! 🤘

## ✅ What's Been Done

### 1. Website Built & Deployed to GitHub
- ✅ Professional Next.js website created
- ✅ 4 pages: Home, Music, About, Contact
- ✅ Professional guitar photography
- ✅ Authentic band messaging
- ✅ Pushed to GitHub: https://github.com/asmortongpt/shadowsofzion-website

### 2. Cloudflare Configured
- ✅ Domain added to Cloudflare
- ✅ DNS records created for website
- ✅ All Zoho Mail DNS records configured:
  - MX records (mx.zoho.com, mx2.zoho.com, mx3.zoho.com)
  - SPF record (email authentication)
  - DMARC record (email security)
- ✅ Website CNAME records ready

**Zone ID:** `c3f9c95fbb28491f17340b1ab1126952`
**Status:** Pending nameserver update

---

## 📋 What YOU Need to Do (30 minutes total)

### Step 1: Update Nameservers at Squarespace (10 min)

1. **Log into Squarespace:** https://account.squarespace.com/
2. **Go to:** Settings → Domains → shadowsofzion.com
3. **Click:** Advanced Settings
4. **Find:** Custom Nameservers section
5. **Replace** Squarespace nameservers with these Cloudflare nameservers:
   ```
   bjorn.ns.cloudflare.com
   isabel.ns.cloudflare.com
   ```
6. **Save changes**

**⏰ DNS will propagate in 1-24 hours (usually 1-2 hours)**

---

### Step 2: Create Zoho Mail Account (10 min)

1. **Go to:** https://www.zoho.com/mail/zohomail-pricing.html
2. **Click:** "SIGN UP NOW" under "Forever Free Plan"
3. **Enter domain:** shadowsofzion.com
4. **Create email:** band@shadowsofzion.com
5. **Set password** for the mailbox

Zoho will show you two codes:
- **Verification TXT record** (looks like: `zoho-verification=1234567890abcdef`)
- **DKIM key** (long string starting with `v=DKIM1; k=rsa; p=...`)

6. **Copy both codes** and run this command:

```bash
cd /Users/andrewmorton/Documents/GitHub/ai-band-orchestrator/shadowsofzion-website
./update-zoho-records.sh "zoho-verification=YOUR-CODE" "v=DKIM1; k=rsa; p=YOUR-DKIM-KEY"
```

7. **Wait 5-10 minutes** then click "Verify" in Zoho dashboard

---

### Step 3: Deploy to Cloudflare Pages (10 min)

1. **Go to:** https://dash.cloudflare.com/
2. **Log in** (use same login as before)
3. **Click:** Workers & Pages (left sidebar)
4. **Click:** Create application
5. **Click:** Pages tab
6. **Click:** Connect to Git
7. **Select:** shadowsofzion-website repository
8. **Configure build:**
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Build output directory: `.next`
9. **Click:** Save and Deploy

**First build takes 2-3 minutes**

10. **After deployment completes:**
    - Click **Custom domains**
    - Click **Set up a custom domain**
    - Enter: `shadowsofzion.com`
    - Click **Continue** (Cloudflare auto-configures)
    - Repeat for: `www.shadowsofzion.com`

---

## 🎉 When Complete

After all 3 steps (1-2 hours total for DNS propagation):

### Your Website
- ✅ **https://shadowsofzion.com** - Live and working!
- ✅ **https://www.shadowsofzion.com** - Also works!
- ✅ Professional guitar-themed design
- ✅ All pages complete and accurate

### Your Email
- ✅ **band@shadowsofzion.com** - Real mailbox with 5GB storage
- ✅ Can send and receive emails
- ✅ Access at: https://mail.zoho.com

**Create more emails later:**
- booking@shadowsofzion.com
- press@shadowsofzion.com

Just create them in Zoho dashboard (no DNS changes needed)

---

## 🎵 Next: Add Your Music

Once your album goes live on streaming platforms (CDBaby usually takes 1-4 weeks):

1. Get your **Spotify artist/album URLs** from CDBaby dashboard
2. Get your **Apple Music** and **Amazon Music** links
3. Update the website:

```bash
# Edit these files to add real streaming links:
app/page.tsx        # Homepage streaming buttons
app/music/page.tsx  # Music page streaming links

# Replace:
YOUR-ARTIST-ID → your real Spotify artist ID
YOUR-ALBUM-ID  → your real album ID
```

4. Add **Spotify embed code** (get from Spotify for Artists)
5. Add **real track names** instead of "Track 1-16"

Then push to GitHub:
```bash
git add .
git commit -m "Add real streaming links"
git push
```

Cloudflare Pages will auto-deploy in 2 minutes!

---

## 🚀 Automatic Deployments

Every time you push to GitHub:
1. Cloudflare detects the change
2. Builds your site
3. Deploys to shadowsofzion.com
4. Takes 2-3 minutes

**No manual work needed!**

---

## 💰 Cost

Everything is **FREE**:
- ✅ Cloudflare Pages hosting
- ✅ SSL certificate
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ Zoho Mail (5GB, up to 5 users)
- ✅ Unlimited bandwidth

---

## 📂 Files Created

All in: `/Users/andrewmorton/Documents/GitHub/ai-band-orchestrator/shadowsofzion-website/`

**Website files:**
- `app/` - All pages (home, music, about, contact)
- `components/` - Navigation and footer
- `public/images/` - Guitar photography
- `package.json` - Dependencies

**Setup scripts:**
- `setup-cloudflare.py` - Complete Cloudflare setup (✅ already ran)
- `update-zoho-records.sh` - Update Zoho verification codes
- `CLOUDFLARE_SETUP.md` - Detailed setup guide
- `SETUP_COMPLETE.md` - This file!

**Documentation:**
- `README.md` - Project overview
- `DEPLOY.md` - Deployment guide
- `FINAL_SUMMARY.md` - Technical summary

---

## 🆘 Troubleshooting

### Site not loading after 24 hours?
- Check nameservers at Squarespace match Cloudflare exactly
- Check Cloudflare dashboard for active zone status

### Email not working?
- Make sure you ran `update-zoho-records.sh` with verification codes
- Check spam folder
- Verify in Zoho dashboard shows "Verified"

### Build failed on Cloudflare Pages?
- Check Deployments tab for error log
- Usually means missing dependency

### Need help?
- Check Cloudflare dashboard logs
- Email setup scripts created
- All source code on GitHub

---

## 🤘 Rock On!

Your professional band website and email are ready to go!

**Live at:** https://shadowsofzion.com (after Step 1 completes)
**Email:** band@shadowsofzion.com (after Steps 1 & 2)
**GitHub:** https://github.com/asmortongpt/shadowsofzion-website

Share your streaming links when your album drops and start getting those streams! 334 streams = your first $1!

**Faith. Fire. Fury.**
