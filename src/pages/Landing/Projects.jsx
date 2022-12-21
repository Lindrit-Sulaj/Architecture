import React from 'react'
import { Tabs } from '../../components'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Projects = () => {
  return (
    <div className='projects flex'>
      <div className='projects_1 px-8 py-16 flex flex-col'>
        <Link to="/projects" className='mt-auto border-solid border-l-4 border-l-blue-400 px-4 text-[27px] font-inter-tight tracking-wider text-neutral-100 uppercase mx-3 font-semibold'>Interior Projects</Link>
      </div>
      <div className="projects_2 px-6 py-16 flex flex-col">
        <Link to="/projects" className='mt-auto border-solid border-l-4 border-l-blue-400 px-4 text-[27px] font-inter-tight tracking-wider text-neutral-100 uppercase mx-3 font-semibold'>Exterior Projects</Link>
      </div>
      <div className="projects_3 px-6 py-16 flex flex-col">
        <Link to="/projects" className='mt-auto border-solid border-l-4 border-l-blue-400 px-4 text-[27px] font-inter-tight tracking-wider text-neutral-100 uppercase mx-3 font-semibold'>Furniture & Construction</Link>
      </div>
    </div>
  )
}

export default Projects
