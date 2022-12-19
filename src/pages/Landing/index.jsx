import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Services from './Services';
import Achievements from './Achievements';
import Projects from './Projects';
import '../../assets/landing.scss';

const Landing = () => {
  return (
    <main className='Landing'>
      <Hero />
      <AboutUs />
      <Services />
      <Achievements />
      <Projects />
    </main>
  )
}

export default Landing