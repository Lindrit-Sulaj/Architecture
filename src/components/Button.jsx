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
  let conditionalStyles = '';

  if (size === 'md') {
    conditionalStyles += 'px-4 py-1'
  } else if (size === 'lg') {
    conditionalStyles += 'px-8 py-2'
  } else if (size === 'sm') {
    conditionalStyles += 'px-2 py-[3px]'
  }

  return (
    <button className={`flex items-center rounded-md font-inter-tight font-semibold text-neutral-700 bg-yellow-900 justify-center gap-1 ${conditionalStyles}`} onClick={onClick}>
      { startIcon }
      { children }
      { endIcon }
    </button>
  )
}

export default Button