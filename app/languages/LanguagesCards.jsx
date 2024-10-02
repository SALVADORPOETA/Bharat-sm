'use client'

import React, { useEffect, useState } from 'react'
import LanguagesModal from './LanguagesModal'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import axios from 'axios'

const SkeletonCard = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 w-full rounded-md mb-4"></div>
      <div className="h-16 bg-gray-300 rounded-md mb-2"></div>
    </div>
  )
}

const LanguagesCards = () => {
  const [languages, setLanguages] = useState([])
  const [allLanguages, setAllLanguages] = useState([])
  const [loading, setLoading] = useState(true)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const apiURL = 'https://bharat-api-sm.vercel.app/languages'
    axios
      .get(apiURL)
      .then((response) => {
        setLanguages(response.data)
        setAllLanguages(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data from API: ', error)
        setLoading(false)
      })
  }, [])

  const filterType = (family) => {
    setLanguages(allLanguages.filter((item) => item.family === family))
  }

  return (
    <div className="mt-[120px]">
      <div className="max-w-full m-8 px-8 py-12 bg-saffron rounded-xl">
        <h1 className="text-chakraBlue font-bold text-4xl text-center">
          Languages of India
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <p className="text-xl font-bold text-chakraBlue m-4">
              Filter Family
            </p>
            <div className="flex justify-between max-w-[640px] flex-wrap">
              <button
                className="m-1 px-3 py-1"
                onClick={() => setLanguages(allLanguages)}
              >
                All
              </button>
              <button
                className="m-1 px-3 py-1"
                onClick={() => filterType('Indo-Aryan')}
              >
                Indo-Aryan
              </button>
              <button
                className="m-1 px-3 py-1"
                onClick={() => filterType('Dravidian')}
              >
                Dravidian
              </button>
              <button
                className="m-1 px-3 py-1"
                onClick={() => filterType('Austroasiatic')}
              >
                Austroasiatic
              </button>
              <button
                className="m-1 px-3 py-1"
                onClick={() => filterType('Sino-Tibetan')}
              >
                Sino-Tibetan
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
          {loading
            ? Array(8)
                .fill(0)
                .map((_, index) => <SkeletonCard key={index} />)
            : languages.map((item) => (
                <LanguagesModal
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  family={item.family}
                />
              ))}
        </div>
      </div>
      <div className="fixed bottom-8 right-8 p-4">
        <BsFillArrowUpCircleFill
          onClick={scrollToTop}
          className="text-chakraBlue text-7xl cursor-pointer  hover:scale-105 ease-in-out duration-300"
        />
      </div>
    </div>
  )
}

export default LanguagesCards
