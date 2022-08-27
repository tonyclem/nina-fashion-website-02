import React from 'react'
import { Hero, SummerPage, FashionPhilo, Sort, HomePageProduct, FeaturedProducts, DealView, Reviewer, Contact } from '../components'

export const HomePage = () => {
  return (
    <div>
        <Hero />
        <SummerPage />
        <FashionPhilo />
        <Sort />
        <HomePageProduct /> 
        <FeaturedProducts />
        <DealView />
        <Reviewer />
        <Contact />
    </div>
  )
}
