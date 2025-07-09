import AboutUs from '@/components/AboutUs'
import CategorySlider from '@/components/CategorySlider'
import HeroSection from '@/components/HeroSection'
import Process from '@/components/Process'
import TestimonialsSection from '@/components/ProcessAndTestimonial'
import ServiceCards from '@/components/ServiceCards'
import VehicleReport from '@/components/VehicleReport'
import React from 'react'

const page = () => {
  return (
    <div className=" ">
     
      <HeroSection />
      <CategorySlider />
      <AboutUs />
      <ServiceCards />
      <VehicleReport />
     <Process/>
      <TestimonialsSection/>
     
    </div>
  )
}

export default page
