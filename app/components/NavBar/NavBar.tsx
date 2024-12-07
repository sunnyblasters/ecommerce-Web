import Link from 'next/link'
import React from 'react'
import { Heart, ShoppingCart, Search } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import { FiMenu } from "react-icons/fi";




function NavBar() {
  return (
    
    <main className='w-full flex justify-center h-16 border-b-[1px]'>
        <div className='w-[80%] flex justify-between items-center'>
            <div className="logo">
                <h3 className='text-2xl font-bold'>Exclusive</h3>
            </div>
            <nav className='hidden lg:flex'>
                <ul className='flex gap-5 items-center'>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 transition-all '>Home</li></Link>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 '>Contact</li></Link>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 '>About</li></Link>
                    <Link href={'/'}><li className='text-base hover:text-gray-600 '>SignUp</li></Link>
                </ul>
            </nav>
            <div className="hidden items-center relative bg-black md:flex">
                <input type="text"  placeholder='What are you looking for?' className='bg-[#F5F5F5] text-[#000000] py-2 px-4 w-full text-[12px]'/>
                <Search className='absolute right-2 w-4 h-4'/>
            </div>
            <div className="flex justify-between gap-4 items-center ">
                <Link href={'/'}><Heart /></Link>
                <Link href={'/'}><ShoppingCart /></Link>
            </div>

              <div className='flex lg:hidden'>
                  <Sheet>
                      <SheetTrigger><FiMenu /></SheetTrigger>
                      <SheetContent className='w-52 opacity-85'>
                          <ul className='mt-6'>
                            <Link href={'/'}><li className='px-7 py-3 hover:text-gray-600 hover:shadow-inner'>Home</li></Link>
                            <Link href={'/'}><li className='px-7 py-3 hover:text-gray-600 hover:shadow-inner'>Contact</li></Link>
                            <Link href={'/'}><li className='px-7 py-3 hover:text-gray-600 hover:shadow-inner'>About</li></Link>
                            <Link href={'/'}><li className='px-7 py-3 hover:text-gray-600 hover:shadow-inner'>SignUp</li></Link>
                          </ul>
                      </SheetContent>
                  </Sheet>
              </div>
          </div>
        
    </main>
  )
}

export default NavBar