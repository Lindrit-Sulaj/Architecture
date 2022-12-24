import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-900'>
      <div className='flex flex-wrap justify-center py-16 px-4 max-w-mw-normal mx-auto gap-y-10'>
        <div className='footer-category w-full tablet:w-1/2 laptop:w-1/4'>
          <h1 className='footer-title'>About Us</h1>
          <a href="#" className='footer-link'>Terms of use</a>
          <a href="#" className='footer-link'>Privacy policy</a>
          <a href="#" className='footer-link'>Guidelines</a>
          <a href="#" className='footer-link'>Consultants</a>
        </div>
        <div className='footer-category w-full tablet:w-1/2 laptop:w-1/4'>
          <h1>Links</h1>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>
        <div className='footer-category w-full tablet:w-1/2 laptop:w-1/4'>
          <h1>Company</h1>
          <a href="#">About</a>
          <a href="#">Jobs</a>
          <a href="#">Blog</a>
        </div>
        <div className='footer-category w-full tablet:w-1/2 laptop:w-1/4'>
          <h1>Contact</h1>
          <a href="#" className='flex gap-10 items-center'>
            <span className="material-symbols-outlined text-blue-400">location_on</span>
            <span>Chicon Street, Austin, TX, USA</span>
          </a>
          <a href="#">
            <span className="material-symbols-outlined text-blue-400">call</span>
            <span>0000 000 000</span>
          </a>
          <a href="#">
            <span className="material-symbols-outlined text-blue-400">mail</span>
            <span className='text-blue-300 text-lg font-inter-tight'>hello@design.com.ks</span>
          </a>
        </div>
      </div>
      <div className='border-solid border-t-[1px] border-t-blue-750 flex max-w-mw-normal mx-auto justify-center tablet:justify-between flex-wrap px-6 gap-y-4 py-4'>
        <p className='w-full tablet:w-1/2 flex items-center justify-center tablet:justify-start gap-2 text-neutral-100 font-noto-sans'>
          <span className='material-symbols-outlined'>copyright</span>
          Copyright 2021
        </p>
        <div className='w-full tablet:w-1/2 flex justify-center tablet:justify-end gap-6 items-center'>
          <a href="#"><i className="fa-brands fa-facebook text-2xl text-blue-200"></i></a>
          <a href="#"><i className="fa-brands fa-twitter text-2xl text-blue-200"></i></a>
          <a href="#"><i className="fa-brands fa-instagram text-2xl text-blue-200"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer