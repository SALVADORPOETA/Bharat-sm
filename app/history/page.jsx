import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Subscribe from '@/components/Subscribe'
import React from 'react'
import HistoryContainer from './HistoryContainer'

const History = () => {
  return (
    <div className="font-tiro">
      <Navbar />
      <HistoryContainer />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default History
