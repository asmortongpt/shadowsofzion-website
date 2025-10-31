#!/bin/bash

# Shadows of Zion - Cloudflare Pages Deployment Script
# Run this after: wrangler login

echo "🎸 Deploying Shadows of Zion to Cloudflare Pages..."
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler not found. Installing..."
    npm install -g wrangler
fi

# Check if logged in
echo "Checking Cloudflare authentication..."
if ! wrangler whoami &> /dev/null; then
    echo "❌ Not logged in to Cloudflare"
    echo "Please run: wrangler login"
    echo "Then run this script again"
    exit 1
fi

echo "✅ Authenticated"
echo ""

# Build
echo "📦 Building website..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build successful"
echo ""

# Deploy
echo "🚀 Deploying to Cloudflare Pages..."
wrangler pages deploy out --project-name=shadowsofzion-website

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ DEPLOYMENT SUCCESSFUL!"
    echo ""
    echo "Your site is live at:"
    echo "🎵 https://shadowsofzion.com"
    echo ""
    echo "Changes deployed:"
    echo "  ✅ Real track names (no more placeholders)"
    echo "  ✅ Biblical context for all 16 songs"
    echo "  ✅ Interactive track modals"
    echo "  ✅ Comprehensive analytics"
    echo ""
else
    echo ""
    echo "❌ Deployment failed"
    echo ""
    echo "Try these solutions:"
    echo "1. Run 'wrangler login' and try again"
    echo "2. Deploy manually via Cloudflare dashboard"
    echo "3. See CLOUDFLARE-DEPLOY-NOW.md for more options"
fi
