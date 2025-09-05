# Authentication Testing Plan

## Overview
This document outlines the steps to manually test the Supabase authentication implementation.

## Test Scenarios

### 1. Sign In Flow
- [ ] Click "Sign In" button on landing page
- [ ] Verify navigation to `/login` page
- [ ] Enter invalid credentials and verify error handling
- [ ] Enter valid credentials and verify navigation to dashboard

### 2. Sign Up Flow
- [ ] Navigate to `/signup` page
- [ ] Enter invalid data (password mismatch, short password) and verify validation
- [ ] Enter valid data and submit
- [ ] Check email for confirmation link
- [ ] Click confirmation link and verify account activation
- [ ] Sign in with confirmed account

### 3. Forgot Password Flow
- [ ] Navigate to `/login` page
- [ ] Click "Forgot your password?" link
- [ ] Verify navigation to `/auth/forgot-password` page
- [ ] Enter email and submit
- [ ] Check email for reset password link
- [ ] Click reset password link
- [ ] Enter new password and confirm
- [ ] Verify navigation to login page
- [ ] Sign in with new password

### 4. Route Protection
- [ ] Try to access `/dashboard` without authentication
- [ ] Verify redirection to `/login`
- [ ] Try to access `/login` when already authenticated
- [ ] Verify redirection to `/dashboard`

### 5. Sign Out
- [ ] Navigate to `/dashboard` when authenticated
- [ ] Click "Sign out" button
- [ ] Verify redirection to `/login`
- [ ] Verify session is destroyed

## Prerequisites
1. Supabase project with authentication enabled
2. Environment variables configured in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. Email templates configured in Supabase dashboard
4. Redirect URLs configured in Supabase dashboard:
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/confirm`
   - `http://localhost:3000/auth/reset-password`
   - `http://localhost:3001/auth/callback`
   - `http://localhost:3001/auth/confirm`
   - `http://localhost:3001/auth/reset-password`

## Expected Results
All test scenarios should pass without errors, with proper navigation between pages and correct handling of authentication states.