#!/usr/bin/env python3
"""
Complete Cloudflare + Zoho Mail Setup for Shadows of Zion
"""

import requests
import json
import sys

# Configuration
API_TOKEN = "IlchPwcb1TxNQQotkBZaWgQ7_2uVCTVSyKyNJNWg"
DOMAIN = "shadowsofzion.com"
BASE_URL = "https://api.cloudflare.com/client/v4"

headers = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Content-Type": "application/json"
}

def cf_api(method, endpoint, data=None):
    """Make Cloudflare API request"""
    url = f"{BASE_URL}/{endpoint}"
    response = requests.request(method, url, headers=headers, json=data)
    return response.json()

def print_color(text, color):
    """Print colored text"""
    colors = {
        'green': '\033[0;32m',
        'yellow': '\033[1;33m',
        'red': '\033[0;31m',
        'blue': '\033[0;34m',
        'reset': '\033[0m'
    }
    print(f"{colors.get(color, '')}{text}{colors['reset']}")

def main():
    print_color("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", 'green')
    print_color("   Shadows of Zion - Complete Setup", 'green')
    print_color("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n", 'green')

    # Step 1: Add domain to Cloudflare
    print_color("📍 Step 1: Adding domain to Cloudflare...", 'yellow')

    zone_data = {"name": DOMAIN, "type": "full"}
    result = cf_api("POST", "zones", zone_data)

    zone_id = None
    if result.get('success'):
        zone_id = result['result']['id']
        print_color(f"✅ Domain added successfully!", 'green')
        print(f"   Zone ID: {zone_id}")
        print_color("\n🔧 Nameservers - Update these at Squarespace:", 'blue')
        for ns in result['result']['name_servers']:
            print(f"   • {ns}")
    else:
        # Domain might already exist
        zones = cf_api("GET", f"zones?name={DOMAIN}")
        if zones.get('success') and zones['result']:
            zone_id = zones['result'][0]['id']
            print_color(f"ℹ️  Domain already exists", 'yellow')
            print(f"   Zone ID: {zone_id}")
        else:
            print_color(f"❌ Failed to add domain: {result.get('errors')}", 'red')
            sys.exit(1)

    print()

    # Step 2: Create Zoho Mail MX records
    print_color("📍 Step 2: Setting up Zoho Mail MX records...", 'yellow')

    mx_records = [
        {"priority": 10, "content": "mx.zoho.com"},
        {"priority": 20, "content": "mx2.zoho.com"},
        {"priority": 50, "content": "mx3.zoho.com"}
    ]

    for mx in mx_records:
        dns_data = {
            "type": "MX",
            "name": DOMAIN,
            "content": mx["content"],
            "priority": mx["priority"],
            "ttl": 1
        }
        result = cf_api("POST", f"zones/{zone_id}/dns_records", dns_data)
        if result.get('success'):
            print_color(f"✅ MX record: {mx['content']} (priority {mx['priority']})", 'green')
        else:
            print_color(f"⚠️  MX {mx['content']} might already exist", 'yellow')

    print()

    # Step 3: Create SPF record
    print_color("📍 Step 3: Creating SPF record...", 'yellow')
    spf_data = {
        "type": "TXT",
        "name": DOMAIN,
        "content": "v=spf1 include:zoho.com ~all",
        "ttl": 1
    }
    result = cf_api("POST", f"zones/{zone_id}/dns_records", spf_data)
    if result.get('success'):
        print_color("✅ SPF record created", 'green')
    else:
        print_color("⚠️  SPF record might already exist", 'yellow')

    print()

    # Step 4: Create DMARC record
    print_color("📍 Step 4: Creating DMARC record...", 'yellow')
    dmarc_data = {
        "type": "TXT",
        "name": f"_dmarc.{DOMAIN}",
        "content": f"v=DMARC1; p=none; rua=mailto:band@{DOMAIN}",
        "ttl": 1
    }
    result = cf_api("POST", f"zones/{zone_id}/dns_records", dmarc_data)
    if result.get('success'):
        print_color("✅ DMARC record created", 'green')
    else:
        print_color("⚠️  DMARC record might already exist", 'yellow')

    print()

    # Step 5: Create website CNAME records
    print_color("📍 Step 5: Creating website DNS records...", 'yellow')

    # Root domain CNAME (for Cloudflare Pages)
    root_cname = {
        "type": "CNAME",
        "name": "@",
        "content": "shadowsofzion-website.pages.dev",
        "proxied": True,
        "ttl": 1
    }
    result = cf_api("POST", f"zones/{zone_id}/dns_records", root_cname)
    if result.get('success'):
        print_color(f"✅ Created CNAME for {DOMAIN}", 'green')
    else:
        print_color(f"⚠️  Root CNAME might already exist", 'yellow')

    # WWW CNAME
    www_cname = {
        "type": "CNAME",
        "name": "www",
        "content": "shadowsofzion-website.pages.dev",
        "proxied": True,
        "ttl": 1
    }
    result = cf_api("POST", f"zones/{zone_id}/dns_records", www_cname)
    if result.get('success'):
        print_color(f"✅ Created CNAME for www.{DOMAIN}", 'green')
    else:
        print_color(f"⚠️  WWW CNAME might already exist", 'yellow')

    print()

    # Final instructions
    print_color("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", 'green')
    print_color("   ✅ Setup Complete!", 'green')
    print_color("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n", 'green')

    print_color("📋 Next Steps:", 'yellow')
    print()
    print("1. Update nameservers at Squarespace (see above)")
    print()
    print("2. Sign up for Zoho Mail:")
    print_color("   → https://www.zoho.com/mail/zohomail-pricing.html", 'blue')
    print("   → Click 'Forever Free Plan'")
    print(f"   → Enter domain: {DOMAIN}")
    print("   → Create: band@shadowsofzion.com")
    print()
    print("3. In Zoho, you'll get:")
    print("   • Verification TXT record")
    print("   • DKIM key")
    print("   Run: ./update-zoho-records.sh <verification-code> <dkim-key>")
    print()
    print("4. Deploy to Cloudflare Pages:")
    print_color("   → https://dash.cloudflare.com/", 'blue')
    print("   → Workers & Pages → Create → Connect GitHub")
    print("   → Select: shadowsofzion-website")
    print("   → Framework: Next.js")
    print("   → Deploy!")
    print()
    print_color("🤘 Your website will be live at https://shadowsofzion.com", 'green')
    print()

if __name__ == "__main__":
    main()
