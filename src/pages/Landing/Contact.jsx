import React from 'react'

const Contact = () => {
  return (
    <div className='bg-blue-800 py-20 px-4 tablet:px-10'>
      <section className='mx-auto max-w-mw-normal flex flex-wrap tablet:flex-nowrap gap-6'>
        <div className='w-full tablet:w-[60%]'>
          <h1 className='text-4xl text-center text-blue-100 font-playfair tablet:text-left'>Get In Touch</h1>
          <hr className='block my-6 border-none bg-blue-300 h-[2px] rounded-3xl mx-auto w-[100px] tablet:mx-0' />
          <p className='mt-8 font-inter-tight text-lg text-neutral-200 text-center tablet:text-left'>Interested in creating a house? Drop us a line, we'd love to hear from you.</p>
          <p className='text-blue-200 my-8 font-noto-sans underline underline-offset-8 text-center tablet:text-left'>Monday - Friday : 7:30am - 4:00pm</p>
          <div className='flex mb-4 mt-14 items-center justify-center max-w-[none] gap-6 border-solid border-[2px] border-[transparent] transition-all cursor-pointer hover:border-blue-700 px-4 py-3 rounded-md tablet:max-w-[400px] tablet:justify-start'>
            <span className="material-symbols-outlined text-blue-400">call</span>
            <span className='text-blue-300 text-lg font-inter-tight'>0000 000 000</span>
          </div>
          <div className='flex mb-4 items-center justify-center gap-6 border-solid border-[2px] border-[transparent] transition-all cursor-pointer hover:border-blue-700 px-4 py-3 rounded-md tablet:max-w-[400px] tablet:justify-start'>
            <span className="material-symbols-outlined text-blue-400">mail</span>
            <span className='text-blue-300 text-lg font-inter-tight'>hello@design.com.ks</span>
          </div>
          <div className='flex mb-4 items-center justify-center gap-6 border-solid border-[2px] border-[transparent] transition-all cursor-pointer hover:border-blue-700 px-4 py-3 rounded-md tablet:max-w-[400px] tablet:justify-start'>
            <span className="material-symbols-outlined text-blue-400">location_on</span>
            <span className='text-blue-300 text-lg font-inter-tight'>Chicon Street, Austin, TX, USA</span>
          </div>
          <div className="socials flex justify-center gap-6 tablet:justify-start mt-12">
            <a href="#" className='transition-all text-2xl bg-[transparent] w-[48px] h-[48px] flex justify-center items-center rounded-full text-blue-100 hover:bg-blue-400 hover:text-neutral-100'>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className='transition-all text-2xl bg-[transparent] w-[48px] h-[48px] flex justify-center items-center rounded-full text-blue-100 hover:bg-blue-400 hover:text-neutral-100'>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className='transition-all text-2xl bg-[transparent] w-[48px] h-[48px] flex justify-center items-center rounded-full text-blue-100 hover:bg-blue-400 hover:text-neutral-100'>
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
        <form action="" className='w-full tablet:w-[40%] flex flex-col gap-y-8 py-7 px-5 bg-blue-750 border-solid border-[1px] border-blue-700 rounded-xl laptop:px-8' netlify>
          <div className=''>
            <label htmlFor="name" className='text-blue-300 block w-full mb-2 font-noto-sans'>Name</label>
            <input type="text" id='name' name='name' placeholder='John Doe' className='w-full block border-solid border-[1px] outline-none rounded-md border-blue-700 text-neutral-100 bg-[transparent] font-inter-tight px-4 py-2 focus:border-blue-300 focus:border-[2px] laptop:py-3' required/>
          </div>
          <div className=''>
            <label htmlFor="email" className='text-blue-300 block w-full mb-2 font-noto-sans'>Email</label>
            <input type="email" name="email" id="email" placeholder='example@gmail.com' className='w-full block border-solid border-[1px] outline-none rounded-md border-blue-700 text-neutral-100 font-inter-tight px-4 py-2 bg-[transparent] focus:border-blue-300 focus:border-[2px] laptop:py-3' required />
          </div>
          <div className=''>
            <label htmlFor="phone" className='text-blue-300 block w-full mb-2 font-noto-sans'>Phone</label>
            <input type="text" name="phone" id="phone" placeholder='+383' className='w-full block bg-[transparent] border-solid border-[1px] outline-none text-neutral-100 rounded-md border-blue-700 font-inter-tight px-4 py-2 focus:border-blue-300 focus:border-[2px] laptop:py-3' required />
          </div>
          <div className=''>
            <label htmlFor="message" className='text-blue-300 block w-full mb-2 font-noto-sans'>Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Say something' className='w-full block border-solid border-[1px] outline-none bg-[transparent] rounded-md border-blue-700 font-inter-tight px-4 py-2 focus:border-blue-300 focus:border-[2px] resize-none h-[100px] text-neutral-100 laptop:py-3' required></textarea>
          </div>
          <button type="submit" className='bg-blue-150 py-3 text-neutral-900 rounded-md font-semibold tracking-wide font-inter-tight focus:bg-blue-300'>Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Contact