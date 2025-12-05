import React from 'react'
import ContactPage from './ContactPage'
import ContactFirst from './ContactFirst'
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'

function page() {
  return (
    <div>
      <Navbar color="white"/>
      <ContactPage/>
      <ContactFirst/>
      <Footer/>
    </div>
  )
}

export default page
