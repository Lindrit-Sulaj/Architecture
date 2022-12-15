import React, { useMemo } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Navbar = () => {
  const [windowWidth, breakpoint] = useMediaQuery()

  return (
    <nav>
      <h1 className="logo">Logo</h1>

      <p>{breakpoint}</p>
    </nav>
  )
}

export default Navbar