import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Subscribe from '@/components/Subscribe'
import React from 'react'
import ContactForm from './ContactForm'

const contact = () => {
  return (
    <div className="font-tiro">
      <Navbar />
      <ContactForm />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default contact
