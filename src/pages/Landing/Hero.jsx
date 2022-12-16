import React from 'react'
import '../../assets/landing.scss'
import { Button } from '../../components/'

const Hero = () => {
  return (
    <div className='hero-bg h-[calc(95vh-70px)]'>
      <section className="Hero max-w-mw-normal mx-auto flex flex-col justify-center h-full px-8">
        <div className='text max-w-[800px]'>
          <h1 className='font-bold text-5xl text-neutral-100 text-center tablet:text-6xl tablet:text-left laptop:text-7xl font-playfair'>We build your dream house</h1>
          <p className='mt-8 text-neutral-200 text-lg font-medium text-center tablet:text-left font-inter-tight tablet:max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero voluptatum, sed inventore.</p>
          <div className='flex mt-8 gap-6 justify-center tablet:justify-start'>
            <button className='bg-neutral-100 px-6 py-2 rounded-sm font-inter-tight font-semibold'>Get Started</button>
            <button className='transition-all border-solid border-[1px] px-6 py-2 rounded-sm text-neutral-100 font-inter-tight font-semibold bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.6)]'>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
