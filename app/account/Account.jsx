'use client'

import Link from 'next/link'
import React from 'react'
import { UserAuth } from '../context/AuthContext.js'
import { useRouter } from 'next/navigation'
import Image from 'next/image.js'

const Account = () => {
  const { logOut, user } = UserAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await logOut()
      router.push('/signin')
      console.log('You are logged out')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="h-[76vh] mb-[35px]">
      <div className="flex flex-col items-center justify-center mt-[120px] bg-saffron text-chakraBlue mx-8 my-8 rounded-xl p-8 h-full">
        <h1 className="text-center text-2xl font-bold py-4">Account</h1>
        {user.displayName ? (
          <div className="text-center text-3xl font-bold py-4">
            <p>Welcome, {user.displayName}!</p>
            <div className="flex items-center justify-center p-8">
              <Image
                src={user.photoURL}
                alt="User Profile"
                className="rounded-full"
                width={100}
                height={100}
              />
            </div>
          </div>
        ) : (
          <div className="text-center font-bold text-3xl py-4">
            <p>Welcome, {user && user.email}</p>
          </div>
        )}
        <button
          className="py-3 px-7 my-auto mx-auto block"
          onClick={handleSignOut}
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Account
