import React from 'react'
import { Tabs } from '../../components'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Projects = () => {
  return (
    <div className='bg-neutral-150 py-16 px-5 desktop:px-0
    '>
      <section className="project max-w-mx-large mx-auto">
        <p className='font-inter-tight tracking-wider uppercase font-bold text-yellow-900 text-center'>Projects</p>
        <h1 className='text-center my-3 text-4xl font-bold font-playfair'>View our latest projects</h1>
        <div className='flex flex-wrap justify-center laptop:flex-nowrap gap-4 mt-16'>
          <Project
            title="Modern House"
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed minus quis nisi adipisci, officia.'
            image="https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Project
            title="Living Complex"
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed minus quis nisi adipisci, officia.'
            image="https://images.pexels.com/photos/7245369/pexels-photo-7245369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Project
            title="Housing Property"
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed minus quis nisi adipisci, officia.'
            image="https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Project
            title="Living Complex"
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed minus quis nisi adipisci, officia.'
            image="https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&w=300" />
          <Project
            title="Apartment Complex"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed minus quis nisi adipisci, officia."
            image="https://images.pexels.com/photos/1650904/pexels-photo-1650904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </section>
    </div>
  )
}

const Project = ({ title, description, image }) => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <div style={styles} className={`project transition-all h-[400px] w-[90%]
    tablet:w-[40%] laptop:w-[25%] group flex flex-col justify-end pb-8 px-4 gap-4 rounded-sm hover:justify-start`}>
      <h1 className='transition-all text-neutral-100 font-semibold text-3xl group-hover:my-3 group-hover:mt-5'>{title}</h1>

      <p className='transition-all font-noto-sans text-neutral-150 hidden group-hover:block'>{description}</p>

      <Link className='flex items-center gap-1 transition-all text-yellow-300 font-noto-sans group-hover:mt-auto'>
        <span>Read more</span>
        <span className='material-symbols-outlined'>chevron_right</span>
      </Link>
    </div>
  )
}

export default Projects
