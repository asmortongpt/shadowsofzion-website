#!/usr/bin/env python3
"""
Shadows of Zion - Daily Website & DNS Monitor
Checks website status, DNS, SSL, and sends alerts if issues found
"""

import requests
import socket
import ssl
import datetime
import json
from typing import Dict, List

# Configuration
DOMAIN = "shadowsofzion.com"
CLOUDFLARE_API_TOKEN = "IlchPwcb1TxNQQotkBZaWgQ7_2uVCTVSyKyNJNWg"
CLOUDFLARE_ZONE_ID = "c3f9c95fbb28491f17340b1ab1126952"
ALERT_EMAIL = "band@shadowsofzion.com"  # Where to send alerts

# Color codes
GREEN = '\033[0;32m'
YELLOW = '\033[1;33m'
RED = '\033[0;31m'
BLUE = '\033[0;34m'
RESET = '\033[0m'

def print_status(message: str, status: str):
    """Print colored status message"""
    if status == "ok":
        print(f"{GREEN}✅ {message}{RESET}")
    elif status == "warning":
        print(f"{YELLOW}⚠️  {message}{RESET}")
    elif status == "error":
        print(f"{RED}❌ {message}{RESET}")
    else:
        print(f"{BLUE}ℹ️  {message}{RESET}")

def check_website_uptime() -> Dict:
    """Check if website is responding"""
    try:
        response = requests.get(f"https://{DOMAIN}", timeout=10)
        if response.status_code == 200:
            print_status(f"Website {DOMAIN} is UP (HTTP {response.status_code})", "ok")
            return {"status": "ok", "message": f"Website up, HTTP {response.status_code}"}
        else:
            print_status(f"Website returned HTTP {response.status_code}", "warning")
            return {"status": "warning", "message": f"HTTP {response.status_code}"}
    except requests.exceptions.ConnectionError:
        print_status(f"Website {DOMAIN} is DOWN - Connection failed", "error")
        return {"status": "error", "message": "Connection failed"}
    except requests.exceptions.Timeout:
        print_status(f"Website {DOMAIN} - Timeout", "error")
        return {"status": "error", "message": "Request timeout"}
    except Exception as e:
        print_status(f"Website check failed: {str(e)}", "error")
        return {"status": "error", "message": str(e)}

def check_dns() -> Dict:
    """Check DNS resolution"""
    try:
        ip_address = socket.gethostbyname(DOMAIN)
        print_status(f"DNS resolves to: {ip_address}", "ok")
        return {"status": "ok", "message": f"Resolves to {ip_address}"}
    except socket.gaierror:
        print_status(f"DNS resolution failed for {DOMAIN}", "error")
        return {"status": "error", "message": "DNS resolution failed"}

def check_ssl_certificate() -> Dict:
    """Check SSL certificate validity and expiration"""
    try:
        context = ssl.create_default_context()
        with socket.create_connection((DOMAIN, 443), timeout=10) as sock:
            with context.wrap_socket(sock, server_hostname=DOMAIN) as ssock:
                cert = ssock.getpeercert()

                # Check expiration
                not_after = datetime.datetime.strptime(
                    cert['notAfter'],
                    '%b %d %H:%M:%S %Y %Z'
                )
                days_until_expiry = (not_after - datetime.datetime.now()).days

                if days_until_expiry > 30:
                    print_status(f"SSL certificate valid ({days_until_expiry} days remaining)", "ok")
                    return {"status": "ok", "message": f"{days_until_expiry} days until expiry"}
                elif days_until_expiry > 7:
                    print_status(f"SSL expires in {days_until_expiry} days", "warning")
                    return {"status": "warning", "message": f"Expires in {days_until_expiry} days"}
                else:
                    print_status(f"SSL EXPIRES SOON: {days_until_expiry} days", "error")
                    return {"status": "error", "message": f"Expires in {days_until_expiry} days!"}

    except Exception as e:
        print_status(f"SSL check failed: {str(e)}", "error")
        return {"status": "error", "message": str(e)}

def check_cloudflare_zone() -> Dict:
    """Check Cloudflare zone status"""
    try:
        headers = {
            'Authorization': f'Bearer {CLOUDFLARE_API_TOKEN}',
            'Content-Type': 'application/json'
        }

        response = requests.get(
            f'https://api.cloudflare.com/client/v4/zones/{CLOUDFLARE_ZONE_ID}',
            headers=headers
        )

        data = response.json()
        if data.get('success'):
            zone = data['result']
            status = zone.get('status', 'unknown')

            if status == 'active':
                print_status(f"Cloudflare zone: ACTIVE", "ok")
                return {"status": "ok", "message": "Zone active"}
            elif status == 'pending':
                print_status(f"Cloudflare zone: PENDING (waiting for nameserver update)", "warning")
                return {"status": "warning", "message": "Zone pending nameserver update"}
            else:
                print_status(f"Cloudflare zone status: {status}", "warning")
                return {"status": "warning", "message": f"Zone status: {status}"}
        else:
            print_status(f"Cloudflare API error", "error")
            return {"status": "error", "message": "API error"}

    except Exception as e:
        print_status(f"Cloudflare check failed: {str(e)}", "error")
        return {"status": "error", "message": str(e)}

def check_nameservers() -> Dict:
    """Check if domain is using Cloudflare nameservers"""
    try:
        import dns.resolver
        nameservers = dns.resolver.resolve(DOMAIN, 'NS')
        ns_list = [str(ns) for ns in nameservers]

        cloudflare_ns = ['bjorn.ns.cloudflare.com.', 'isabel.ns.cloudflare.com.']

        if any('cloudflare.com' in ns for ns in ns_list):
            print_status(f"Nameservers: Using Cloudflare ✓", "ok")
            return {"status": "ok", "message": "Using Cloudflare nameservers"}
        else:
            print_status(f"Nameservers: NOT using Cloudflare", "warning")
            print(f"   Current NS: {', '.join(ns_list)}")
            return {"status": "warning", "message": f"Not using Cloudflare: {', '.join(ns_list)}"}

    except ImportError:
        print_status("DNS module not available (install: pip install dnspython)", "warning")
        return {"status": "warning", "message": "DNS module not installed"}
    except Exception as e:
        print_status(f"Nameserver check failed: {str(e)}", "warning")
        return {"status": "warning", "message": str(e)}

def generate_report(results: Dict) -> str:
    """Generate summary report"""
    issues = []
    warnings = []

    for check, result in results.items():
        if result['status'] == 'error':
            issues.append(f"❌ {check}: {result['message']}")
        elif result['status'] == 'warning':
            warnings.append(f"⚠️  {check}: {result['message']}")

    if issues:
        return f"\n🚨 CRITICAL ISSUES FOUND:\n" + "\n".join(issues)
    elif warnings:
        return f"\n⚠️  Warnings:\n" + "\n".join(warnings)
    else:
        return f"\n✅ All systems operational!"

def main():
    print(f"\n{BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━{RESET}")
    print(f"{BLUE}   Shadows of Zion - Daily Site Monitor{RESET}")
    print(f"{BLUE}   {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}{RESET}")
    print(f"{BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━{RESET}\n")

    results = {}

    print("🌐 Checking website uptime...")
    results['website'] = check_website_uptime()
    print()

    print("🔍 Checking DNS resolution...")
    results['dns'] = check_dns()
    print()

    print("🔒 Checking SSL certificate...")
    results['ssl'] = check_ssl_certificate()
    print()

    print("☁️  Checking Cloudflare zone...")
    results['cloudflare'] = check_cloudflare_zone()
    print()

    print("📡 Checking nameservers...")
    results['nameservers'] = check_nameservers()
    print()

    # Summary
    print(f"{BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━{RESET}")
    report = generate_report(results)
    print(report)
    print(f"{BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━{RESET}\n")

    # Save results to log file
    log_file = f"/tmp/shadowsofzion-monitor-{datetime.datetime.now().strftime('%Y%m%d')}.json"
    with open(log_file, 'w') as f:
        json.dump({
            'timestamp': datetime.datetime.now().isoformat(),
            'domain': DOMAIN,
            'results': results,
            'summary': report
        }, f, indent=2)

    print(f"📝 Log saved to: {log_file}\n")

    # Return exit code based on results
    has_errors = any(r['status'] == 'error' for r in results.values())
    return 1 if has_errors else 0

if __name__ == "__main__":
    exit(main())
