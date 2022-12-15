import { useEffect, useMemo, useState } from "react"

const screenBreakpoints = {
  mobile: 0,
  tablet: 700,
  laptop: 1280,
  desktop: 1536
}

export const useMediaQuery = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState('mobile');

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useMemo(() => {
    let currentBreakpoint = 'mobile';
    
    for (let breakpoint in screenBreakpoints) {
      if (windowWidth >= screenBreakpoints[breakpoint]) {
        currentBreakpoint = breakpoint;
      };
    };

    setBreakpoint(currentBreakpoint);
  }, [windowWidth]);

  return [windowWidth, breakpoint]

}