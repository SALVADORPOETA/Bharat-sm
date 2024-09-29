import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Subscribe from '@/components/Subscribe'
import React, { Suspense } from 'react'
import HistoryContainer from './HistoryContainer'

const History = () => {
  return (
    <Suspense>
      <div className="font-tiro">
        <Navbar />
        <HistoryContainer />
        <Subscribe />
        <Footer />
      </div>
    </Suspense>
  )
}

export default History
