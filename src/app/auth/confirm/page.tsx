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
        console.log('Window location:', window.location)
        console.log('Search params:', window.location.search)
        console.log('Hash:', window.location.hash)
        
        // Get the token and email from the URL query parameters
        const urlParams = new URLSearchParams(window.location.search)
        const token = urlParams.get('token')
        const type = urlParams.get('type')
        const email = urlParams.get('email')
        
        console.log('Token from query params:', token)
        console.log('Type from query params:', type)
        console.log('Email from query params:', email)
        
        if (token && type && email) {
          // Confirm the signup using the token and email
          console.log('Verifying OTP with token, type, and email:', { token, type, email })
          const { data, error: confirmError } = await supabase.auth.verifyOtp({
            type: type as any, // 'signup' or 'magiclink' or 'recovery'
            token,
            email,
          })
          
          console.log('Supabase verifyOtp response:', { data, error: confirmError })
          
          if (confirmError) {
            setError('Failed to confirm email: ' + confirmError.message)
            setMessage('')
          } else {
            setMessage('Email confirmed successfully! You can now sign in.')
          }
        } else if (token && email) {
          // Fallback when type is not provided
          console.log('Verifying OTP with token and email:', { token, email })
          const { data, error: confirmError } = await supabase.auth.verifyOtp({
            type: 'signup',
            token,
            email,
          })
          
          console.log('Supabase verifyOtp response:', { data, error: confirmError })
          
          if (confirmError) {
            setError('Failed to confirm email: ' + confirmError.message)
            setMessage('')
          } else {
            setMessage('Email confirmed successfully! You can now sign in.')
          }
        } else {
          // Try to get token from hash (fallback for older links)
          const hash = window.location.hash.substring(1)
          console.log('Hash content:', hash)
          const hashParams = new URLSearchParams(hash)
          const hashToken = hashParams.get('confirmation_token')
          const hashEmail = hashParams.get('email')
          
          console.log('Token from hash:', hashToken)
          console.log('Email from hash:', hashEmail)
          
          if (hashToken && hashEmail) {
            console.log('Verifying OTP with hash token and email')
            const { data, error: confirmError } = await supabase.auth.verifyOtp({
              type: 'signup',
              token: hashToken,
              email: hashEmail,
            })
            
            console.log('Supabase verifyOtp response (hash):', { data, error: confirmError })
            
            if (confirmError) {
              setError('Failed to confirm email: ' + confirmError.message)
              setMessage('')
            } else {
              setMessage('Email confirmed successfully! You can now sign in.')
            }
          } else {
            // Try getting token directly from hash without parsing
            if (hash && hash.includes('confirmation_token')) {
              console.log('Trying direct hash verification')
              // Extract token and email from hash
              const hashUrlParams = new URLSearchParams(hash)
              const directToken = hashUrlParams.get('confirmation_token')
              const directEmail = hashUrlParams.get('email')
              
              if (directToken && directEmail) {
                const { data, error: confirmError } = await supabase.auth.verifyOtp({
                  type: 'signup',
                  token: directToken,
                  email: directEmail,
                })
                
                console.log('Supabase verifyOtp response (direct hash):', { data, error: confirmError })
                
                if (confirmError) {
                  setError('Failed to confirm email: ' + confirmError.message)
                  setMessage('')
                } else {
                  setMessage('Email confirmed successfully! You can now sign in.')
                }
              } else {
                setError('Invalid confirmation link - missing token or email')
                setMessage('')
              }
            } else {
              setError('Invalid confirmation link - no token or email found')
              setMessage('')
            }
          }
        }
      } catch (err: unknown) {
        console.error('Error confirming email:', err)
        setError('An error occurred while confirming your email: ' + (err as Error).message)
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