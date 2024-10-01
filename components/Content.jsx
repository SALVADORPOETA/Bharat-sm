'use client'

import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

const Content = () => {
  return (
    <div className="w-[95%] h-[80%] mt-[90px] bg-gradient-to-b from-gold to-deepRed rounded-2xl text-white overflow-auto">
      <h1 className="mt-6 mx-8 flex justify-center text-gold bg-deepRed/90 rounded-xl p-2">
        Content
      </h1>
      <div className="grid grid-cols-2 mx-8 mt-6 gap-4 mb-4">
        <div className="overflow-hidden">
          <Link href="/" className="text-chakraBlue font-bold px-6">
            Home
          </Link>
          <ul className="mt-2">
            <ScrollLink to="1" smooth={true} offset={-100} duration={300}>
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Introduction
              </li>
            </ScrollLink>
            <ScrollLink to="2" smooth={true} offset={-100} duration={300}>
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Geography
              </li>
            </ScrollLink>
            <ScrollLink to="3" smooth={true} offset={-100} duration={300}>
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Politics
              </li>
            </ScrollLink>
            <ScrollLink to="4" smooth={true} offset={-100} duration={300}>
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Economy
              </li>
            </ScrollLink>
            <ScrollLink to="5" smooth={true} offset={-100} duration={300}>
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Demographics
              </li>
            </ScrollLink>
            <ScrollLink to="6" smooth={true} offset={-100} duration={300}>
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Art
              </li>
            </ScrollLink>
            <ScrollLink to="7" smooth={true} offset={-100} duration={300}>
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Architecture
              </li>
            </ScrollLink>
            <ScrollLink to="8" smooth={true} offset={-100} duration={300}>
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Society
              </li>
            </ScrollLink>
          </ul>
        </div>
        <div className="overflow-hidden">
          <Link href="/history" className="text-chakraBlue font-bold px-6">
            History
          </Link>
          <ul className="mt-2">
            <Link href="/history?scrollToId=1">
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Bronze Age
              </li>
            </Link>
            <Link href="/history?scrollToId=2">
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Iron Age
              </li>
            </Link>
            <Link href="/history?scrollToId=3">
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Classical period
              </li>
            </Link>
            <Link href="/history?scrollToId=4">
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Early medieval period
              </li>
            </Link>
            <Link href="/history?scrollToId=5">
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Late medieval period
              </li>
            </Link>
            <Link href="/history?scrollToId=6">
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Early modern period
              </li>
            </Link>
            <Link href="/history?scrollToId=7">
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Late modern and contemporary period
              </li>
            </Link>
            <Link href="/history?scrollToId=8">
              <li className="hover:cursor-pointer hover:bg-green rounded-lg px-2 hover:py-1 ease-in-out duration-200 border-b">
                Independence and partition
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Content
