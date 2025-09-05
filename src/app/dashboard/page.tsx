'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  const { user, signOut, loading } = useAuth()
  const router = useRouter()
  const [loadingSignOut, setLoadingSignOut] = useState(false)

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  const handleSignOut = async () => {
    setLoadingSignOut(true)
    try {
      await signOut()
      router.push('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    } finally {
      setLoadingSignOut(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // or redirect component
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="font-semibold text-xl text-pink-600">websiter.click</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Welcome, {user.email}</span>
              <Button
                onClick={handleSignOut}
                disabled={loadingSignOut}
                className="bg-pink-600 hover:bg-pink-700 text-white"
              >
                {loadingSignOut ? 'Signing out...' : 'Sign out'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
              <p className="text-gray-600 mb-8">Welcome to your dashboard! This is a protected page.</p>
              <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4">User Information</h2>
                <div className="space-y-2 text-left">
                  <p><span className="font-medium">Email:</span> {user.email}</p>
                  <p><span className="font-medium">User ID:</span> {user.id}</p>
                  <p><span className="font-medium">Email confirmed:</span> {user.email_confirmed_at ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}