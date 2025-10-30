# API Deployment Setup - Cloudflare Pages

## Why API Deployment Failed

Your current Cloudflare API token is missing required permissions:
- ❌ Cloudflare Pages:Edit (write)
- ❌ User:Read

## Option 1: GitHub Actions Auto-Deploy (RECOMMENDED)

### Setup (2 minutes):

1. **Create New API Token with Correct Permissions:**
   - Go to: https://dash.cloudflare.com/profile/api-tokens
   - Click "Create Token"
   - Use template: "Edit Cloudflare Workers"
   - Add permission: `Cloudflare Pages:Edit`
   - Add permission: `User:Read`
   - Click "Continue to summary" → "Create Token"
   - **COPY THE TOKEN** (you'll only see it once)

2. **Get Your Cloudflare Account ID:**
   - Go to: https://dash.cloudflare.com
   - Select any site
   - Scroll down right sidebar
   - Copy "Account ID" (format: abc123def456...)

3. **Add Secrets to GitHub:**
   - Go to: https://github.com/asmortongpt/shadowsofzion-website/settings/secrets/actions
   - Click "New repository secret"
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: [paste token from step 1]
   - Click "Add secret"

   - Click "New repository secret" again
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: [paste account ID from step 2]
   - Click "Add secret"

4. **Push GitHub Actions Workflow:**
   ```bash
   cd /Users/andrewmorton/Documents/GitHub/ai-band-orchestrator/shadowsofzion-website
   git add .github/workflows/deploy.yml
   git commit -m "Add Cloudflare Pages auto-deploy workflow"
   git push
   ```

### Result:
- ✅ Every push to master branch automatically deploys to Cloudflare Pages
- ✅ Build logs visible in GitHub Actions tab
- ✅ Deployment happens in 2-3 minutes
- ✅ No manual steps needed after initial setup

---

## Option 2: Manual Cloudflare Dashboard (5 minutes)

If you don't want to set up API tokens, follow the manual guide:
- See: `CLOUDFLARE-DEPLOY-SIMPLE.md`
- Takes 5 minutes
- 12 clicks total
- No API token needed

---

## Option 3: CLI Deployment (After Token Update)

After creating a token with proper permissions:

```bash
export CLOUDFLARE_API_TOKEN=your_new_token_here

wrangler pages deploy .next \
  --project-name=shadowsofzion-website \
  --branch=master
```

---

## Recommended Path

**Use GitHub Actions (Option 1)** - Set it up once, automatic deployments forever.

1. Create proper API token (2 min)
2. Add to GitHub Secrets (1 min)
3. Push workflow file (30 sec)
4. ✅ Done - auto-deploys on every push

---

## Current Token Permissions

Your current token (`IlchPwcb1TxNQQotkBZaWgQ7_2uVCTVSyKyNJNWg`) has:
- ✅ Zone:Read (DNS reads)
- ✅ Zone:Edit (DNS edits)
- ❌ Cloudflare Pages:Edit (MISSING - needed for deployment)
- ❌ User:Read (MISSING - needed for API calls)

This is why API deployment fails with "Authentication error [code: 10000]"
