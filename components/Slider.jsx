'use client'

import { useCallback, useEffect, useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Slider = () => {
  const slides = [
    { url: '/tajmahal.jpeg', title: 'slide1' },
    { url: '/three.jpg', title: 'slide2' },
    { url: '/temple.jpg', title: 'slide3' },
    { url: '/buddha.webp', title: 'slide4' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, slides.length])

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full h-full group overflow-hidden">
      <div
        className="flex w-[100%] h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url(${slide.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/80 rounded-xl">
        {slides.map((slide, slideIndex) => (
          <div
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? 'text-chakraBlue' : 'text-green'
            }`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
