import React from 'react'
import ParentCategory from './ParentCategory'


function CarouselCategory() {
  return (
    <div className='w-full my-14'>
        <div className='w-full flex justify-center mb-10'>
            <div className='w-[80%] flex flex-col gap-5'>
                <div className='flex gap-2 items-center'><div className='w-[10px] h-8 bg-[#DB4444]'></div><h3 className='text-base text-[#DB4444]'>Categories</h3></div>
                <h3 className='text-4xl font-semibold'>Browse By Category</h3>
            </div>
        </div>
        <div className="carousel-deiv">
            <ParentCategory />
        </div>
    </div>
  )
}

export default CarouselCategory