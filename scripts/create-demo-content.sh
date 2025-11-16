#!/bin/bash

# Demo Content Creator - Bash Version
# Creates sample blog posts and pages for the headless WooCommerce demo

# Configuration
SITE_URL="${SITE_URL:-https://headless-woocommerce-demo.vercel.app}"
AUTH_TOKEN="${WP_AUTH_TOKEN:-YWRtaW46VjRqUSBGMVl2IEowSW4gTGw0dSBiVWFvIGNrSWM=}"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Creating Demo Content${NC}\n"
echo -e "Site: ${SITE_URL}\n"

# Counter
SUCCESS=0
FAILED=0

# Function to create content
create_post() {
  local TITLE="$1"
  local CONTENT="$2"
  local EXCERPT="$3"

  RESPONSE=$(curl -s -X POST "${SITE_URL}/api/posts" \
    -H "Content-Type: application/json" \
    -H "Authorization: Basic ${AUTH_TOKEN}" \
    -d "{
      \"title\": \"${TITLE}\",
      \"content\": \"${CONTENT}\",
      \"excerpt\": \"${EXCERPT}\",
      \"status\": \"publish\"
    }")

  POST_ID=$(echo $RESPONSE | jq -r '.id // empty')

  if [ -n "$POST_ID" ] && [ "$POST_ID" != "null" ]; then
    echo -e "${GREEN}✓ Created:${NC} ${TITLE} (ID: ${POST_ID})"
    ((SUCCESS++))
  else
    echo -e "${RED}✗ Failed:${NC} ${TITLE}"
    ((FAILED++))
  fi
}

create_page() {
  local TITLE="$1"
  local CONTENT="$2"

  RESPONSE=$(curl -s -X POST "${SITE_URL}/api/pages" \
    -H "Content-Type: application/json" \
    -H "Authorization: Basic ${AUTH_TOKEN}" \
    -d "{
      \"title\": \"${TITLE}\",
      \"content\": \"${CONTENT}\",
      \"status\": \"publish\"
    }")

  PAGE_ID=$(echo $RESPONSE | jq -r '.id // empty')

  if [ -n "$PAGE_ID" ] && [ "$PAGE_ID" != "null" ]; then
    echo -e "${GREEN}✓ Created:${NC} ${TITLE} (ID: ${PAGE_ID})"
    ((SUCCESS++))
  else
    echo -e "${RED}✗ Failed:${NC} ${TITLE}"
    ((FAILED++))
  fi
}

echo -e "${YELLOW}📝 Creating Blog Posts...${NC}\n"

# Post 1
create_post \
  "Welcome to Our Headless WordPress Blog" \
  "<h2>Introducing Our New Headless CMS</h2><p>We're excited to announce the launch of our new headless WordPress blog, built with cutting-edge technology.</p>" \
  "Discover how we built a modern headless blog with WordPress and Next.js"

# Post 2
create_post \
  "10 Tips for Building Fast E-commerce Sites" \
  "<h2>Speed Matters in E-commerce</h2><p>A 1-second delay in page load time can reduce conversions by 7%. Here are 10 essential tips.</p>" \
  "Learn 10 essential techniques for building blazing-fast e-commerce sites"

# Post 3
create_post \
  "The Future of Headless Commerce" \
  "<h2>Why Headless Commerce is Taking Over</h2><p>The e-commerce landscape is rapidly evolving, and headless commerce is leading the charge.</p>" \
  "Explore the rise of headless commerce architecture"

echo -e "\n${YELLOW}📄 Creating Pages...${NC}\n"

# Page 1: About
create_page \
  "About Us" \
  "<h1>About Our Company</h1><p>We're passionate about building modern, performant web experiences that delight users and drive business results.</p>"

# Page 2: Contact
create_page \
  "Contact" \
  "<h1>Contact Us</h1><p>We'd love to hear from you! Whether you have a question about our demo, want to collaborate, or just want to say hi, feel free to reach out.</p>"

echo -e "\n${BLUE}========================================${NC}"
echo -e "${BLUE}📊 Summary${NC}"
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}✅ Successfully created: ${SUCCESS}${NC}"
echo -e "${RED}❌ Failed: ${FAILED}${NC}"

if [ $SUCCESS -gt 0 ]; then
  echo -e "\n${GREEN}🎉 Demo content created!${NC}"
  echo -e "\n🔗 View your content:"
  echo -e "   Blog: ${SITE_URL}/blog"
  echo -e "   Pages: ${SITE_URL}/about"
fi

echo ""
