# WordPress Application Passwords Setup Guide

This guide walks you through setting up WordPress Application Passwords to authenticate with the Content Management API.

## What are Application Passwords?

Application Passwords are special passwords that allow external applications (like your headless site) to authenticate with WordPress without using your main admin password. They're more secure because:

- They can be revoked individually without changing your main password
- Each application gets its own unique password
- You can track which application made which changes
- They work with the WordPress REST API

## Prerequisites

- WordPress 5.6 or higher (Application Passwords are built-in)
- HTTPS enabled on your WordPress site (required for security)
- Admin or Editor access to WordPress

## Step-by-Step Setup

### Step 1: Log in to WordPress Admin

1. Go to your WordPress admin panel:
   ```
   https://your-store.com/wp-admin
   ```

2. Log in with your admin credentials

### Step 2: Navigate to Your Profile

1. In the WordPress admin sidebar, hover over **Users**
2. Click on **Profile** (or **Your Profile**)

   Alternatively:
   - Click on your name in the top-right corner
   - Select **Edit My Profile**

### Step 3: Find Application Passwords Section

1. Scroll down to the bottom of the profile page
2. Look for the **Application Passwords** section

   **Note:** If you don't see this section, it could be because:
   - Your site isn't using HTTPS (Application Passwords require SSL)
   - A security plugin is blocking it
   - Your WordPress version is older than 5.6

### Step 4: Create New Application Password

1. In the **New Application Password Name** field, enter a descriptive name:
   ```
   Headless WooCommerce Demo
   ```
   or
   ```
   Content Management API
   ```

2. Click the **Add New Application Password** button

### Step 5: Copy the Password

1. WordPress will generate a password that looks like this:
   ```
   xxxx xxxx xxxx xxxx xxxx xxxx
   ```

2. **IMPORTANT:** This password is only shown ONCE!
   - Copy it immediately
   - Store it in a secure password manager
   - You cannot retrieve it later (you can only create a new one)

3. The password has spaces for readability, but you can use it with or without spaces

### Step 6: Save the Credentials

Store your credentials securely. You'll need:

```
Username: your_wordpress_username
Application Password: xxxx xxxx xxxx xxxx xxxx xxxx
```

## Converting Credentials for API Use

The API requires Basic Authentication with Base64-encoded credentials.

### Option 1: Using Terminal (Linux/Mac/WSL)

```bash
# Replace with your actual username and password
echo -n "your_username:xxxx xxxx xxxx xxxx xxxx xxxx" | base64
```

Example:
```bash
echo -n "admin:AbCd EfGh IjKl MnOp QrSt UvWx" | base64
```

Output:
```
YWRtaW46QWJDZCBFZkdoIElqS2wgTW5PcCBRclN0IFV2V3g=
```

### Option 2: Using Node.js

```javascript
// credentials.js
const username = 'your_username';
const password = 'xxxx xxxx xxxx xxxx xxxx xxxx';

const credentials = Buffer.from(`${username}:${password}`).toString('base64');
console.log('Base64 Credentials:', credentials);
```

Run:
```bash
node credentials.js
```

### Option 3: Using Online Tool

**⚠️ Warning:** Only use trusted tools for sensitive data!

1. Go to: https://www.base64encode.org/
2. Enter: `username:password` (no spaces between username and colon)
3. Click **Encode**
4. Copy the result

### Option 4: Using Browser Console

```javascript
// Open browser console (F12)
btoa('your_username:xxxx xxxx xxxx xxxx xxxx xxxx')
```

## Testing Your Application Password

### Test with cURL

Replace `YOUR_SITE_URL` and `YOUR_BASE64_CREDENTIALS`:

```bash
# Test authentication (should return 200 OK)
curl -I https://your-site.com/wp-json/wp/v2/users/me \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS"

# Create a test post
curl -X POST https://your-site.vercel.app/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YOUR_BASE64_CREDENTIALS" \
  -d '{
    "title": "Test Post",
    "content": "<p>This is a test post created via API</p>",
    "status": "draft"
  }'
```

### Test with JavaScript

```javascript
const username = 'your_username';
const password = 'xxxx xxxx xxxx xxxx xxxx xxxx';
const credentials = btoa(`${username}:${password}`);

fetch('https://your-site.vercel.app/api/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${credentials}`
  },
  body: JSON.stringify({
    title: 'Test Post',
    content: '<p>This is a test</p>',
    status: 'draft'
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

## Security Best Practices

### 1. Store Credentials Securely

**❌ Don't do this:**
```javascript
// Bad: Hardcoded in source code
const credentials = 'YWRtaW46cGFzc3dvcmQ=';
```

**✅ Do this:**
```javascript
// Good: Use environment variables or secure storage
const credentials = process.env.WP_CREDENTIALS;
// or localStorage/secure vault for client-side
```

### 2. Environment Variables (Server-side)

For server-side scripts:

```bash
# .env.local (NEVER commit to Git)
WP_USERNAME=your_username
WP_APP_PASSWORD=xxxx xxxx xxxx xxxx xxxx xxxx
```

```javascript
// In your script
const credentials = Buffer.from(
  `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
).toString('base64');
```

### 3. Client-side Storage (Web Apps)

For web applications where users provide credentials:

```javascript
// Encrypt and store in localStorage
import CryptoJS from 'crypto-js';

const encryptCredentials = (username, password) => {
  const credentials = btoa(`${username}:${password}`);
  const encrypted = CryptoJS.AES.encrypt(
    credentials,
    'your-encryption-key'
  ).toString();
  localStorage.setItem('wp_auth', encrypted);
};

const getCredentials = () => {
  const encrypted = localStorage.getItem('wp_auth');
  if (!encrypted) return null;

  const decrypted = CryptoJS.AES.decrypt(
    encrypted,
    'your-encryption-key'
  ).toString(CryptoJS.enc.Utf8);

  return decrypted;
};
```

### 4. Rotate Passwords Regularly

- Create new Application Passwords every 90 days
- Revoke old passwords
- Update all systems using the old password

### 5. Use Specific Permissions

- Create separate WordPress users for different applications
- Assign appropriate roles (Editor, Author) instead of Administrator
- Revoke passwords when applications are decommissioned

## Managing Application Passwords

### View Active Passwords

1. Go to **Users → Profile**
2. Scroll to **Application Passwords**
3. See list of all active application passwords with:
   - Name
   - Created date
   - Last used date
   - Last used IP

### Revoke a Password

1. Find the password in the list
2. Click the **Revoke** button next to it
3. The application using that password will immediately lose access

### Revoke All Passwords

1. At the bottom of the Application Passwords section
2. Click **Revoke all application passwords**
3. Confirm the action

**⚠️ Warning:** This will break all applications using Application Passwords!

## Troubleshooting

### "Application Passwords section not visible"

**Solution 1: Enable HTTPS**
Application Passwords require SSL. If you're on localhost:

```php
// Add to wp-config.php for local development ONLY
define('WP_ENVIRONMENT_TYPE', 'local');
```

**Solution 2: Check WordPress Version**
```bash
# Ensure WordPress 5.6+
wp core version
```

**Solution 3: Check for Plugin Conflicts**
Some security plugins disable Application Passwords. Try:
- Temporarily disable security plugins
- Check plugin settings for REST API restrictions

### "401 Unauthorized" when testing

**Check:**
1. Username is correct (case-sensitive)
2. Application Password is correct (copy-paste to avoid typos)
3. Base64 encoding is correct
4. Authorization header format: `Basic <base64_string>`

**Test WordPress directly:**
```bash
curl -u "username:app_password" \
  https://your-site.com/wp-json/wp/v2/users/me
```

If this works but your API doesn't, the issue is with your API implementation, not WordPress.

### "403 Forbidden" when testing

**Check:**
1. User has permission to create posts (Editor or Administrator role)
2. WordPress REST API is not disabled
3. No security plugin is blocking REST API

**Enable REST API:**
```php
// In wp-config.php, ensure this is NOT set:
// define('REST_API_DISABLED', true);
```

### Password doesn't work with spaces

You can use the password with or without spaces:

```bash
# Both are valid
xxxx xxxx xxxx xxxx xxxx xxxx
xxxxxxxxxxxxxxxxxxxxxxxx
```

If having issues, try removing all spaces:
```bash
echo -n "username:xxxxxxxxxxxxxxxxxxxxxxxx" | base64
```

## Example: Complete Workflow

### 1. Create Application Password
```
Name: Headless CMS API
Password: AbCd EfGh IjKl MnOp QrSt UvWx
```

### 2. Encode Credentials
```bash
echo -n "admin:AbCd EfGh IjKl MnOp QrSt UvWx" | base64
# Output: YWRtaW46QWJDZCBFZkdoIElqS2wgTW5PcCBRclN0IFV2V3g=
```

### 3. Store in Environment
```bash
# .env.local
WP_AUTH_TOKEN=YWRtaW46QWJDZCBFZkdoIElqS2wgTW5PcCBRclN0IFV2V3g=
```

### 4. Use in Application
```javascript
const createPost = async (postData) => {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${process.env.WP_AUTH_TOKEN}`
    },
    body: JSON.stringify(postData)
  });

  return response.json();
};
```

## Resources

- [WordPress Application Passwords Documentation](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Basic Authentication RFC](https://datatracker.ietf.org/doc/html/rfc7617)

## Next Steps

After setting up Application Passwords:

1. ✅ Test authentication with cURL
2. ✅ Create a test post via API
3. ✅ Build your content management workflows
4. ✅ Set up automated publishing (optional)
5. ✅ Create custom admin UI (optional)

See [CONTENT_MANAGEMENT_API.md](./CONTENT_MANAGEMENT_API.md) for full API documentation.

---

**Created:** 2025-11-16
**Status:** ✅ Ready to Use
