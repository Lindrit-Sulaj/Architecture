import React from 'react'
import { InformationBox } from '../../components'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const Achievements = () => {
  const [screenWidth, breakpoint] = useMediaQuery()

  return (
    <div>
      <section className="About-Us max-w-mw-normal mx-auto my-20 laptop:my-10 flex flex-wrap justify-center items-center">
        <div className='w-full px-4 laptop:w-1/2'>
          <p className='text-left text-yellow-900 font-inter-tight uppercase font-bold tablet:text-center laptop:text-left'>Achievements</p>
          <h1 className='text-left text-4xl font-playfair font-bold mt-2 mb-8 tablet:text-center tablet:max-w-[700px] tablet:mx-auto laptop:text-left laptop:mx-0 laptop:text-[40px]'>We are passionate and we know our costumers needs</h1>
          <p className='text-left mt-2 text-neutral-400 text-lg max-w-[580px] tablet:text-center tablet:mx-auto laptop:mx-0 laptop:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui impedit blanditiis exercitationem modi illum assumenda eum ea esse saep.</p>
          <div className='flex flex-wrap tablet:flex-nowrap items-stretch justify-start tablet:justify-center my-10 laptop:justify-start'>
            <InformationBox
              iconName='sticky_note_2'
              title='320'
              desc='Projects Completed.' />
            <InformationBox
              iconName='groups'
              title='180'
              desc='Clients Worldwide' />
            <InformationBox 
              iconName='workspace_premium'
              title='30'
              desc='Award Wins' />
          </div>
          <button className='transition-all block mt-10 mb-8 bg-neutral-800 text-neutral-100 px-4 py-2 rounded-sm hover:bg-neutral-600 tablet:mx-auto laptop:mx-0'>View Projects</button>
        </div>
        {breakpoint !== 'mobile' ? (
          <img className='w-3/4 block mx-auto laptop:w-1/2' src="https://ik.imagekit.io/0s9lwb2yr/Architecture/Achievements-Image-1_WA_aVwRxr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671359972734" alt="" />
        ) : (
          <img className='w-3/4 block mx-auto laptop:w-1/2' src="https://ik.imagekit.io/0s9lwb2yr/Architecture/tr:w-500/Achievements-Image-1_WA_aVwRxr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671359972734" alt="" />
        )
        }
      </section>
    </div>
  )
}

export default Achievements
