'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="bg-saffron max-w-[1620px] fixed left-0 top-0 w-full z-10">
      <div className="flex mx-auto px-4 xl:px-8 justify-between items-center h-[90px]">
        <h1>
          <Link href="/" className="text-chakraBlue font-bold text-3xl m-2 p-2">
            Bharat
          </Link>
        </h1>
        <div className="hidden md:flex">
          <ul className="flex items-center text-chakraBlue font-bold text-xl m-2">
            <Link href="/" className="m-2 p-2">
              <li>Home</li>
            </Link>
            <Link href="/" className="m-2 p-2">
              <li>History</li>
            </Link>
            <Link href="/" className="m-2 p-2">
              <li>Gods</li>
            </Link>
            <Link href="/" className="m-2 p-2">
              <li>Contact</li>
            </Link>
            <Link href="/">
              <button className="px-7 py-3 ml-4 font-normal">Sign In</button>
            </Link>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="block sm:hidden z-10 text-3xl text-chakraBlue hover:cursor-pointer"
        >
          {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div
          className={
            nav
              ? 'md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-saffron text-center ease-in-out duration-300'
              : 'md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-saffron text-center ease-in-out duration-300'
          }
        >
          <ul className="flex flex-col items-center justify-center min-h-full w-full text-chakraBlue text-4xl">
            <li className="p-4">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4">
              <Link href="/">History</Link>
            </li>
            <li className="p-4">
              <Link href="/">Gods</Link>
            </li>
            <li className="p-4">
              <Link href="/">Contact</Link>
            </li>
            <li className="m-2 p-4">
              <Link href="/">
                <button className="px-7 py-3 ml-4 font-normal text-2xl">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
