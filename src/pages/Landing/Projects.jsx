import React from 'react'
import { Tabs } from '../../components'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='bg-blue-800 py-16 px-4 desktop:px-0
    '>
      <section className="project max-w-mx-large mx-auto">
        <Tabs defaultValue="interior_design">
          <div className='flex flex-wrap gap-y-4'>
            <div className='w-full'>
              <p className='text-yellow-300 font-bold uppercase font-inter-tight tracking-wider'>Projects</p>
              <h1 className='text-4xl font-playfair font-bold text-neutral-100 mt-2'>Our Latest Projects</h1>
            </div>
            <div className="flex gap-8 w-full overflow-auto tab-buttons">
              <Tabs.Button className='whitespace-nowrap' label='interior_design'>Interior Design</Tabs.Button>
              <Tabs.Button className='whitespace-nowrap' label="exterior_design">Exterior Design</Tabs.Button>
              <Tabs.Button className='whitespace-nowrap' label="furniture_&_decor">Furniture & Decor</Tabs.Button>
              <Tabs.Button className='whitespace-nowrap' label="3d_visualization">3D Visualization</Tabs.Button>
              <Link to="/projects">
                View all projects
              </Link>
            </div>
          </div>

          <div>
            <Tabs.Panel value="interior_design">
              Here go the interior design boxes
            </Tabs.Panel>
            <Tabs.Panel value="exterior_design">
              Exterior Design boxes
            </Tabs.Panel>
            <Tabs.Panel value="furniture_&_decor">
              Furniture & Decor boxes
            </Tabs.Panel>
            <Tabs.Panel value="3d_visualization">
              3D Visualization
            </Tabs.Panel>
          </div>
        </Tabs>
      </section>
    </div>
  )
}

export default Projects
