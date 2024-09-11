import Link from 'next/link'
import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Subscribe = () => {
  return (
    <div className="bg-saffron w-full text-center pt-20 pb-20 mt-80">
      <h1 className="mx-20 text-4xl text-chakraBlue">
        Join our Bharat&apos;s community!
      </h1>
      <div className="flex items-center justify-center p-8">
        <Link href="/">
          <button className="px-7 py-3 text-xl">Sign In</button>
        </Link>
      </div>
      <div className="flex w-full items-center justify-center p-8">
        <BsFillArrowUpCircleFill className="text-chakraBlue text-7xl hover:cursor-pointer" />
      </div>
    </div>
  )
}

export default Subscribe
