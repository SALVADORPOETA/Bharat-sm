import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { IoIosCloseCircle } from 'react-icons/io'

const LanguagesModal = ({ image, name, description, family }) => {
  const [isModalOpen1, setIsModalOpen1] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)
  const modalRef1 = useRef(null)
  const modalRef2 = useRef(null)

  useEffect(() => {
    const handleOutsideClick1 = (event) => {
      if (modalRef1.current && !modalRef1.current.contains(event.target)) {
        setIsModalOpen1(false)
      }
    }

    const handleOutsideClick2 = (event) => {
      if (modalRef2.current && !modalRef2.current.contains(event.target)) {
        setIsModalOpen2(false)
      }
    }

    if (isModalOpen1) {
      document.addEventListener('mousedown', handleOutsideClick1)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick1)
    }

    if (isModalOpen2) {
      document.addEventListener('mousedown', handleOutsideClick2)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick2)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick1)
      document.removeEventListener('mousedown', handleOutsideClick2)
    }
  }, [isModalOpen1, isModalOpen2])

  const handleImageClick1 = () => {
    setIsModalOpen1(true)
  }
  const handleCloseModal1 = () => {
    setIsModalOpen1(false)
  }

  const handleImageClick2 = () => {
    setIsModalOpen2(true)
  }
  const handleCloseModal2 = () => {
    setIsModalOpen2(false)
  }

  return (
    <div className="flex flex-col border border-chakraBlue shadow-lg rounded-lg hover:scale-105 duration-300 max-h-full bg-green">
      <div className="flex relative h-[200px] w-full">
        <Image
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg hover:cursor-pointer"
          onClick={handleImageClick1}
        />
      </div>
      <div className="flex justify-between px-4 py-6 bg-gold rounded-b-lg border-y border-chakraBlue">
        <p className="font-bold text-chakraBlue">{name}</p>
        <p>
          <span className="bg-green border border-chakraBlue text-gold px-4 py-2 rounded-full">
            {family}
          </span>
        </p>
      </div>
      {isModalOpen1 &&
        createPortal(
          <div className="fixed inset-0 top-[90px] flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div
              ref={modalRef1}
              className="bg-saffron p-5 rounded-xl shadow-lg max-w-[500px]"
            >
              <div className="grid grid-cols-2 mb-4">
                <div className="col-span-1 flex justify-center items-center">
                  <Image
                    src={image}
                    alt={name}
                    className={
                      'p-4 mx-auto my-4 rounded-[20%] hover:scale-105 ease-in-out duration-300 cursor-pointer'
                    }
                    onClick={handleImageClick2}
                  />
                  {isModalOpen2 && (
                    <div className="fixed inset-0 top-[90px] flex items-center justify-center bg-gray-900 bg-opacity-50">
                      <div
                        ref={modalRef2}
                        className="bg-green p-5 rounded-xl shadow-lg max-w-full max-h-full overflow-auto relative"
                      >
                        <div className="flex justify-center items-center w-full h-full">
                          <Image
                            src={image}
                            alt={name}
                            style={{
                              objectFit: 'contain',
                            }}
                          />
                          <div className="absolute top-4 right-4 lg:right-8 p-4">
                            <IoIosCloseCircle
                              className="text-deepRed/90 text-7xl lg:text-8xl cursor-pointer hover:scale-105 ease-in-out duration-300"
                              onClick={handleCloseModal2}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center h-full text-center">
                  <h1 className="text-2xl mb-4">{name}</h1>
                  <p>{description}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="px-4 py-2 rounded-lg"
                  onClick={handleCloseModal1}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}

export default LanguagesModal
