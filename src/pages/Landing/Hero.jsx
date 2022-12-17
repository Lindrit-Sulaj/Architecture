import React from 'react'
import '../../assets/landing.scss'
import { Button } from '../../components/'

const Hero = () => {
  return (
    <div className='hero-bg h-[calc(95vh-70px)]'>
      <section className="Hero max-w-[1600px] mx-auto flex flex-col justify-center h-full px-8">
        <div className='text max-w-[600px] mx-auto tablet:max-w-[800px] tablet:mx-0'>
          <h1 className='font-bold text-5xl text-neutral-900 text-center tablet:text-6xl tablet:text-left laptop:text-7xl font-playfair tablet:max-w-[600px] laptop:max-w-[none]'>We build your dream house</h1>
          <p className='mt-8 text-neutral-500 text-lg font-medium text-center tablet:text-left font-inter-tight max-w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero voluptatum, sed inventore.</p>
          <div className='flex mt-8 gap-6 justify-center tablet:justify-start'>
            <button className='bg-blue-400 text-neutral-100 tablet:bg-neutral-900 px-6 py-2 rounded-sm font-inter-tight font-semibold tablet:text-neutral-100'>Get Started</button>
            <button className='transition-all border-solid border-b-[1px] px-6 py-2 rounded-sm text-neutral-900  font-inter-tight font-semibold'>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
