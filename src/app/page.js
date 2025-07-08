import CategorySlider from '@/components/CategorySlider'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
        <CategorySlider />
    </div>
  )
}

export default page
