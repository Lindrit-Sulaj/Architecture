import React from 'react'
import { Tabs } from '../../components'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { landingProjects } from '../../assets/constants';

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('interior_design');

  return (
    <div className='bg-blue-800 py-16 px-5 desktop:px-0
    '>
      <section className="project max-w-mx-large mx-auto">
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
          <div className='flex flex-wrap gap-y-9 items-center flex-col'>
            <div className='w-full'>
              <p className='text-yellow-300 font-bold uppercase text-center font-inter-tight tracking-wider'>Projects</p>
              <h1 className='text-5xl font-playfair font-
              bold text-neutral-100 mt-2 text-center'>Our Latest Projects</h1>
            </div>
            <div className="flex justify-start items-center gap-3  tablet:gap-7 w-full overflow-auto tab-buttons tablet:flex-wrap tablet:justify-center">
              <Tabs.Button className='whitespace-nowrap' label='interior_design'>Interior Design</Tabs.Button>
              <Tabs.Button className='whitespace-nowrap text-neutral-100 font-inter-tight tracking-wider' label="exterior_design">Exterior Design</Tabs.Button>
              <Tabs.Button className='whitespace-nowrap' label="furniture_&_decor">Furniture & Decor</Tabs.Button>
              <Tabs.Button className='whitespace-nowrap' label="3d_visualization">3D Visualization</Tabs.Button>
              <Link to="/projects" className='whitespace-nowrap font-inter-tight tracking-wider text-neutral-200 underline underline-offset-4'>
                View all projects
              </Link>
            </div>
          </div>

          <div>
            {
              landingProjects[selectedTab].map((project, index) => (
                <Project {...project} key={index}/>
              ))
            }
          </div>
        </Tabs>
      </section>
    </div>
  )
}

const Project = ({ title, description, image }) => {
  const styles = {
    // make the image darker (brightness), don't add box shadow
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  
  return (
    <div style={styles} className='h-[400px] w-80'>
      <h1>{title}</h1>

      <p>{description}</p>

      <Link>
        <span>Read more</span>
        <span>{'>'}</span>
      </Link>
    </div>
  )
}

export default Projects
