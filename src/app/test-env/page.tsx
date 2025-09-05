'use client'

import { useEffect, useState } from 'react'

export default function TestEnv() {
  const [envVars, setEnvVars] = useState({})

  useEffect(() => {
    setEnvVars({
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      windowLocation: typeof window !== 'undefined' ? window.location.origin : 'Not available'
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Environment Variables Test
          </h2>
        </div>
        
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Environment Variables</h3>
              <pre className="mt-2 p-4 bg-gray-50 rounded-md text-sm overflow-x-auto">
                {JSON.stringify(envVars, null, 2)}
              </pre>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">Instructions</h3>
              <div className="mt-2 p-4 bg-blue-50 rounded-md text-sm">
                <p className="text-blue-800">
                  Make sure your Supabase project has the following redirect URLs configured:
                </p>
                <ul className="mt-2 list-disc list-inside text-blue-800">
                  <li>{process.env.NEXT_PUBLIC_APP_URL}/auth/callback</li>
                  <li>{process.env.NEXT_PUBLIC_APP_URL}/auth/confirm</li>
                  <li>{process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password</li>
                </ul>
                <p className="mt-2 text-blue-800">
                  Current app URL: {process.env.NEXT_PUBLIC_APP_URL}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}