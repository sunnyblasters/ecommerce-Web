import React from 'react'
import './music.css'
import Image from 'next/image'

function MusicCategory() {
  return (
    <main className='w-full md:h-[500px] h-[650px]  flex justify-center items-center my-16'>
        <div className='w-[80%] h-full  bg-black flex md:flex-row flex-col justify-center items-center md:justify-center md:items-start '>
            <div className='md:w-[50%] w-full pl-16 mt-[20px] gap-3 md:gap-5 md:h-full h-[40%] justify-center items-start flex flex-col'>
                 <p className='text-[#00FF66] text-base font-light'>Categories</p>
                <h3 className='text-white text-[32px] lg:text-[40px] xl:text-[48px] font-semibold'>Enhance Your<br/>Music Experience</h3>
                <button className='lg:py-4 lg:px-12 py-2 px-7 bg-[#00FF66] hover:bg-[white] hover:text-black transition-all 0.7s text-white rounde-[5px]'>Buy Now!</button>
            </div>

            <div className='md:w-[50%] w-full md:h-full h-[60%] flex justify-center items-center '>
                <Image src={'/music.png'} alt='' width={600} height={420}></Image>
            </div>
        </div>
    </main>
  )
}

export default MusicCategory