'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ConfirmEmail() {
  const [message, setMessage] = useState('Confirming your email...')
  const [error, setError] = useState('')

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        // Get the token from the URL
        const hash = window.location.hash.substring(1)
        const params = new URLSearchParams(hash)
        const token = params.get('confirmation_token')
        
        if (token) {
          // Confirm the signup using the token
          const { error: confirmError } = await supabase.auth.verifyOtp({
            type: 'signup',
            token_hash: token,
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
      } catch (err: unknown) {
        // Handle the error
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