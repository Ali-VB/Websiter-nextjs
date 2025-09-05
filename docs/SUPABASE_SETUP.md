# Supabase Authentication Setup

This document explains how to set up Supabase authentication for the Websiter.click project.

## Prerequisites

1. Create a Supabase project at [https://app.supabase.com/](https://app.supabase.com/)
2. Get your Supabase URL and anon key from the project settings

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Authentication Features Implemented

1. **Sign Up with Email Confirmation**
   - Users can create accounts with email and password
   - Email confirmation is required before signing in
   - Confirmation emails are sent automatically

2. **Sign In**
   - Email and password authentication
   - Session management with Supabase Auth

3. **Password Reset**
   - Forgot password functionality
   - Email with reset link
   - Secure password update

4. **Route Protection**
   - Middleware protects dashboard routes
   - Redirects unauthenticated users to login
   - Redirects authenticated users away from auth pages

## Project Structure

```
src/
├── app/
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── signup/
│   │   └── page.tsx          # Sign up page
│   ├── auth/
│   │   ├── confirm/
│   │   │   └── page.tsx      # Email confirmation page
│   │   ├── forgot-password/
│   │   │   └── page.tsx      # Forgot password page
│   │   └── reset-password/
│   │       └── page.tsx      # Reset password page
│   └── dashboard/
│       └── page.tsx          # Protected dashboard page
├── contexts/
│   └── AuthContext.tsx       # Authentication context
├── lib/
│   └── supabaseClient.ts     # Supabase client configuration
└── middleware.ts             # Route protection middleware
```

## Supabase Configuration

### Email Templates

In your Supabase project dashboard, you can customize the email templates:

1. Go to Authentication → Email Templates
2. Customize the "Confirm Signup" template
3. Customize the "Reset Password" template

### URL Configuration

Make sure to configure the redirect URLs in your Supabase project:

1. Go to Authentication → URL Configuration
2. Add the following URLs to "Redirect URLs":
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/confirm`
   - `http://localhost:3000/auth/reset-password`
   - `https://yourdomain.com/auth/callback`
   - `https://yourdomain.com/auth/confirm`
   - `https://yourdomain.com/auth/reset-password`

## Usage

### Protecting Routes

The middleware automatically protects routes defined in the matcher. To protect additional routes:

1. Add the route pattern to the matcher in `middleware.ts`
2. The middleware will redirect unauthenticated users to the login page

### Using Authentication in Components

```tsx
'use client'

import { useAuth } from '@/contexts/AuthContext'

export default function MyComponent() {
  const { user, signIn, signOut } = useAuth()
  
  if (!user) {
    return <div>Please sign in</div>
  }
  
  return (
    <div>
      <p>Welcome, {user.email}!</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}
```

## Testing

1. Start the development server: `npm run dev`
2. Navigate to `/signup` to create a new account
3. Check your email for the confirmation link
4. After confirming, navigate to `/login` to sign in
5. You should be redirected to `/dashboard` after successful login

## Troubleshooting

### Environment Variables Not Loading
- Make sure you're using `.env.local` (not `.env`)
- Restart the development server after adding environment variables

### Email Not Received
- Check your spam/junk folder
- Verify the email templates in Supabase dashboard
- Ensure the redirect URLs are correctly configured

### Session Issues
- Clear your browser cookies for the site
- Check the browser console for errors
- Verify the Supabase client configuration