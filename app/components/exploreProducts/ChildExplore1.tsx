import Image from 'next/image'
import * as React from "react"
import { Heart, Eye  } from 'lucide-react';




interface childProps {

    picture: string,
    heading: string,
    price1: string,
    price2: string,
    reviews: string
    comment: string,
    color:string

}

interface childPropsArray {

    childProperties: childProps[]
}

const ChildExplore1: React.FC<childPropsArray> = ({ childProperties }) => {
    return (

        <main className='w-[full] flex justify-center flex-wrap gap-x-10'>
            {/* <Carousel
            opts={{
                align: "start",
            }}
            className="w-[80%]"
        >
            <CarouselContent>
                {
                    childProperties.map((child, index) => {
                        return (
                            <CarouselItem key={index} className="md:basis-1/2 lg:flex-wrap lg:basis-1/4 flex justify-center">
                                <div className="p-1">
                                    <div className='w-[270px] h-[350px]'>
                                        <div className='w-[270px] mb-3 h-[250px] relative justify-center items-center flex bg-[#F7F7F7]'>
                                            <Image src={child.picture} alt='' width={190} height={180}></Image>
                                            <div className="color absolute text-white top-3 left-3 bg-[#DB4444] rounded-sm w-[55px] h-[26px] flex justify-center items-center">{child.color}</div>
                                            <div className="absolute top-3 right-3 flex flex-col gap-3"><div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full'><Heart /></div><div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full'><Eye /></div></div>
                                        </div>
                                        <h3 className='text-base font-bold'>{child.heading}</h3>
                                        <h3 className='flex gap-3'><span className='text-red-500'>{child.price1}</span><span className='text-gray-500 text-decoration-line: line-through'>{child.price2}</span></h3>
                                        <div className='flex gap-3 justify-start '><span className='text-2xl'>{child.reviews}</span><span>{child.comment}</span></div>
                                    </div>
                                </div>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel> */}

            {
                childProperties.map((child) => {

                    return (
                        < div className="p-1" >
                            <div className='w-[270px] h-[350px]'>
                                <div className='w-[270px] mb-3 h-[250px] relative justify-center items-center flex bg-[#F7F7F7]'>
                                    <Image src={child.picture} alt='' width={130} height={180}></Image>
                                    <div className="color absolute text-white top-3 left-3 bg-[#DB4444] rounded-sm w-[55px] h-[26px] flex justify-center items-center">{child.color}</div>
                                    <div className="absolute top-3 right-3 flex flex-col gap-3"><div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full'><Heart /></div><div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full'><Eye /></div></div>
                                </div>
                                <h3 className='text-base font-bold'>{child.heading}</h3>
                                <h3 className='flex gap-3'><span className='text-red-500'>{child.price1}</span><span className='text-gray-500 text-decoration-line: line-through'>{child.price2}</span></h3>
                                <div className='flex gap-3 justify-start '><span className='text-2xl'>{child.reviews}</span><span>{child.comment}</span></div>
                            </div>
                        </div>
                    )
                })
            }
        </main>

    )
}

export default ChildExplore1









    // < div className = "p-1" >
    //     <div className='w-[270px] h-[350px]'>
    //         <div className='w-[270px] mb-3 h-[250px] relative justify-center items-center flex bg-[#F7F7F7]'>
    //             <Image src={child.picture} alt='' width={190} height={180}></Image>
    //             <div className="color absolute text-white top-3 left-3 bg-[#DB4444] rounded-sm w-[55px] h-[26px] flex justify-center items-center">{child.color}</div>
    //             <div className="absolute top-3 right-3 flex flex-col gap-3"><div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full'><Heart /></div><div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full'><Eye /></div></div>
    //         </div>
    //         <h3 className='text-base font-bold'>{child.heading}</h3>
    //         <h3 className='flex gap-3'><span className='text-red-500'>{child.price1}</span><span className='text-gray-500 text-decoration-line: line-through'>{child.price2}</span></h3>
    //         <div className='flex gap-3 justify-start '><span className='text-2xl'>{child.reviews}</span><span>{child.comment}</span></div>
    //     </div>
    // </div>