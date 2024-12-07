import React from 'react'
import ParentCard from './parentCard'

function Carousel() {
  return (
    <div className='w-full my-14'>
        <div className='w-full flex justify-center mb-10'>
            <div className='w-[80%] flex flex-col gap-5'>
                <div className='flex gap-2 items-center'><div className='w-[10px] h-8 bg-[#DB4444]'></div><h3 className='text-base text-[#DB4444]'>Today’s</h3></div>
                <h3 className='text-4xl font-semibold'>Flash Sales</h3>
            </div>
        </div>
        <div className="carousel-deiv">
            <ParentCard />
        </div>
        <div className='flex justify-center mt-5'><button className='text-base font-medium rounded-[4px] bg-[#DB4444] py-2 hover:bg-black transition-all 0.7s px-7 text-white'>View All Products</button></div>
    </div>
  )
}

export default Carousel