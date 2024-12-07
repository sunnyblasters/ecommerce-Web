import React from 'react'
import ParentExplore1 from './ParentExplore1'
import ParentExplore2 from './ParentExplore2'
import ParentExplore3 from './ParentExplore3'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const exploreArray = [<ParentExplore1 /> , <ParentExplore2 /> , <ParentExplore3 />]
// const exploreArray:number[] = [123 , 456 , 789]

function MultipleExplore() {
  return (
    <main className='flex justify-center flex-col items-center w-full'>

        <div className='w-full my-14'>
                <div className='w-full flex justify-center mb-10'>
                    <div className='w-[80%] flex flex-col gap-5'>
                        <div className='flex gap-2 items-center'><div className='w-[10px] h-8 bg-[#DB4444]'></div><h3 className='text-base text-[#DB4444]'>Today’s</h3></div>
                        <h3 className='text-4xl font-semibold'>Explore Products</h3>
                    </div>
                </div>
                
                
        </div>

        <Carousel
            opts={{
                align: "start",
            }}
            className="w-[80%] "
        >
            <CarouselContent>
                {
                    exploreArray.map((explore, index) => {
                        return (
                            <CarouselItem key={index} className="md:basis-1/1 lg:flex-wrap lg:basis-1/1 flex justify-center">
                                {explore}
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        <div className='flex justify-center mt-5'><button className='text-base font-medium rounded-[4px] bg-[#DB4444] py-2 hover:bg-black transition-all 0.7s px-7 text-white'>View All Products</button></div>
    </main>
  )
}

export default MultipleExplore