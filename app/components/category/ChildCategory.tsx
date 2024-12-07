'use client'
import Image from 'next/image'
import * as React from "react"




import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

interface childProps {

    picture: any,
    heading: string,
    

}

interface childPropsArray {

    childProperties: childProps[]
}

const ChildCategory: React.FC<childPropsArray> = ({ childProperties }) => {
    return (

        <main className='w-[full] flex justify-center'>
            <Carousel
            opts={{
                align: "start",
            }}
            className="w-[80%]"
        >
            <CarouselContent>
                {
                    childProperties.map((child, index) => {
                        return (
                            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 flex justify-center">
                                <div className="p-1">
                                    <div className='w-[170px] h-[145px] hover:border-none rounded-[5px] hover:bg-[#DB4444] hover:text-white border-gray-200 border-[2px] flex flex-col justify-center items-center'>
                                        <div className='w-[56px] mb-3 h-[56px] relative justify-center items-center flex '>
                                            
                                            <div>{child.picture}</div>

                                        </div>
                                        <h3 className='text-base'>{child.heading}</h3>
                                    </div>
                                </div>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </main>

    )
}

export default ChildCategory









