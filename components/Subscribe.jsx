'use client'

import Link from 'next/link'
import { UserAuth } from '../app/context/AuthContext.js'
import { useRouter } from 'next/navigation'

const Subscribe = () => {
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
    <div className="bg-saffron w-full text-center pt-40 mt-8">
      <h1 className="mx-20 text-4xl text-chakraBlue">
        {`Join our Bharat's community!`}
      </h1>
      <div className="flex items-center justify-center p-8 text-xl">
        {user ? (
          <button onClick={handleSignOut} className="mt-2 py-3 px-16">
            Log Out
          </button>
        ) : (
          <Link href="/signin">
            <button className="mt-2 py-3 px-16">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Subscribe
