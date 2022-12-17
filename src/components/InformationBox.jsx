import React from 'react'

const InformationBox = ({
  iconName = "",
  title = "",
  desc = ""
}) => {
  return (
    <div className='inline-block w-60'>
      <span className='material-symbols-outlined mb-3 text-yellow-900 text-[33px] flex tablet:justify-center laptop:justify-start'>{iconName}</span>
      <h1 className='text-xl text-neutral-800 font-semibold tablet:text-center laptop:text-left'>{title}</h1>
      <p className='text-neutral-500 font-inter-tight tracking-wider mt-2 tablet:text-center laptop:text-left'>{desc}</p>
    </div>
  )
}

export default InformationBox
