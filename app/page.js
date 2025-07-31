"use client"
import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection.js'
import MissionSection from './components/MissionSection'
import ServicesSection from './components/ServicesSection'
import CausesSection from './components/CausesSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const page = () => {
  return (
    
    <div className='min-h-screen bg-beige-100'>
      <Header/>
      <HeroSection/>
      <MissionSection/>
      <ServicesSection/>
      <CausesSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default page