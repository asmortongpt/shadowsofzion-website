#!/bin/bash
# Cloudflare Automation Script for Shadows of Zion
# This script will:
# 1. Add domain to Cloudflare
# 2. Create DNS records for website
# 3. Set up email routing
# 4. Create email addresses

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}   Shadows of Zion - Cloudflare Setup Automation${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check if API token is provided
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo -e "${RED}ERROR: CLOUDFLARE_API_TOKEN environment variable not set${NC}"
    echo ""
    echo "Get your API token from: https://dash.cloudflare.com/profile/api-tokens"
    echo ""
    echo "Then run:"
    echo "  export CLOUDFLARE_API_TOKEN='your-token-here'"
    echo "  ./cloudflare-setup.sh"
    exit 1
fi

# Configuration
DOMAIN="shadowsofzion.com"
DESTINATION_EMAIL="" # Will be prompted

# Ask for destination email if not set
if [ -z "$DESTINATION_EMAIL" ]; then
    echo -e "${YELLOW}What email should band@shadowsofzion.com forward to?${NC}"
    read -p "Your email: " DESTINATION_EMAIL
    echo ""
fi

echo -e "${GREEN}🚀 Starting Cloudflare setup for ${DOMAIN}...${NC}"
echo ""

# Function to make Cloudflare API calls
cf_api() {
    local method=$1
    local endpoint=$2
    local data=$3

    if [ -z "$data" ]; then
        curl -s -X "$method" \
            "https://api.cloudflare.com/client/v4/$endpoint" \
            -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
            -H "Content-Type: application/json"
    else
        curl -s -X "$method" \
            "https://api.cloudflare.com/client/v4/$endpoint" \
            -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
            -H "Content-Type: application/json" \
            -d "$data"
    fi
}

# Step 1: Add domain to Cloudflare
echo -e "${YELLOW}📍 Step 1: Adding domain to Cloudflare...${NC}"
ZONE_RESPONSE=$(cf_api POST "zones" "{\"name\":\"$DOMAIN\",\"type\":\"full\"}")

if echo "$ZONE_RESPONSE" | grep -q "\"success\":true"; then
    ZONE_ID=$(echo "$ZONE_RESPONSE" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
    echo -e "${GREEN}✅ Domain added successfully!${NC}"
    echo "   Zone ID: $ZONE_ID"
else
    # Domain might already exist, try to get it
    ZONES_LIST=$(cf_api GET "zones?name=$DOMAIN")
    ZONE_ID=$(echo "$ZONES_LIST" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

    if [ -n "$ZONE_ID" ]; then
        echo -e "${GREEN}✅ Domain already exists in Cloudflare${NC}"
        echo "   Zone ID: $ZONE_ID"
    else
        echo -e "${RED}❌ Failed to add domain${NC}"
        echo "$ZONE_RESPONSE"
        exit 1
    fi
fi
echo ""

# Get nameservers
NAMESERVERS=$(cf_api GET "zones/$ZONE_ID" | grep -o '"name_servers":\[[^]]*\]' | sed 's/"name_servers"://;s/\[//;s/\]//;s/"//g')
echo -e "${YELLOW}📝 Update these nameservers at Squarespace:${NC}"
echo "$NAMESERVERS" | tr ',' '\n' | sed 's/^/   • /'
echo ""

# Step 2: Create DNS records for Cloudflare Pages
echo -e "${YELLOW}📍 Step 2: Creating DNS records...${NC}"

# Create CNAME for root domain (will be updated after Pages deployment)
CNAME_RESPONSE=$(cf_api POST "zones/$ZONE_ID/dns_records" \
    "{\"type\":\"CNAME\",\"name\":\"@\",\"content\":\"shadowsofzion-website.pages.dev\",\"proxied\":true}")

if echo "$CNAME_RESPONSE" | grep -q "\"success\":true"; then
    echo -e "${GREEN}✅ Created CNAME record for root domain${NC}"
else
    echo -e "${YELLOW}⚠️  CNAME record might already exist${NC}"
fi

# Create CNAME for www
WWW_RESPONSE=$(cf_api POST "zones/$ZONE_ID/dns_records" \
    "{\"type\":\"CNAME\",\"name\":\"www\",\"content\":\"shadowsofzion-website.pages.dev\",\"proxied\":true}")

if echo "$WWW_RESPONSE" | grep -q "\"success\":true"; then
    echo -e "${GREEN}✅ Created CNAME record for www subdomain${NC}"
else
    echo -e "${YELLOW}⚠️  WWW record might already exist${NC}"
fi
echo ""

# Step 3: Enable Email Routing
echo -e "${YELLOW}📍 Step 3: Setting up email routing...${NC}"

# Enable email routing for the zone
EMAIL_ENABLE=$(cf_api POST "zones/$ZONE_ID/email/routing/enable")

if echo "$EMAIL_ENABLE" | grep -q "\"success\":true"; then
    echo -e "${GREEN}✅ Email routing enabled${NC}"
else
    echo -e "${YELLOW}⚠️  Email routing might already be enabled${NC}"
fi

# Create destination address
DEST_RESPONSE=$(cf_api POST "accounts/$(cf_api GET "zones/$ZONE_ID" | grep -o '"account_id":"[^"]*"' | cut -d'"' -f4)/email/routing/addresses" \
    "{\"email\":\"$DESTINATION_EMAIL\"}")

if echo "$DEST_RESPONSE" | grep -q "\"success\":true"; then
    echo -e "${GREEN}✅ Destination email added: $DESTINATION_EMAIL${NC}"
    echo -e "${YELLOW}⚠️  Check your email and click the verification link!${NC}"
else
    echo -e "${YELLOW}⚠️  Destination might already exist${NC}"
fi
echo ""

# Step 4: Create email routing rules
echo -e "${YELLOW}📍 Step 4: Creating email addresses...${NC}"

ACCOUNT_ID=$(cf_api GET "zones/$ZONE_ID" | grep -o '"account_id":"[^"]*"' | cut -d'"' -f4)

# Create band@shadowsofzion.com
cf_api POST "zones/$ZONE_ID/email/routing/rules" \
    "{\"matchers\":[{\"type\":\"literal\",\"field\":\"to\",\"value\":\"band@$DOMAIN\"}],\"actions\":[{\"type\":\"forward\",\"value\":[\"$DESTINATION_EMAIL\"]}],\"enabled\":true,\"name\":\"Band Email\"}"
echo -e "${GREEN}✅ Created: band@$DOMAIN${NC}"

# Create booking@shadowsofzion.com
cf_api POST "zones/$ZONE_ID/email/routing/rules" \
    "{\"matchers\":[{\"type\":\"literal\",\"field\":\"to\",\"value\":\"booking@$DOMAIN\"}],\"actions\":[{\"type\":\"forward\",\"value\":[\"$DESTINATION_EMAIL\"]}],\"enabled\":true,\"name\":\"Booking Email\"}"
echo -e "${GREEN}✅ Created: booking@$DOMAIN${NC}"

# Create press@shadowsofzion.com
cf_api POST "zones/$ZONE_ID/email/routing/rules" \
    "{\"matchers\":[{\"type\":\"literal\",\"field\":\"to\",\"value\":\"press@$DOMAIN\"}],\"actions\":[{\"type\":\"forward\",\"value\":[\"$DESTINATION_EMAIL\"]}],\"enabled\":true,\"name\":\"Press Email\"}"
echo -e "${GREEN}✅ Created: press@$DOMAIN${NC}"

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}   ✅ Cloudflare setup complete!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}📋 Next Steps:${NC}"
echo ""
echo "1. Update nameservers at Squarespace:"
echo "$NAMESERVERS" | tr ',' '\n' | sed 's/^/   • /'
echo ""
echo "2. Verify your email: Check $DESTINATION_EMAIL for verification link"
echo ""
echo "3. Deploy to Cloudflare Pages:"
echo "   • Go to: https://dash.cloudflare.com/"
echo "   • Workers & Pages → Create → Connect GitHub"
echo "   • Select: shadowsofzion-website"
echo "   • Framework: Next.js"
echo "   • Deploy!"
echo ""
echo "4. Your site will be live at: https://$DOMAIN (after DNS propagates)"
echo ""
echo -e "${GREEN}🤘 Rock on!${NC}"
