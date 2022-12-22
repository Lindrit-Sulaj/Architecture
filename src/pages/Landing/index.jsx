import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Services from './Services';
import Achievements from './Achievements';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Experience from './Experience';
import '../../assets/landing.scss';

const Landing = () => {
  return (
    <main className='Landing'>
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <Achievements />
      <Testimonials />
      <Experience />
    </main>
  )
}

export default Landing