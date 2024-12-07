import React from 'react'
import Link from 'next/link'
import { SendHorizontal } from 'lucide-react';
import { BsQrCode } from "react-icons/bs";
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";




function Footer() {
  return (
    <main className='w-full  py-10  flex flex-col justify-center items-center bg-black gap-4'>
        <div className='md:w-[80%] w-full px-4 md:px-0 md:gap-8 gap-3 lg:gap-0 flex flex-wrap lg:flex-row justify-between items-center'>
                <div className='w-[220px] h-[250px] flex flex-col gap-5 justify-start'>
                    <div className="logo">
                        <h3 className='text-2xl font-bold text-white'>Exclusive</h3>
                    </div>
                    <Link href={'/'}><h3 className='text-[20px] font-medium text-white'>Subscribe</h3></Link>
                    <p className='text-base font-light text-white'>Get 10% off your first order</p>
                    <div className='flex justify-center items-center borer-white border-[2px]  w-full relative'>
                        <input type="email" name="email" id="" placeholder='Enter your email' className='w-full p-3 bg-transparent relative text-white text-[14px]'/>
                        <SendHorizontal className='absolute right-2 text-white'/>

                    </div>
                </div>
                <div>
                  <div className='w-[200px] h-[250px] hidden lg:flex p-2 flex-col gap-4 justify-start '>
                      <div className="logo">
                          <h3 className='text-[20px] font-medium text-white'>Support</h3>
                      </div>
                      <h3 className='text-[16px] font-normal text-white'>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</h3>
                      <p className='text-base font-normal text-white'>exclusive@gmail.com</p>
                      <p className='text-base font-normal text-white'>+88015-88888-9999</p>
                  </div>

                </div>
                <div className='w-[150px] h-[250px] flex flex-col gap-4 justify-start '>
                    <h3 className='text-[20px] font-medium text-white'>Account</h3>
                    <ul className='flex flex-col gap-2 '>
                        <Link href={'/'}><li className='text-base text-white font-normal text-left'>My Account</li></Link>
                        <Link href={'/'}><li className='text-base text-white font-normal text-left'>Login / Register</li></Link>
                        <Link href={'/'}><li className='text-base text-white font-normal text-left'>Cart</li></Link>
                        <Link href={'app/wishList'}><li className='text-base text-white font-normal text-left'>Wishlist</li></Link>
                        <Link href={'/'}><li className='text-base text-white font-normal text-left'>Shop</li></Link>
                    </ul>
                </div>
                <div className='w-[150px] h-[250px] flex flex-col gap-4 justify-start'>
                    <h3 className='text-[20px] font-medium text-white'>Quick Link</h3>
                    <ul >
                        <Link href={'/'}><li className='text-base text-white font-normal text-left pb-2'>Privacy Policy</li></Link>
                        <Link href={'/'}><li className='text-base text-white font-normal text-left pb-2'>Terms Of Use</li></Link>
                        <Link href={'/'}><li className='text-base text-white font-normal text-left pb-2'>FAQ</li></Link>
                        <Link href={'/'}><li className='text-base text-white font-normal text-left pb-2'>Contact</li></Link>
                        
                    </ul>
                </div>
                <div className='w-[200px] h-[250px] flex flex-col gap-4 justify-start '>
                      <div className="logo">
                          <h3 className='text-[20px] font-medium text-white'>Download App</h3>
                      </div>
                      <p className='text-[12px] font-normal text-white'>Save $3 with App New User Only</p>
                      <div className='flex w-full  h-[84px]'>

                            <div className='flex justify-start items-center  w-[50%] h-full'>
                                    <BsQrCode className='text-white w-20 h-20'/>
                            </div>

                            <div className='flex flex-col w-[50%] h-full justify-between items-center'>

                                    <div className='flex  w-[110px] h-10 justify-center items-center'>
                                        <Image src={'/footer.png'} alt='' width={104} height={34}></Image>
                                    </div>
                                    <div className='flex  w-[110px] h-10 justify-center items-center'>
                                        <Image src={'/fot2.png'} alt='' width={104} height={34}></Image>
                                    </div>

                            </div>
                            
                      </div>

                      <div className='w-full flex  text-white text-2xl justify-between items-center'>
                            <FaFacebookF />
                            <FiTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />

                            </div>
                  </div>
        </div>

        

        <div className='w-[80%] flex justify-center items-center mt-6'>
            <h3 className='text-white text-base'>&copy; Copyright Rimel 2022. All right reserved</h3>
        </div>
    </main>
  )
}

export default Footer