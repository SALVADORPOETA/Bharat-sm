'use client'

import { UserAuth } from '@/app/context/AuthContext'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logOut } = UserAuth()

  const handleNav = () => {
    setNav(!nav)
  }

  const handleNavClick = () => {
    setNav(false)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 20) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  const handleSignOut = async () => {
    try {
      await logOut()
      router.push('/signin')
      console.log('You are logged out')
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = () => {
    handleSignOut()
    handleNavClick()
  }

  const isActive = (path) => pathname === path

  return (
    <nav
      className={
        shadow
          ? 'shadow-xl fixed top-0 left-0 z-50 w-full h-[90px] bg-saffron/90'
          : 'fixed top-0 left-0 z-50 w-full h-[90px] bg-saffron'
      }
    >
      <div className="max-w-[1620px] fixed left-0 top-0 w-full z-10">
        <div className="flex mx-auto px-4 xl:px-8 justify-between items-center h-[90px]">
          <h1>
            <Link
              href="/"
              className="text-chakraBlue font-bold text-3xl m-2 p-2"
            >
              Bharat
            </Link>
          </h1>
          <div className="hidden md:flex h-full">
            <ul className="flex items-center text-chakraBlue font-bold text-xl">
              {user ? (
                <li>
                  <Link
                    href="/account"
                    className={`hover:border-b-4 hover:border-deepRed mx-3 ${
                      isActive('/account') ? 'border-b-4 border-deepRed' : ''
                    }`}
                  >
                    Account
                  </Link>
                </li>
              ) : null}
              <li>
                <Link
                  href="/"
                  className={`hover:border-b-4 hover:border-deepRed mx-3 ${
                    isActive('/') ? 'border-b-4 border-deepRed' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className={`hover:border-b-4 hover:border-deepRed mx-3 ${
                    isActive('/history') ? 'border-b-4 border-deepRed' : ''
                  }`}
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/languages"
                  className={`hover:border-b-4 hover:border-deepRed mx-3 ${
                    isActive('/languages') ? 'border-b-4 border-deepRed' : ''
                  }`}
                >
                  Languages
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`hover:border-b-4 hover:border-deepRed mx-3 ${
                    isActive('/contact') ? 'border-b-4 border-deepRed' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
              {user ? (
                <button
                  onClick={handleClick}
                  className="ml-4 py-3 px-7 font-normal"
                >
                  Log Out
                </button>
              ) : (
                <Link href="/signin">
                  <button className="ml-4 py-3 px-7 font-normal">
                    Sign In
                  </button>
                </Link>
              )}
            </ul>
          </div>
          <div
            onClick={handleNav}
            className="block md:hidden z-10 text-3xl text-chakraBlue hover:cursor-pointer"
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
              {user ? (
                <li onClick={handleNav} className="p-4 mt-8">
                  <Link
                    href="/account"
                    className={`hover:border-b-4 hover:border-deepRed mx-3 ${
                      isActive('/account') ? 'border-b-4 border-deepRed' : ''
                    }`}
                  >
                    Account
                  </Link>
                </li>
              ) : null}
              <li onClick={handleNav} className="p-4">
                <Link
                  href="/"
                  className={`hover:border-b-4 hover:border-deepRed mx-3 ${
                    isActive('/') ? 'border-b-4 border-deepRed' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li onClick={handleNav} className="p-4">
                <Link
                  href="/history"
                  className={`hover:border-b-4 hover:border-deepRed mx-3 ${
                    isActive('/history') ? 'border-b-4 border-deepRed' : ''
                  }`}
                >
                  History
                </Link>
              </li>
              <li onClick={handleNav} className="p-4">
                <Link
                  href="/languages"
                  className={`hover:border-b-4 hover:border-deepRed mx-3 ${
                    isActive('/languages') ? 'border-b-4 border-deepRed' : ''
                  }`}
                >
                  Languages
                </Link>
              </li>
              <li onClick={handleNav} className="p-4">
                <Link
                  href="/contact"
                  className={`hover:border-b-4 hover:border-deepRed mx-3 ${
                    isActive('/contact') ? 'border-b-4 border-deepRed' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li onClick={handleNav} className="p-4">
                {user ? (
                  <button onClick={handleClick} className="m-2 py-3 px-7">
                    Log Out
                  </button>
                ) : (
                  <Link href="/signin">
                    <button onClick={handleNavClick} className="m-4 py-3 px-7">
                      Sign In
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
