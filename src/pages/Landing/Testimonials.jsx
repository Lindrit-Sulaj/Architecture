import React from 'react'
const Testimonials = () => {
  return (
    <div className='bg-blue-800'>
      <section className="testimonials max-w-mw-normal mx-auto py-20 px-4 laptop:px-0">
        <div className='mb-16'>
          <p className='text-center text-yellow-500 uppercase font-inter-tight tracking-wider font-bold'>Testimonials</p>
          <h1 className='text-4xl font-playfair text-center text-neutral-100 mt-4'>Don't just take our word for it...</h1>
        </div>
        <div className='flex justify-between flex-wrap gap-y-4'>
          <Testimonial
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi reprehenderit delectus quas distinctio libero ducimus! Itaque quasi perspiciatis voluptatibus, maxime"
            name="Harry Maguire"
            profession="CEO"
            profile="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg" />
            <Testimonial
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi reprehenderit delectus quas distinctio libero ducimus! Itaque quasi perspiciatis voluptatibus, maxime"
            name="Robert Smith"
            profession="Engineer"
            profile="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
            <Testimonial
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi reprehenderit delectus quas distinctio libero ducimus! Itaque quasi perspiciatis voluptatibus, maxime"
            name="Dave Williams"
            profession="Programmer"
            profile="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
            <Testimonial
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi reprehenderit delectus quas distinctio libero ducimus! Itaque quasi perspiciatis voluptatibus, maxime"
            name="Harry Johnson"
            profession="Architect"
            profile="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg" />
        </div>
      </section>
    </div>
  )
}

const Testimonial = ({ profile, text, name, profession }) => {
  return (
    <div className='w-full bg-blue-800 border-solid border-[1px] border-blue-700 rounded-md px-6 py-8 tablet:w-[49%] laptop:w-[24%]'>
      <span className='material-symbols-outlined text-blue-300 text-5xl text-center flex justify-center tablet:justify-start'>format_quote</span>
      <p className='text-lg text-center mb-8 mt-5 text-neutral-150 font-noto-sans tablet:text-left'>{text}</p>
      <div className='flex justify-center gap-6 tablet:justify-start'>
        <img className='w-16 h-16 object-cover rounded-full' src={profile} alt={name} />
        <div className='flex flex-col items-start justify-center'>
          <h3 className='text-lg font-noto-sans text-neutral-100'>{name}</h3>
          <p className='text-blue-300 font-bold font-noto-sans'>{profession}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials