import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Services from './Services';
import '../../assets/landing.scss';

const Landing = () => {
  return (
    <main className='Landing'>
      <Hero />
      <AboutUs />
      <Services />
    </main>
  )
}

export default Landing