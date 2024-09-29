import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Account from './Account'
import Protected from '@/components/Protected'

const accountPage = () => {
  return (
    <Protected className="font-tiro">
      <Navbar />
      <Account />
      <Footer />
    </Protected>
  )
}

export default accountPage
