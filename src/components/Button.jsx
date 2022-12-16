import React from 'react'

const Button = ({ 
  children,
  startIcon = <></>,
  endIcon = <></>,
  size = "md",
  variant = "contained",
  disabled = false,
  onClick = function() {},
 }) => {
  return (
    <button className='flex items-center justify-center gap-1' onClick={onClick}>
      { startIcon }
      { children }
      { endIcon }
    </button>
  )
}

export default Button