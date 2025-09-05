import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Log environment variables for debugging
if (typeof window !== 'undefined') {
  console.log('Supabase URL:', supabaseUrl)
  console.log('App URL:', process.env.NEXT_PUBLIC_APP_URL)
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)