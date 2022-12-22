import React from 'react'

const Experience = () => {
  return (
    <section className="experience max-w-mw-normal items-center flex-wrap py-10 mx-auto flex my-16 px-6 gap-y-10 laptop:px-10">
      <div className='w-full laptop:w-1/2'>
        <p className='uppercase text-yellow-900 font-bold text-lg font-inter-tight'>Step by step</p>
        <h1 className='mt-4 text-4xl font-playfair font-semibold'>How it's working</h1>
        <div className='flex flex-col gap-8 mt-6 pr-4'>
          <div className='flex gap-6 mt-6'>
            <p className='rounded-full shrink-0 bg-blue-600 text-neutral-100 w-[35px] h-[35px] flex justify-center items-center font-inter-tight'>01</p>
            <div className=''>
              <h1 className='text-xl font-semibold font-inter-tight'>Planning</h1>
              <p className='font-noto-sans mt-2 text-neutral-300 tablet:max-w-[400px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nulla fugit eius quis exercitationem et corrupti.</p>
            </div>
          </div>
          <div className='flex gap-6 mt-6'>
            <p className='rounded-full shrink-0 bg-blue-600 text-neutral-100 w-[35px] h-[35px] flex justify-center items-center font-inter-tight'>02</p>
            <div>
              <h1 className='text-xl font-semibold font-inter-tight'>Design</h1>
              <p className='font-noto-sans mt-2 text-neutral-300 tablet:max-w-[400px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nulla fugit eius quis exercitationem et corrupti.</p>
            </div>
          </div>
          <div className='flex gap-6 mt-6'>
            <p className='rounded-full shrink-0 bg-blue-600 text-neutral-100 w-[35px] h-[35px] flex justify-center items-center font-inter-tight'>03</p>
            <div>
              <h1 className='text-xl font-semibold font-inter-tight'>Bulding</h1>
              <p className='font-noto-sans mt-2 text-neutral-300 tablet:max-w-[400px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nulla fugit eius quis exercitationem et corruptia.</p>
            </div>
          </div>
        </div>
      </div>
      <img className='w-full mt-[40px] tablet:w-1/2 rounded-md laptop:h-[550px] object-cover' src="https://cdn.tlcinteriors.com.au/wp-content/uploads/2018/05/white-living-room-with-green-accents-botanical-interior-design-desenio-art.jpg" alt="White living room with green accents botanical interior design" />
    </section>
  )
}

export default Experience