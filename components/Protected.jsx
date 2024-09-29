'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { UserAuth } from '../app/context/AuthContext.js'

const Protected = ({ children }) => {
  const { user } = UserAuth()
  const router = useRouter()

  React.useEffect(() => {
    if (!user) {
      router.push('/signin') // Redirect to home if not authenticated
    }
  }, [user, router])

  if (!user) {
    return null // Return a loading spinner or similar here
  }

  return children
}

export default Protected
