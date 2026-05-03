# 📧 Contact Form Setup Guide

## ✅ Current Setup
Your contact form is now configured to send emails to: **abdulqayoomm897@gmail.com**

## 🔧 Step-by-Step Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** (or Sign In if you have an account)
3. Complete the registration process
4. Verify your email

### Step 2: Create Email Service
1. After logging in, go to **"Email Services"** from the sidebar
2. Click **"Add Service"**
3. Select **"Gmail"** as your service
4. Click **"Create Service"**
5. You'll see a Service ID - copy this value

### Step 3: Create Email Template
1. Go to **"Email Templates"** from the sidebar
2. Click **"Create New Template"**
3. Name it: **"Contact Form"**
4. Set the recipient email to: **abdulqayoomm897@gmail.com**
5. Use this template structure:

```
Subject: New Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

6. Click **"Save"** - copy your Template ID

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"API Keys"**
2. Copy your **Public Key**

### Step 5: Configure Environment Variables
1. Open `.env.local` in your project root
2. Fill in these values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
RECIPIENT_EMAIL=abdulqayoomm897@gmail.com
```

**Important:** Replace the placeholder values with your actual credentials from EmailJS.

### Step 6: Test the Form
1. Save the `.env.local` file
2. Restart your development server (`npm run dev`)
3. Go to your portfolio website
4. Fill out the contact form
5. Click **"Send Message"**
6. You should see a green success notification ✓

## 🎨 Visual Features Added

✅ **Beautiful Toast Notifications**
- Green success message with checkmark
- Red error message with X icon
- Auto-dismisses after 5 seconds
- Appears in top-right corner

✅ **Enhanced User Feedback**
- Loading spinner while sending
- Form clears after successful submission
- Button animations (hover & click effects)
- Error handling with descriptive messages

## 📨 Email Benefits

- ✅ **Free tier**: 200 emails per month
- ✅ **No backend required**: Works directly from browser
- ✅ **Secure**: Public key is only for client-side
- ✅ **Reliable**: Gmail integration is trustworthy

## ❓ Troubleshooting

### "Error: Email service not configured"
- Check your `.env.local` file has all three credential keys
- Make sure you saved the file
- Restart the development server

### "Email not arriving"
- Check your Gmail spam folder
- Make sure the recipient email is correct
- Verify the template variables match ({{from_name}}, {{from_email}}, {{message}})

### "CORS error"
- Make sure your Public Key is correct
- Go back to EmailJS Account → API Keys and verify

## 📱 Form Fields

The contact form collects:
1. **Name** - Sender's full name
2. **Email** - Sender's email (for replies)
3. **Message** - The actual message content

All fields are required.

## 🎉 You're All Set!

Once you complete these steps, your portfolio contact form will:
- ✅ Accept messages from visitors
- ✅ Send emails to your Gmail inbox
- ✅ Show beautiful success notifications
- ✅ Clear the form after submission
- ✅ Handle errors gracefully

Need help? Contact EmailJS support or check their documentation at [emailjs.com/docs](https://www.emailjs.com/docs/)
