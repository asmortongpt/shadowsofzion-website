#!/bin/bash
# Update Zoho verification and DKIM records

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

if [ "$#" -ne 2 ]; then
    echo -e "${RED}Usage: ./update-zoho-records.sh <verification-code> <dkim-key>${NC}"
    echo ""
    echo "Example:"
    echo "  ./update-zoho-records.sh \"zoho-verification=1234567890abcdef\" \"v=DKIM1; k=rsa; p=MIGfMA0GC...\""
    exit 1
fi

VERIFICATION_CODE="$1"
DKIM_KEY="$2"
CLOUDFLARE_API_TOKEN="6bdd0035ff7c205a41e103b6b3825f6f78ad0"
DOMAIN="shadowsofzion.com"

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

# Get Zone ID
ZONES_LIST=$(cf_api GET "zones?name=$DOMAIN")
ZONE_ID=$(echo "$ZONES_LIST" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

echo -e "${YELLOW}Updating Zoho records...${NC}"
echo ""

# Find and update verification record
DNS_RECORDS=$(cf_api GET "zones/$ZONE_ID/dns_records?type=TXT&name=$DOMAIN")
VERIFICATION_ID=$(echo "$DNS_RECORDS" | grep -B 5 "PLACEHOLDER_GET_FROM_ZOHO" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -n "$VERIFICATION_ID" ]; then
    cf_api PUT "zones/$ZONE_ID/dns_records/$VERIFICATION_ID" \
        '{"type":"TXT","name":"'$DOMAIN'","content":"'"$VERIFICATION_CODE"'","ttl":1}' > /dev/null
    echo -e "${GREEN}✅ Updated Zoho verification record${NC}"
else
    cf_api POST "zones/$ZONE_ID/dns_records" \
        '{"type":"TXT","name":"'$DOMAIN'","content":"'"$VERIFICATION_CODE"'","ttl":1}' > /dev/null
    echo -e "${GREEN}✅ Created Zoho verification record${NC}"
fi

# Find and update DKIM record
DKIM_RECORDS=$(cf_api GET "zones/$ZONE_ID/dns_records?type=TXT&name=zoho._domainkey.$DOMAIN")
DKIM_ID=$(echo "$DKIM_RECORDS" | grep -B 5 "PLACEHOLDER" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -n "$DKIM_ID" ]; then
    cf_api PUT "zones/$ZONE_ID/dns_records/$DKIM_ID" \
        '{"type":"TXT","name":"zoho._domainkey.'$DOMAIN'","content":"'"$DKIM_KEY"'","ttl":1}' > /dev/null
    echo -e "${GREEN}✅ Updated DKIM record${NC}"
else
    cf_api POST "zones/$ZONE_ID/dns_records" \
        '{"type":"TXT","name":"zoho._domainkey.'$DOMAIN'","content":"'"$DKIM_KEY"'","ttl":1}' > /dev/null
    echo -e "${GREEN}✅ Created DKIM record${NC}"
fi

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}   ✅ Records Updated!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "Wait 5-10 minutes for DNS to propagate, then verify in Zoho dashboard"
