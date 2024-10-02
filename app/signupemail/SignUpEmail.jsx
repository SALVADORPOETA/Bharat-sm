'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

const SignUpEmail = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { createUser } = UserAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password, error)
      router.push('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div className="h-[82vh] mt-[120px] mb-20 md:mb-6 lg:mb-4 xl:mb-0">
      <div className="bg-saffron text-chakraBlue mx-8 mb-40 md:mb-8 rounded-xl">
        <div>
          <h1 className="text-center pt-12 pb-4 text-3xl md:text-4xl">
            Sign Up for a <span className="text-deepRed">Free</span> account
          </h1>
          <p className="text-center py-2 text-xl md:text-2xl">
            Already have an account yet?
            <Link href="/signinemail" className="border-b-4 border-green ml-2">
              Sign In!
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="pb-12 px-8 md:px-16 lg:px-32">
          <div className="flex flex-col py-2">
            <label className="py-2 pl-8">Add an Email Address</label>
            <input
              type="email"
              className="border border-chakraBlue bg-slate-200 text-inherit caret-inherit rounded-3xl p-3 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 pl-8">
              Create a Password (at least 6 characters)
            </label>
            <input
              type="password"
              className="border border-chakraBlue bg-slate-200 text-inherit caret-inherit rounded-3xl p-3 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <p className="text-center py-2 text-xl md:text-2xl">
              The Email or the Password is not valid. Please try again.
            </p>
          )}
          <div className="w-full flex items-center justify-center">
            <button className="w-[95%] py-3 px-7 my-4 hover:scale-105">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpEmail
