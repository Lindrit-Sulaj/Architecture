import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { useMediaQuery } from '../hooks/useMediaQuery';
import { Button, Dropdown } from '../components';
import { Bars2, XIcon, ChevronDown } from '../assets/icons';

const Navbar = () => {
  const [windowWidth, breakpoint] = useMediaQuery();
  const [navOpened, setNavOpened] = useState(false);

  const styles = {
    desktop: 'flex items-center justify-center gap-6',
    mobileOpened: 'slide-right absolute h-[calc(100vh-70px)] top-[70px] bg-blue-900 border-solid border-t-2 border-t-blue-600 w-full flex flex-col items-start gap-8 px-6 py-8',
  }

  return (
    <div className='text-white bg-blue-900 fixed top-0 w-full'>
      <nav className={`flex container justify-between mx-auto h-[70px] items-center  font-inter-tight`}>
        <h1 className="logo ml-3 font-semibold text-[22px] border-solid border-b-2 border-yellow font-inter-tight laptop:text-2xl">Design</h1>

        <ul className={`${breakpoint !== 'mobile' ? styles.desktop : (breakpoint === 'mobile' && navOpened) ? styles.mobileOpened : (breakpoint === 'mobile' && !navOpened) ? `slide-left hidden` : 'hidden'}`}>
          <li className='nav-link'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-link'>
            <Link to="/about">About</Link>
          </li>
          <li className='nav-link'>
            <Link to="/projects">Projects</Link>
          </li>
          <li className='nav-link'>
            <Dropdown>
              <Dropdown.Button>Services</Dropdown.Button>
              <Dropdown.Content className={`${breakpoint === 'tablet' ? 'right-0' : ''}`}>
                <div className='bg-oxford-blue-700 right-4 rounded-lg bg-blue-800 tablet:text-neutral-900 tablet:bg-neutral-100 border-solid border-[1px] border-blue-700 shadow-lg tablet:shadow-none px-1 tablet:border-neutral-200'>
                  <Service title='Interior Design' desc='We can build your interior dream' icon="fa-solid fa-couch"/>
                  <Service title='Construction' desc="We take care of your construction needs" icon='fa-solid fa-helmet-safety'/>
                  <Service title='Exterior' desc='Exterior design for all buildings' icon="fa-solid fa-building-columns"/>
                </div>
              </Dropdown.Content>
            </Dropdown>
          </li>
          <li className='nav-link'>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>

        <button className={`${(breakpoint === 'mobile' ? 'block' : 'hidden')} transition-all scale-125 hover:scale-[1.40] mr-3`} onClick={() => setNavOpened(!navOpened)}>
          {navOpened ? <XIcon /> : <Bars2 />}
        </button>
      </nav>
    </div>
  )
}

const Service = ({ title = '', icon = "", desc = '' }) => (
  <div className='navbar__service w-[300px] px-4 py-2 my-3 rounded-md flex justify-center gap-4 cursor-pointer hover:bg-blue-900 tablet:hover:bg-neutral-200'>
    <div className='flex flex-col justify-center items-center basis-1/5'>
      <i className={`${icon} text-blue-200 bg-blue-500 tablet:bg-blue-100 tablet:text-blue-800 w-12 h-12 flex items-center justify-center rounded-full`}></i>
    </div>
    <div className='basis-4/5 flex flex-col justify-center'>
      <h2 className='font-semibold font-noto-sans tracking-tight'>{title}</h2>
      <p className='text-sm text-neutral-200 opacity-75 tablet:text-neutral-500 tablet:opacity-100'>{desc}</p>
    </div>
  </div>
)

export default Navbar