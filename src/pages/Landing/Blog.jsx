import React from 'react'
import { BlogCard } from '../../components'

const Blog = () => {
  return (
    <section className="blog max-w-mw-normal mx-auto py-20">
      <p className='text-blue-400 uppercase font-inter-tight font-bold text-lg text-center'>Blog & Article</p>
      <h1 className='font-playfair text-4xl text-center font-semibold mt-4'>Take a look at the latest articles</h1>
      <hr className='h-[3px] mb-14 mt-8 border-none bg-blue-300 w-[100px] max-w-[100%] block mx-auto'/>
      <div className='flex flex-wrap justify-center gap-x-12 gap-y-16'>
        <BlogCard
          category='House'
          title='How to choose the best house plan'
          date='January 5, 2022'
          minutesToRead={5}
          image="https://cdn.houseplansservices.com/content/f3oo5es0q168o22dudkh98tskp/w991x660.jpg?v=2" />
        <BlogCard 
          category="Opinion"
          title='House or apartment. Find out in our quiz'
          date='December 6, 2022'
          minutesToRead={5}
          image="https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2020/05/flat-condo-apmt-mainimage.jpg" />
        <BlogCard 
          category='Stories'
          title={`How to pick the best interior looks`}
          date="July 14, 2021"
          minutesToRead={7}
          image="https://noithatangel.com/public/images/tintuc/images/thiet-ke-noi-that-nha-pho-hien-dai-don-gian-tinh-te-chi-ngan-1400_1.jpg" />
      </div>
    </section>
  )
}

export default Blog