'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { MdOutlineMail } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext.js'
import { useRouter } from 'next/navigation'

const SignIn = () => {
  const { googleSignIn, user } = UserAuth()
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user != null) {
      router.push('/account')
    }
  }, [user, router])

  return (
    <div className="h-[76vh] mb-[35px]">
      <div className="flex items-center justify-center mt-[120px] bg-saffron mx-8 my-8 rounded-xl p-8 h-full">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-3xl font-bold pt-16 pb-8 text-chakraBlue">
            Sign In
          </h1>
          <div className="max-w-[240px] m-auto py-4">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
          <h2 className="text-center text-3xl font-bold py-8 text-chakraBlue">
            Or
          </h2>
          <div className="text-center pb-16">
            <Link href="/signinemail">
              <button className="text-xl py-3 px-7 mx-auto">
                <MdOutlineMail className="mr-4 inline-block text-2xl" />
                Sign In with your Email
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
