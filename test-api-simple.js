#!/usr/bin/env node

/**
 * Simple JavaScript test for Content Management API
 * Run with: node test-api-simple.js
 */

const SITE_URL = 'https://headless-woocommerce-demo.vercel.app';
const AUTH_TOKEN = 'YWRtaW46VjRqUSBGMVl2IEowSW4gTGw0dSBiVWFvIGNrSWM=';

async function testAPI() {
  console.log('\n=== WordPress Content Management API Test ===\n');

  try {
    // Test 1: List posts
    console.log('📋 Test 1: Listing posts...');
    const listResponse = await fetch(`${SITE_URL}/api/posts?per_page=5`);
    const listData = await listResponse.json();
    console.log(`✓ Found ${listData.pagination.total} posts\n`);

    // Test 2: Create a post
    console.log('📝 Test 2: Creating a draft post...');
    const createResponse = await fetch(`${SITE_URL}/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${AUTH_TOKEN}`
      },
      body: JSON.stringify({
        title: 'Test Post from JavaScript',
        content: `<p>This is a test post created via the Content Management API.</p>
                  <p>Created at: ${new Date().toISOString()}</p>`,
        status: 'draft'
      })
    });

    if (!createResponse.ok) {
      const error = await createResponse.json();
      throw new Error(`Failed to create post: ${error.error}`);
    }

    const post = await createResponse.json();
    console.log(`✓ Post created successfully!`);
    console.log(`  ID: ${post.id}`);
    console.log(`  Title: ${post.title.rendered}`);
    console.log(`  Status: ${post.status}\n`);

    // Test 3: Update the post
    console.log('✏️  Test 3: Updating the post...');
    const updateResponse = await fetch(`${SITE_URL}/api/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${AUTH_TOKEN}`
      },
      body: JSON.stringify({
        content: `<p>This post has been UPDATED!</p>
                  <p>Updated at: ${new Date().toISOString()}</p>`,
        status: 'publish'
      })
    });

    const updatedPost = await updateResponse.json();
    console.log(`✓ Post updated and published!`);
    console.log(`  Status: ${updatedPost.status}\n`);

    // Test 4: Delete the post
    console.log('🗑️  Test 4: Deleting the post...');
    const deleteResponse = await fetch(
      `${SITE_URL}/api/posts/${post.id}?force=true`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Basic ${AUTH_TOKEN}`
        }
      }
    );

    const deleteResult = await deleteResponse.json();
    console.log(`✓ ${deleteResult.message}\n`);

    console.log('✅ All tests completed successfully!\n');
    console.log('Your WordPress Application Password is working correctly!');
    console.log(`Base64 Token: ${AUTH_TOKEN}\n`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

testAPI();
