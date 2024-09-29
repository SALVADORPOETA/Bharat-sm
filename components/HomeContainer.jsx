'use client'

import React, { useState } from 'react'
import { dataHome } from '@/data/dataHome'
import BharatMeaning from './BharatMeaning'
import HomeText from './HomeText'
import HomeImage from './BharatImage'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import HomeTextP2 from './BharatTextP2'
import HomeTextSection from './BharatTextSection'

const HomeContainer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [sections] = useState(dataHome)
  return (
    <div className="bg-gradient-to-l from-green to-chakraBlue m-8">
      {sections.map((item) => (
        <div key={item.id}>
          <div
            key={item.id}
            id={item.id}
            className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 px-4 md:px-8 md:pt-8 md:pb-16 lg:px-4 lg:pt-0 lg:pb-0 my-8 bg-saffron rounded-xl"
          >
            {item.id % 2 !== 0 ? (
              <>
                <div className="hidden md:flex lg:hidden col-span-12">
                  <HomeTextSection section={item.section} />
                </div>
                <>
                  <div
                    className={`pt-8 pb-16 grid grid-cols-1 md:grid-cols-12 md:p-0 lg:px-8 lg:pt-8 ${
                      item.id === 1 ? 'lg:pb-0' : 'lg:pb-8'
                    } md:col-span-12`}
                  >
                    <div className="flex w-full md:items-end md:col-span-7 lg:col-span-8">
                      <HomeText
                        id={item.id}
                        section={item.section}
                        p1={item.p1}
                        p2={item.p2}
                      />
                    </div>
                    <div className="flex h-full justify-center items-center md:col-span-5 md:max-h-full md:max-w-full lg:col-span-4">
                      <HomeImage
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        className="inline p-4"
                      />
                    </div>
                  </div>
                  <div className="hidden md:flex lg:hidden col-span-12">
                    <HomeTextP2 p2={item.p2} />
                  </div>
                </>
                {item.id === 1 ? (
                  <div className="hidden md:grid col-span-12 justify-center items-center md:mt-4 lg:mt-0 mb-8">
                    <BharatMeaning />
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <div className="hidden md:flex lg:hidden col-span-12">
                  <HomeTextSection section={item.section} />
                </div>
                <div className="pt-8 pb-16 grid grid-cols-1 md:grid-cols-12 md:p-0 lg:p-8 md:col-span-12 items-end">
                  <div className="flex h-full md:col-span-5 md:max-h-full md:max-w-full md:justify-center md:items-center lg:max-h-full lg:col-span-4">
                    <HomeImage
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      className="hidden md:inline p-4"
                    />
                  </div>
                  <div className="md:col-span-7 lg:col-span-8">
                    <HomeText
                      key={item.id}
                      id={item.id}
                      section={item.section}
                      p1={item.p1}
                      p2={item.p2}
                    />
                  </div>
                  <div className="h-full p-4 md:p-0">
                    <HomeImage
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      className="inline md:hidden"
                    />
                  </div>
                </div>
                <div className="hidden md:flex lg:hidden col-span-12">
                  <HomeTextP2 p2={item.p2} />
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

export default HomeContainer
