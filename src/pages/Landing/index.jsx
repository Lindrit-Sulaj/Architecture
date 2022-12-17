import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import '../../assets/landing.scss'

const Landing = () => {
  return (
    <main className='Landing'>
      <Hero />
      <AboutUs />
    </main>
  )
}

export default Landing