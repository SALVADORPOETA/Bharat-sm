'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const SignInEmail = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { signIn } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password, error)
      router.push('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  return (
    <div className="h-[82vh] mt-[120px]">
      <div className="bg-saffron text-chakraBlue mx-8 mb-8 rounded-xl">
        <div>
          <h1 className="text-center pt-12 pb-4 text-3xl md:text-4xl">
            Sign In to <span className="text-deepRed">Your </span> Account
          </h1>
          <p className="text-center py-2 text-xl md:text-2xl">
            {`Don't you have an account yet? `}
            <Link href="/signupemail" className="border-b-4 border-green">
              Sign Up!
            </Link>
          </p>
        </div>
        <form className="pb-12 px-8 md:px-16 lg:px-32" onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium pl-8">Email</label>
            <input
              type="email"
              className="border border-chakraBlue bg-slate-200 rounded-3xl shadow-lg p-3 w-full focus:outline-none text-inherit caret-inherit"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2 ">
            <label className="py-2 font-medium pl-8">Password</label>
            <input
              type="password"
              className="border border-chakraBlue bg-slate-200 rounded-3xl shadow-lg p-3 w-full focus:outline-none text-inherit caret-inherit"
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
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInEmail
