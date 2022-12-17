import React from 'react';
import { Link } from 'react-router-dom';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { InformationBox } from '../../components';

const AboutUs = () => {
  const [screenWidth, breakpoint] = useMediaQuery();

  return (
    <section className="About-Us max-w-mw-normal mx-auto my-10 flex flex-wrap-reverse justify-center items-center">
      {breakpoint !== 'mobile' ? (
        <img className='w-3/4 block mx-auto laptop:w-1/2' src="https://ik.imagekit.io/0s9lwb2yr/Architecture/Landing-About-Image-1_76KWRkBJK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671285247443" alt="" />
      ) : (
        <h1>Image goes here</h1>
      )
      }
      <div className='w-full px-4 laptop:w-1/2'>
        <p className='text-left text-yellow-900 font-inter-tight uppercase font-bold tablet:text-center laptop:text-left'>About Us</p>
        <h1 className='text-left text-4xl font-playfair font-bold mt-2 mb-8 tablet:text-center tablet:max-w-[700px] tablet:mx-auto laptop:text-left laptop:mx-0 laptop:text-[40px]'>We specialize in interior and exterior design</h1>
        <p className='text-left mt-2 text-neutral-400 text-lg max-w-[580px] tablet:text-center tablet:mx-auto laptop:mx-0 laptop:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui impedit blanditiis exercitationem modi illum assumenda eum ea esse saep.</p>
        <div className='flex items-stretch justify-start tablet:justify-center my-10 laptop:justify-start'>
          <InformationBox
            iconName='support_agent'
            title='Free Consultation'
            desc='We are constantly growing, learning and improving.' />
          <InformationBox 
            iconName='groups_3'
            title='Best Team Members'
            desc='Our team consists of designers, architects and construction workers.'/>
        </div>
        <button className='transition-all block mt-10 mb-8 bg-neutral-800 text-neutral-100 px-4 py-2 rounded-sm hover:bg-neutral-600 tablet:mx-auto laptop:mx-0'>View Projects</button>
      </div>
    </section>
  )
}

export default AboutUs
