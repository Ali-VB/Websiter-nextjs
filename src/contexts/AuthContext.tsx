'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { User } from '@supabase/supabase-js'

type AuthContextType = {
  user: User | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signUp: (email: string, password: string) => Promise<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signIn: (email: string, password: string) => Promise<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signOut: () => Promise<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resetPassword: (email: string) => Promise<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updatePassword: (password: string) => Promise<any>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user || null)
      setLoading(false)
      
      // Listen for auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user || null)
        setLoading(false)
      })
      
      return () => {
        subscription.unsubscribe()
      }
    }
    
    getSession()
  }, [])

  const signUp = async (email: string, password: string) => {
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm`
      }
    })
  }

  const signIn = async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({
      email,
      password
    })
  }

  const signOut = async () => {
    return await supabase.auth.signOut()
  }

  const resetPassword = async (email: string) => {
    return await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`
    })
  }

  const updatePassword = async (password: string) => {
    return await supabase.auth.updateUser({
      password
    })
  }

  const value = {
    user,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}