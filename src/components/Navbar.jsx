import React, { useMemo } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Navbar = () => {
  const [windowWidth, breakpoint] = useMediaQuery()

  return (
    <nav>
      <h1 className="logo">Logo</h1>

      <p className='font-bold tablet:text-red-600 laptop:text-blue-400 desktop:text-green-500'>{breakpoint}</p>
    </nav>
  )
}

export default Navbar