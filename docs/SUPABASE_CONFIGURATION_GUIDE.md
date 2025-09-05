# Supabase Configuration Guide

This guide explains how to configure your Supabase project for the Websiter.click authentication system.

## Prerequisites

1. Create a Supabase project at [https://app.supabase.com/](https://app.supabase.com/)
2. Get your Supabase URL and anon key from the project settings

## 1. Customize Email Templates

### Access Email Templates
1. Log in to your Supabase dashboard
2. Select your project
3. Navigate to **Authentication** → **Email Templates**

### Customize "Confirm Signup" Template
1. Click on "Confirm Signup" template
2. Update the template content with this improved version to address spam filters:
   ```
   Subject: Confirm Your Websiter Account
   
   Hello,
   
   Thank you for signing up with Websiter!
   
   Please confirm your email address by clicking the link below:
   
   [Confirm Email]([[ confirmation_url ]])
   
   If you didn't create an account with us, you can safely ignore this email.
   
   Best regards,
   The Websiter Team
   ```

### Customize "Reset Password" Template
1. Click on "Reset Password" template
2. Update the template content with this improved version:
   ```
   Subject: Reset Your Websiter Password
   
   Hello,
   
   We received a request to reset your password for your Websiter account. Click the link below to set a new password:
   
   [Reset Password]([[ confirmation_url ]])
   
   If you didn't request a password reset, you can safely ignore this email.
   
   Best regards,
   The Websiter Team
   ```

## 2. Configure Redirect URLs

### Access URL Configuration
1. Log in to your Supabase dashboard
2. Select your project
3. Navigate to **Authentication** → **URL Configuration**

### Add Redirect URLs
Add the following URLs to "Redirect URLs":

For local development:
- `http://localhost:3000/auth/callback`
- `http://localhost:3000/auth/confirm`
- `http://localhost:3000/auth/reset-password`
- `http://localhost:3001/auth/callback`
- `http://localhost:3001/auth/confirm`
- `http://localhost:3001/auth/reset-password`

For production (replace with your actual domain):
- `https://yourdomain.com/auth/callback`
- `https://yourdomain.com/auth/confirm`
- `https://yourdomain.com/auth/reset-password`

## 3. Enable Email Confirmations

### Access Authentication Settings
1. Log in to your Supabase dashboard
2. Select your project
3. Navigate to **Authentication** → **Settings**

### Configure Email Confirmations
1. Find "Email Confirmations" section
2. Toggle "Enable email confirmations" to ON
3. This ensures users must confirm their email before signing in

## 4. Configure Site URL

### Access Site URL Settings
1. Log in to your Supabase dashboard
2. Select your project
3. Navigate to **Authentication** → **Settings**
4. Find "Site URL" field

### Set Site URL
Set your Site URL to match your application:
- For local development: `http://localhost:3000` or `http://localhost:3001`
- For production: `https://yourdomain.com`

## 5. Environment Variables Setup

Create a `.env.local` file in the root of your project with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace `your_supabase_url` and `your_supabase_anon_key` with the values from your Supabase project settings.

## 6. Testing the Configuration

### Verify Email Templates
1. Sign up for a new account in your application
2. Check your email inbox for the confirmation email
3. Verify that the email content matches your customized template
4. Click the confirmation link to verify it works correctly

### Verify Redirect URLs
1. After confirming your email, try to sign in
2. Verify that you're redirected to the dashboard
3. Test the forgot password flow:
   - Navigate to the forgot password page
   - Enter your email and submit
   - Check your email for the reset password link
   - Click the link and set a new password
   - Verify you can sign in with the new password

## Troubleshooting

### Email Not Received
- Check your spam/junk folder
- Verify the email templates in Supabase dashboard
- Ensure the redirect URLs are correctly configured
- Check Supabase logs for any errors

### Redirect Issues
- Verify all redirect URLs are correctly added to Supabase settings
- Check browser console for any errors
- Ensure your application is running on the correct port

### Session Issues
- Clear your browser cookies for the site
- Check the browser console for errors
- Verify the Supabase client configuration in your application

## Additional Security Considerations

### Rate Limiting
Supabase automatically applies rate limiting to authentication requests to prevent abuse.

### Secure Password Requirements
Consider implementing additional password requirements in your application:
- Minimum length (already implemented: 6 characters)
- Complexity requirements (uppercase, lowercase, numbers, special characters)

### Monitoring
Regularly check Supabase logs for:
- Failed login attempts
- Suspicious activity
- Authentication errors

## Email Deliverability Best Practices

To improve email deliverability and reduce spam filtering:

1. **Avoid suspicious TLDs**: The `.click` domain is often flagged by spam filters. Consider using a more traditional domain extension like `.com`, `.io`, or `.co` for production.

2. **Use a recognizable sender name**: Instead of generic "noreply" addresses, use a recognizable name like "Websiter Team".

3. **Include physical address**: Add your company's physical address to the email footer (required by CAN-SPAM Act).

4. **Add unsubscribe option**: Even for transactional emails, including an unsubscribe link can improve deliverability.

5. **Use plain text alternatives**: Include both HTML and plain text versions of your emails.

6. **Set up proper DNS records**:
   - SPF (Sender Policy Framework)
   - DKIM (DomainKeys Identified Mail)
   - DMARC (Domain-based Message Authentication, Reporting, and Conformance)

7. **Warm up your domain**: If using a new domain, gradually increase email volume over time.

8. **Monitor deliverability**: Use tools like Mail Tester or GlockApps to test your email deliverability.

Here's an improved email template that follows these best practices:

```
Subject: Confirm Your Websiter Account

Hello,

Thank you for signing up with Websiter!

Please confirm your email address by clicking the link below:

[Confirm Email]([[ confirmation_url ]])

If you didn't create an account with us, you can safely ignore this email.

Best regards,
The Websiter Team

---

Websiter Inc.
123 Business Street
San Francisco, CA 94107
United States

This email was sent to [[ user.email ]] because you signed up for a Websiter account.
```