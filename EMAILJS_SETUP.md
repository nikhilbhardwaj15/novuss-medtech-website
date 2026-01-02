# EmailJS Setup Guide for NOVUSS MedTech

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Connect your Gmail account: `novussmedtechindustries@gmail.com`
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** {{subject}}

**Body:**
```
{{message}}

---
From: {{from_name}}
Reply to: {{reply_to}}
Sent via NOVUSS MedTech Website
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_abcd1234`)

## Step 5: Update Your Code
1. Open `src/utils/emailService.ts`
2. Replace these values:
```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## Step 6: Test
1. Submit any form on your website
2. Check `novussmedtechindustries@gmail.com` for emails
3. All form submissions will now send formatted emails!

## Email Format Example:
```
🏥 NEW PRODUCT REQUEST - NOVUSS MedTech

📋 EQUIPMENT DETAILS:
• Category: Lab Instruments
• Product Name: Digital Microscope
• Quantity: 2 units

👤 CONTACT INFORMATION:
• Name: Dr. Smith
• Phone: +91 98765 43210
• Email: dr.smith@hospital.com

⏰ Submitted: 15/01/2025, 2:30:45 PM
```

## Free Tier Limits:
- 200 emails/month (free)
- Upgrade to paid plan for more emails

## Troubleshooting:
- Check browser console for errors
- Verify all IDs are correct
- Ensure Gmail account is properly connected
- Test with a simple form first

Once setup is complete, ALL your website forms will send emails to `novussmedtechindustries@gmail.com`!