# Supabase Authentication Troubleshooting Guide

This guide helps resolve common issues with Supabase authentication, particularly the "Invalid confirmation link" error and email delivery problems.

## Common Issues and Solutions

### 1. "Invalid confirmation link" Error

#### Problem
Users see "Invalid confirmation link" immediately after signing up, and don't receive confirmation emails.

#### Root Causes and Solutions

**A. Incorrect Redirect URL Configuration**
1. Log in to your Supabase dashboard
2. Go to **Authentication** → **URL Configuration**
3. Ensure the following URLs are added to "Redirect URLs":
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/confirm`
   - `http://localhost:3000/auth/reset-password`
   - `http://localhost:3001/auth/callback`
   - `http://localhost:3001/auth/confirm`
   - `http://localhost:3001/auth/reset-password`
   - For production: `https://yourdomain.com/auth/callback`, etc.

**B. Email Confirmation Not Enabled**
1. Go to **Authentication** → **Settings**
2. Ensure "Email Confirmations" is toggled ON

**C. Site URL Not Configured**
1. Go to **Authentication** → **Settings**
2. Set "Site URL" to your application URL:
   - For development: `http://localhost:3000` or `http://localhost:3001`
   - For production: `https://yourdomain.com`

**D. Incorrect Email Template Links**
1. Go to **Authentication** → **Email Templates**
2. Check that confirmation URLs in templates use the correct format:
   ```
   [[ confirmation_url ]]
   ```
   Not:
   ```
   [[ link ]]
   ```

### 2. Not Receiving Confirmation Emails

#### Problem
Users don't receive confirmation emails after signing up.

#### Root Causes and Solutions

**A. Email Deliverability Issues**
1. Check spam/junk folders
2. If using a `.click` domain, it may be flagged by spam filters
3. Update email templates to remove domain references (see SUPABASE_CONFIGURATION_GUIDE.md)

**B. Supabase Email Service Issues**
1. Check Supabase status page for service outages
2. Verify your Supabase project is not rate-limited

**C. Network/Provider Issues**
1. Try with different email providers (Gmail, Outlook, etc.)
2. Check if your network is blocking emails

### 3. Authentication Code Issues

#### Problem
The authentication implementation may have issues causing immediate errors.

#### Solutions

**A. Update Confirmation Page Implementation**
The current confirmation page implementation may not be correctly handling the token. Update [src/app/auth/confirm/page.tsx](file:///Users/ali-vakili/Desktop/Qoder_build/websiter.click/src/app/auth/confirm/page.tsx):

```tsx
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ConfirmEmail() {
  const [message, setMessage] = useState('Confirming your email...')
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        // Get the token from the URL query parameters
        const urlParams = new URLSearchParams(window.location.search)
        const token = urlParams.get('token')
        const type = urlParams.get('type')
        
        if (token && type) {
          // Confirm the signup using the token
          const { error: confirmError } = await supabase.auth.verifyOtp({
            type: type as any, // 'signup' or 'magiclink' or 'recovery'
            token,
          })
          
          if (confirmError) {
            setError('Failed to confirm email: ' + confirmError.message)
            setMessage('')
          } else {
            setMessage('Email confirmed successfully! You can now sign in.')
          }
        } else {
          // Try to get token from hash (fallback for older links)
          const hash = window.location.hash.substring(1)
          const hashParams = new URLSearchParams(hash)
          const hashToken = hashParams.get('confirmation_token')
          
          if (hashToken) {
            const { error: confirmError } = await supabase.auth.verifyOtp({
              type: 'signup',
              token: hashToken,
            })
            
            if (confirmError) {
              setError('Failed to confirm email: ' + confirmError.message)
              setMessage('')
            } else {
              setMessage('Email confirmed successfully! You can now sign in.')
            }
          } else {
            setError('Invalid confirmation link')
            setMessage('')
          }
        }
      } catch (err: unknown) {
        console.error('Error confirming email:', err)
        setError('An error occurred while confirming your email')
        setMessage('')
      }
    }
    
    confirmEmail()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Confirm your email
          </h2>
        </div>
        
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          {message && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{message}</span>
            </div>
          )}
          
          <div className="text-center">
            {message.includes('successfully') && (
              <Link href="/login">
                <Button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  Sign in
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```

**B. Update AuthContext Implementation**
Update [src/contexts/AuthContext.tsx](file:///Users/ali-vakili/Desktop/Qoder_build/websiter.click/src/contexts/AuthContext.tsx) to ensure proper error handling:

```tsx
const signUp = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm`
      }
    })
    
    if (error) {
      console.error('Sign up error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (err) {
    console.error('Sign up exception:', err)
    return { data: null, error: { message: 'An unexpected error occurred' } }
  }
}
```

### 4. Testing and Debugging

#### Steps to Test Authentication Flow

1. **Clear browser data**:
   - Clear cookies and cache for your site
   - Use incognito/private browsing mode

2. **Check browser console**:
   - Open Developer Tools (F12)
   - Look for JavaScript errors
   - Check network requests to Supabase

3. **Verify environment variables**:
   - Ensure `.env.local` contains correct Supabase credentials
   - Restart development server after changes

4. **Test with different email providers**:
   - Try signing up with Gmail, Outlook, etc.
   - Check spam/junk folders

5. **Check Supabase Dashboard**:
   - Go to **Authentication** → **Users**
   - Verify user is created but not confirmed
   - Check for any error logs

### 5. Production Considerations

#### Email Deliverability
1. For production, consider using a more traditional domain (.com, .io, .co)
2. Set up proper DNS records (SPF, DKIM, DMARC)
3. Consider using a dedicated email service (SendGrid, Mailgun) with Supabase

#### Security
1. Implement rate limiting on auth endpoints
2. Use strong password requirements
3. Consider implementing 2FA for sensitive operations

### 6. Additional Resources

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Supabase Email Templates](https://supabase.com/docs/guides/auth/auth-email-templates)
- [Supabase URL Configuration](https://supabase.com/docs/guides/auth/redirect-urls)