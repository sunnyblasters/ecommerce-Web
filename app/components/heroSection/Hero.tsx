import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';



function Hero() {
  return (
    <main className='w-full flex justify-center mb-11'>
        <div className='w-full lg:w-[80%] flex lg:flex-row flex-col lg:justify-between  pt-7'>
            <nav className='lg:w-[20%] lg:h-[344px] w-[100%] lg:px-0 px-10 mb-5 lg:mb-0'>
            <ul className='flex lg:flex-col lg:justify-between lg:flex-nowrap flex-row lg:h-full flex-wrap lg:gap-0 gap-5 items-start px-5 lg:px-2'>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 transition-all '>Woman’s Fashion</li></Link>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 '>Men’s Fashion</li></Link>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 '>Electronics</li></Link>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 '>Home & Lifestyle</li></Link>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 '>Medicine</li></Link>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 '>Sports & Outdoor</li></Link>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 '>Baby’s & Toys</li></Link>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 '>Groceries & Pets</li></Link>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 '>Health & Beauty</li></Link>
                </ul>
            </nav>
            <div className='hidden lg:flex lg:w-[1px] lg:h-96 bg-slate-200 lg:mt-[-28px] lg:mr-7'>

            </div>
            <section className='lg:w-[78%] h-[344px] flex justify-center items-center bg-black'>
                  <div className='flex flex-col w-[50%]  h-full justify-center pl-10 md:pl-14'>
                      <div className=' flex items-center gap-3'>
                          <Image src={'/apple.png'} alt="" width={40} height={40}  className='ml-[-10px] lg:ml-[-20px] lg:w-20 lg:h-20'></Image>
                          
                          <h3 className='text-[#FAFAFA] text-[12px] lg:text-base mt-1'>iPhone 14 Series</h3>
                      </div>
                      <div>
                          <h3 className='text-[#FAFAFA] my-3 text-2xl md:text-[36px] lg:text-[48px] leading-snug font-semibold'>Up to 10% <br/>off Voucher</h3>
                      </div>
                      <Link className='text-[#FAFAFA] flex gap-2' href={'/'}><h3 className='border-b-[1px] text-base border-white'>Shop Now </h3><ArrowRight /></Link>
                  </div>
                  <div className='w-[50%] h-full flex justify-center items-center'>
                        <Image src={'/iphone.png'} alt='' width={460} height={344}></Image>
                  </div>
            </section>
        </div>
    </main>
  )
}

export default Hero