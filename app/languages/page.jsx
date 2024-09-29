import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Subscribe from '@/components/Subscribe'
import React from 'react'
import LanguagesCards from './LanguagesCards'

const Languages = () => {
  return (
    <div className="font-tiro">
      <Navbar />
      <LanguagesCards />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Languages
