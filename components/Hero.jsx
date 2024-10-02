'use client'

import React from 'react'
import Slider from './Slider'
import Content from './Content'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { UserAuth } from '@/app/context/AuthContext'

const Hero = () => {
  const { user, logOut } = UserAuth()
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
    <div className="flex">
      <div className="w-full lg:w-[70%] h-screen flex justify-center items-center relative">
        <Slider />
        <div className="absolute w-[70%] h-[60%] flex flex-col justify-center items-center bg-black/70 rounded-2xl text-white text-center">
          <h1 className="text-4xl">
            Eternal <span className="text-gold">India:</span>
          </h1>
          <h2 className="text-3xl">
            <span className="text-gold">Bharat,</span> the sacred land
          </h2>
          <p className="text-gold text-2xl">For The Seekers of Dharma</p>
          {user ? (
            <button className="px-7 py-3 m-4" onClick={handleSignOut}>
              Log Out
            </button>
          ) : (
            <Link href="/signin">
              <button className="px-7 py-3 m-4">Sign In</button>
            </Link>
          )}
        </div>
      </div>
      <div className="hidden lg:flex w-[30%] h-screen justify-center items-center">
        <Content />
      </div>
    </div>
  )
}

export default Hero
