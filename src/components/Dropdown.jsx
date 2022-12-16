import React, { createContext, useContext, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from '../assets/icons'

const DropdownContext = createContext()

const Dropdown = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpened, setIsOpened }}>
      <div className='dropdown relative'>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

const Button = ({ children }) => {
  const { isOpened, setIsOpened } = useContext(DropdownContext);

  return (
    <button className='flex items-center justify-center gap-2' onClick={() => setIsOpened(!isOpened)}>
      { children }
      { isOpened ? <ChevronUp /> : <ChevronDown />}
    </button>
  )
}

const Content = ({ children, className }) => {
  const { isOpened } = useContext(DropdownContext);

  return (
    <div className={`${(isOpened) ? 'dropdown__content absolute slide-bottom top-8 z-50' : 'hidden'} ${className}`}>
      { children }
    </div>
  )
}

Dropdown.Button = Button;
Dropdown.Content = Content;
export default Dropdown
