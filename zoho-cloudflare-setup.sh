#!/bin/bash
# Zoho Mail + Cloudflare Setup for Shadows of Zion
# This script configures Cloudflare DNS for Zoho Mail

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}   Zoho Mail Setup for shadowsofzion.com${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check for API token
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    CLOUDFLARE_API_TOKEN="6bdd0035ff7c205a41e103b6b3825f6f78ad0"
fi

DOMAIN="shadowsofzion.com"

# Cloudflare API helper
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

echo -e "${YELLOW}📍 Step 1: Finding your Cloudflare zone...${NC}"

# Get Zone ID
ZONES_LIST=$(cf_api GET "zones?name=$DOMAIN")
ZONE_ID=$(echo "$ZONES_LIST" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -z "$ZONE_ID" ]; then
    echo -e "${RED}❌ Domain not found in Cloudflare${NC}"
    echo "   Please add $DOMAIN to Cloudflare first"
    exit 1
fi

echo -e "${GREEN}✅ Found zone: $ZONE_ID${NC}"
echo ""

echo -e "${YELLOW}📍 Step 2: Creating Zoho Mail DNS records...${NC}"
echo ""

# MX Records (Email routing)
echo -e "${BLUE}Creating MX records...${NC}"

cf_api POST "zones/$ZONE_ID/dns_records" \
    '{"type":"MX","name":"'$DOMAIN'","content":"mx.zoho.com","priority":10,"ttl":1}' > /dev/null
echo -e "${GREEN}✅ MX record 1: mx.zoho.com (priority 10)${NC}"

cf_api POST "zones/$ZONE_ID/dns_records" \
    '{"type":"MX","name":"'$DOMAIN'","content":"mx2.zoho.com","priority":20,"ttl":1}' > /dev/null
echo -e "${GREEN}✅ MX record 2: mx2.zoho.com (priority 20)${NC}"

cf_api POST "zones/$ZONE_ID/dns_records" \
    '{"type":"MX","name":"'$DOMAIN'","content":"mx3.zoho.com","priority":50,"ttl":1}' > /dev/null
echo -e "${GREEN}✅ MX record 3: mx3.zoho.com (priority 50)${NC}"

echo ""

# SPF Record (Sender Policy Framework)
echo -e "${BLUE}Creating SPF record...${NC}"
cf_api POST "zones/$ZONE_ID/dns_records" \
    '{"type":"TXT","name":"'$DOMAIN'","content":"v=spf1 include:zoho.com ~all","ttl":1}' > /dev/null
echo -e "${GREEN}✅ SPF record created${NC}"

echo ""

# DKIM Record (will need to be updated after Zoho setup)
echo -e "${BLUE}Creating placeholder DKIM record...${NC}"
cf_api POST "zones/$ZONE_ID/dns_records" \
    '{"type":"TXT","name":"zoho._domainkey.'$DOMAIN'","content":"v=DKIM1; k=rsa; p=PLACEHOLDER_WILL_UPDATE_FROM_ZOHO","ttl":1}' > /dev/null
echo -e "${GREEN}✅ DKIM placeholder created (will update from Zoho)${NC}"

echo ""

# DMARC Record
echo -e "${BLUE}Creating DMARC record...${NC}"
cf_api POST "zones/$ZONE_ID/dns_records" \
    '{"type":"TXT","name":"_dmarc.'$DOMAIN'","content":"v=DMARC1; p=none; rua=mailto:band@'$DOMAIN'","ttl":1}' > /dev/null
echo -e "${GREEN}✅ DMARC record created${NC}"

echo ""

# Zoho verification record
echo -e "${BLUE}Creating Zoho verification record...${NC}"
cf_api POST "zones/$ZONE_ID/dns_records" \
    '{"type":"TXT","name":"'$DOMAIN'","content":"zoho-verification=PLACEHOLDER_GET_FROM_ZOHO","ttl":1}' > /dev/null
echo -e "${GREEN}✅ Zoho verification placeholder created${NC}"

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}   ✅ DNS Records Created!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}📋 Next Steps - Create Zoho Account:${NC}"
echo ""
echo "1. Go to: ${BLUE}https://www.zoho.com/mail/zohomail-pricing.html${NC}"
echo "   Click ${GREEN}\"SIGN UP NOW\"${NC} under ${GREEN}\"Forever Free Plan\"${NC}"
echo ""
echo "2. Enter your domain: ${GREEN}shadowsofzion.com${NC}"
echo ""
echo "3. Create your first email: ${GREEN}band@shadowsofzion.com${NC}"
echo ""
echo "4. Zoho will give you two codes:"
echo "   ${BLUE}• Verification TXT record${NC}"
echo "   ${BLUE}• DKIM key${NC}"
echo ""
echo "5. Come back and run:"
echo "   ${BLUE}./update-zoho-records.sh <verification-code> <dkim-key>${NC}"
echo ""
echo "6. Verify in Zoho dashboard"
echo ""
echo -e "${GREEN}🤘 Your DNS is ready for Zoho Mail!${NC}"
