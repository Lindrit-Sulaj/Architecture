import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { useMediaQuery } from '../hooks/useMediaQuery';
import { Button } from '../components';
import { Bars2, XIcon, ChevronDown } from '../assets/icons';

const Navbar = () => {
  const [windowWidth, breakpoint] = useMediaQuery();
  const [navOpened, setNavOpened] = useState(false);

  const styles = {
    desktop: 'flex items-center justify-center gap-6',
    mobileOpened: 'slide-right absolute h-[calc(100vh-70px)] top-[70px] bg-dark-blue w-full flex flex-col items-start gap-8 px-6 py-8',
  }

  return (
    <div className='bg-dark-blue text-white'>
      <nav className={`flex container justify-between mx-auto h-[70px] items-center font-inter-tight`}>
        <h1 className="logo ml-3 font-semibold text-[22px] border-solid border-b-2 border-yellow font-inter-tight laptop:text-2xl">Design</h1>

        <ul className={`${breakpoint !== 'mobile' ? styles.desktop : (breakpoint === 'mobile' && navOpened) ? styles.mobileOpened : (breakpoint === 'mobile' && !navOpened) ? `hidden` : '' }`}>
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
            <Button endIcon={<ChevronDown />}>
              Services
            </Button>
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

export default Navbar