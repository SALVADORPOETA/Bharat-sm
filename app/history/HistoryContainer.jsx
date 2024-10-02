'use client'

import React, { useState, useEffect } from 'react'
import BharatTextSection from '../../components/BharatTextSection'
import HistoryText from './HistoryText'
import BharatTextP2 from '../../components/BharatTextP2'
import BharatImage from '../../components/BharatImage'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

const SkeletonSection = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-96 w-full rounded-md mb-4"></div>
    </div>
  )
}

const HistoryContainer = () => {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const searchParams = useSearchParams()
  const scrollToId = searchParams.get('scrollToId')

  useEffect(() => {
    if (scrollToId && history.length > 0) {
      const element = document.getElementById(scrollToId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })

        setTimeout(() => {
          window.scrollBy(0, -100)
        }, 1000)
      }
    }
  }, [scrollToId, history])

  useEffect(() => {
    const apiURL = 'https://bharat-api-sm.vercel.app/history'
    axios
      .get(apiURL)
      .then((response) => {
        setHistory(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data from API: ', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-gradient-to-l from-green to-chakraBlue m-8 mt-[120px]">
      {loading
        ? Array(8)
            .fill(0)
            .map((_, index) => <SkeletonSection key={index} />)
        : history.map((item) => (
            <div key={item.id.toString()}>
              <div
                key={item.id}
                id={item.id.toString()}
                className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 px-4 md:px-8 md:pt-8 md:pb-16 lg:px-4 lg:pt-0 lg:pb-0 my-8 bg-saffron rounded-xl"
              >
                {item.id % 2 !== 0 ? (
                  <>
                    <div className="hidden md:flex lg:hidden col-span-12">
                      <BharatTextSection section={item.section} />
                    </div>
                    <>
                      <div className="pt-8 pb-16 grid grid-cols-1 md:grid-cols-12 md:p-0 lg:px-8 lg:pt-8 lg:pb-8 md:col-span-12">
                        <div className="flex w-full md:items-end md:col-span-7 lg:col-span-8">
                          <HistoryText
                            id={item.id}
                            section={item.section}
                            p1={item.p1}
                            p2={item.p2}
                          />
                        </div>
                        <div className="flex h-full justify-center items-center md:col-span-5 md:max-h-full md:max-w-full lg:col-span-4">
                          <BharatImage
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            className="inline p-4"
                          />
                        </div>
                      </div>
                      <div className="hidden md:flex lg:hidden col-span-12">
                        <BharatTextP2 p2={item.p2} />
                      </div>
                    </>
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex lg:hidden col-span-12">
                      <BharatTextSection section={item.section} />
                    </div>
                    <div className="pt-8 pb-16 grid grid-cols-1 md:grid-cols-12 md:p-0 lg:p-8 md:col-span-12 items-end">
                      <div className="flex h-full md:col-span-5 md:max-h-full md:max-w-full md:justify-center md:items-center lg:max-h-full lg:col-span-4">
                        <BharatImage
                          image={item.image}
                          title={item.title}
                          description={item.description}
                          className="hidden md:inline p-4"
                        />
                      </div>
                      <div className="md:col-span-7 lg:col-span-8">
                        <HistoryText
                          key={item.id}
                          id={item.id}
                          section={item.section}
                          p1={item.p1}
                          p2={item.p2}
                        />
                      </div>
                      <div className="h-full p-4 md:p-0">
                        <BharatImage
                          image={item.image}
                          title={item.title}
                          description={item.description}
                          className="inline md:hidden"
                        />
                      </div>
                    </div>
                    <div className="hidden md:flex lg:hidden col-span-12">
                      <BharatTextP2 p2={item.p2} />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
      <div className="fixed bottom-8 right-8 p-4">
        <BsFillArrowUpCircleFill
          onClick={scrollToTop}
          className="text-chakraBlue text-7xl cursor-pointer  hover:scale-105 ease-in-out duration-300"
        />
      </div>
    </div>
  )
}

export default HistoryContainer
