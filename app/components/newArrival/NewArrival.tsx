import React from 'react'
import Image from 'next/image'
import  './arrival.css'

function NewArrival() {
  return (
    <main className='w-full flex justify-center my-16'>
        <div className='w-[80%] flex lg:flex-row gap-6 flex-col lg:justify-between lg:items-center'>
            <div className='lg:w-[49%] w-[100%] flex-col gap-2 flex justify-end items-start pl-6 pb-6 bg-black h-[600px] img1 rounded-[5px]'>
                <h3 className='text-2xl font-semibold text-white'>PlayStation 5</h3>
                <p className='text-[14px] font-normal text-white'>Black and White version of the PS5<br/>coming out on sale.</p>
                <button className='text-base font-medium text-decoration-line: underline text-white'>Shop Now</button>
            </div>
            <div className='lg:w-[49%] w-[100%] h-[600px] flex  flex-col justify-between items-center'>
                <div className='w-[100%] h-[284px] flex-col gap-2 flex justify-end items-start pl-6 pb-6 img2 rounded-[5px] relative bg-[#0D0D0D]'>

                    <h3 className='text-2xl font-semibold text-white'>Women’s Collections</h3>
                    <p className='text-[14px] font-normal text-white'>Featured woman collections that<br/>give you another vibe.</p>
                    <button className='text-base font-medium text-decoration-line: underline text-white'>Shop Now</button>

                </div>
                <div className='w-[100%] h-[284px] flex justify-between items-center'>
                    <div className='w-[48%] h-[284px] flex-col gap-2 flex justify-end items-start pl-6 pb-6 img3 rounded-[5px] bg-[#0D0D0D]'>

                        <h3 className='text-2xl font-semibold text-white'>Speakers</h3>
                        <p className='text-[14px] font-normal text-white'>Amazon wireless speakers</p>
                        <button className='text-base font-medium text-decoration-line: underline text-white'>Shop Now</button>

                    </div>
                    <div className='w-[48%] h-[284px] flex-col gap-2 flex justify-end items-start pl-6 pb-6 img4 rounded-[5px]  bg-[#0D0D0D]'>

                        <h3 className='text-2xl font-semibold text-white'>Perfume</h3>
                        <p className='text-[14px] font-normal text-white'>Gucci Intense Oud EDP</p>
                        <button className='text-base font-medium text-decoration-line: underline text-white'>Shop Now</button>

                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default NewArrival