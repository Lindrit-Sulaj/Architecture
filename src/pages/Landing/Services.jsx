import React from 'react'

const services = [
  {
    icon: 'design_services',
    title: 'Design & Planning',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio veritatis similique, id ratione.'
  },
  {
    icon: 'apartment',
    title: 'Exterior Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio veritatis similique, id ratione.'
  },
  {
    icon: 'king_bed',
    title: 'Interior & Furniture',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio veritatis similique, id ratione.'
  },
  {
    icon: 'construction',
    title: 'Construction',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio veritatis similique, id ratione.'
  }
]

const Services = () => {
  return (
    <section className="services bg-blue-800 py-20">
      <div className='my-6 max-w-mw-normal mx-auto px-8 desktop:px-0'>
        <div className='mb-12'>
          <p className='text-yellow-300 font-bold uppercase font-inter-tight tracking-wider'>Our Services</p>
          <div className='flex justify-between flex-wrap my-6 gap-y-8'>
            <h1 className='w-full tablet:w-2/5 text-4xl text-neutral-100 font-bold font-playfair laptop:text-[40px]'>What Can We Offer For Your Home?</h1>
            <p className='tablet:w-2/5 laptop:text-lg text-neutral-200  leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi voluptas, necessitatibus reiciendis magni. Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          </div>
        </div>
        <div className='flex gap-4 justify-between flex-wrap laptop:gap-4 laptop:flex-nowrap mt-20'>
          { services.map((service, index) => (
            <Service {...service} key={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

const Service = ({ icon, title, desc }) => {
  return (
    <div className='bg-blue-750 border-solid border-[1px] border-blue-700 rounded-md px-8 py-12 w-full tablet:w-[49%] laptop:25%'>
      <span className='material-symbols-outlined text-yellow-100 text-6xl'>{icon}</span>
      <h1 className='text-neutral-100 text-2xl font-semibold font-inter-tight tracking-wide mt-4'>{title}</h1>
      <p className='text-neutral-200 text-[17px] opacity-80 mt-4 leading-7'>{desc}</p>
      <button className='flex mt-6 items-center text-lg text-yellow-100 font-medium'>
        <span>Read more</span>
        <span className='material-symbols-outlined'>chevron_right</span>
      </button>
    </div>
  )
}

export default Services
