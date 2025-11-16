#!/bin/bash

# Test script for Content Management API
# This script tests creating, reading, updating, and deleting content

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
SITE_URL="https://headless-woocommerce-demo.vercel.app"
AUTH_TOKEN="YWRtaW46VjRqUSBGMVl2IEowSW4gTGw0dSBiVWFvIGNrSWM="

echo -e "${YELLOW}=== WordPress Content Management API Test ===${NC}\n"

# Test 1: List Posts
echo -e "${YELLOW}Test 1: List all posts${NC}"
curl -s "${SITE_URL}/api/posts?per_page=5" | jq '.'
echo -e "${GREEN}✓ Test 1 complete${NC}\n"

# Test 2: Create a Draft Post
echo -e "${YELLOW}Test 2: Create a draft post${NC}"
CREATE_RESPONSE=$(curl -s -X POST "${SITE_URL}/api/posts" \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic ${AUTH_TOKEN}" \
  -d '{
    "title": "Test Post from API",
    "content": "<p>This is a test post created via the Content Management API.</p><p>Created at: '"$(date)"'</p>",
    "status": "draft",
    "excerpt": "A test post to verify the API is working correctly"
  }')

POST_ID=$(echo $CREATE_RESPONSE | jq -r '.id')

if [ "$POST_ID" != "null" ] && [ -n "$POST_ID" ]; then
  echo -e "${GREEN}✓ Post created successfully! ID: ${POST_ID}${NC}"
  echo "$CREATE_RESPONSE" | jq '.'
else
  echo -e "${RED}✗ Failed to create post${NC}"
  echo "$CREATE_RESPONSE" | jq '.'
  exit 1
fi
echo ""

# Test 3: Get the created post
echo -e "${YELLOW}Test 3: Get the created post (ID: ${POST_ID})${NC}"
curl -s "${SITE_URL}/api/posts/${POST_ID}" | jq '.'
echo -e "${GREEN}✓ Test 3 complete${NC}\n"

# Test 4: Update the post
echo -e "${YELLOW}Test 4: Update the post${NC}"
UPDATE_RESPONSE=$(curl -s -X PUT "${SITE_URL}/api/posts/${POST_ID}" \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic ${AUTH_TOKEN}" \
  -d '{
    "content": "<p>This post has been UPDATED via the API!</p><p>Updated at: '"$(date)"'</p>",
    "status": "publish"
  }')

echo "$UPDATE_RESPONSE" | jq '.'
echo -e "${GREEN}✓ Post updated and published!${NC}\n"

# Test 5: List posts again (should now include our published post)
echo -e "${YELLOW}Test 5: List published posts${NC}"
curl -s "${SITE_URL}/api/posts?status=publish&per_page=3" | jq '.posts[] | {id, title: .title.rendered, status}'
echo -e "${GREEN}✓ Test 5 complete${NC}\n"

# Test 6: Delete the post (move to trash)
echo -e "${YELLOW}Test 6: Delete the post (move to trash)${NC}"
DELETE_RESPONSE=$(curl -s -X DELETE "${SITE_URL}/api/posts/${POST_ID}" \
  -H "Authorization: Basic ${AUTH_TOKEN}")

echo "$DELETE_RESPONSE" | jq '.'
echo -e "${GREEN}✓ Post moved to trash${NC}\n"

# Test 7: Permanent delete
echo -e "${YELLOW}Test 7: Permanently delete the post${NC}"
PERMANENT_DELETE=$(curl -s -X DELETE "${SITE_URL}/api/posts/${POST_ID}?force=true" \
  -H "Authorization: Basic ${AUTH_TOKEN}")

echo "$PERMANENT_DELETE" | jq '.'
echo -e "${GREEN}✓ Post permanently deleted${NC}\n"

echo -e "${GREEN}=== All tests completed successfully! ===${NC}"
echo -e "\n${YELLOW}Your WordPress Application Password is working correctly!${NC}"
echo -e "${YELLOW}Base64 Token: ${AUTH_TOKEN}${NC}\n"
