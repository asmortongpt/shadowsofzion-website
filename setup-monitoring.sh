#!/bin/bash
# Setup daily monitoring for Shadows of Zion website

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}   Shadows of Zion - Setup Daily Monitoring${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Get current directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
MONITOR_SCRIPT="$SCRIPT_DIR/monitor-site.py"

echo -e "${YELLOW}📍 Installing Python dependencies...${NC}"

# Install required Python packages
pip3 install requests dnspython --quiet

echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Make monitor script executable
chmod +x "$MONITOR_SCRIPT"

echo -e "${YELLOW}📍 Setting up cron job...${NC}"

# Cron job to run daily at 9 AM
CRON_JOB="0 9 * * * cd $SCRIPT_DIR && /usr/bin/python3 $MONITOR_SCRIPT >> /tmp/shadowsofzion-monitor.log 2>&1"

# Check if cron job already exists
if crontab -l 2>/dev/null | grep -q "monitor-site.py"; then
    echo -e "${YELLOW}⚠️  Cron job already exists${NC}"
else
    # Add cron job
    (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
    echo -e "${GREEN}✅ Cron job added - runs daily at 9:00 AM${NC}"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}   ✅ Monitoring Setup Complete!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}📋 What's Configured:${NC}"
echo ""
echo "  ✅ Monitor script: $MONITOR_SCRIPT"
echo "  ✅ Schedule: Daily at 9:00 AM"
echo "  ✅ Log file: /tmp/shadowsofzion-monitor.log"
echo "  ✅ Checks:"
echo "     • Website uptime (shadowsofzion.com)"
echo "     • DNS resolution"
echo "     • SSL certificate (expiration warnings)"
echo "     • Cloudflare zone status"
echo "     • Nameserver configuration"
echo ""
echo -e "${YELLOW}📋 Manual Commands:${NC}"
echo ""
echo "  Run monitor now:"
echo -e "    ${BLUE}python3 $MONITOR_SCRIPT${NC}"
echo ""
echo "  View cron jobs:"
echo -e "    ${BLUE}crontab -l${NC}"
echo ""
echo "  View monitor log:"
echo -e "    ${BLUE}tail -f /tmp/shadowsofzion-monitor.log${NC}"
echo ""
echo "  Remove cron job:"
echo -e "    ${BLUE}crontab -e${NC} (then delete the line with 'monitor-site.py')"
echo ""
echo -e "${GREEN}🤘 Your site will be monitored daily!${NC}"
echo ""
