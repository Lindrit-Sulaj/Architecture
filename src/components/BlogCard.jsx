import React from 'react'

const BlogCard = (
  { category = "", title = "", date = "", minutesToRead, image }
) => {
  return (
    <div className='w-[350px] max-w-[100%] border-solid border-[1px] border-neutral-150'>
      <img className='object-cover w-full h-[240px] rounded-md' src={image} alt={title} />
      <div>
        <p className='text-blue-500 bg-blue-100 uppercase font-inter-tight mt-8 mb-6 mx-3 px-4 py-1 rounded-sm font-medium inline-block'>{category}</p>
        <h1 className='mx-3 text-neutral-800 text-[22px] font-medium'>{title}</h1>
        <hr className='border-none h-[1px] mt-6 mb-2 mx-3 bg-neutral-200'/>
        <div className='flex mx-3 my-4 gap-6'>
          <p className='font-inter-tight text-neutral-400 font-medium'>{date}</p>
          <p className='font-inter-tight text-neutral-400 font-medium uppercase'>{minutesToRead} Min Read</p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard