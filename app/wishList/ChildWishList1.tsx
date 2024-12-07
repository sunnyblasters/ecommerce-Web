import Image from 'next/image'
import * as React from "react"
import { ShoppingCart } from 'lucide-react';
import { Trash2 } from 'lucide-react';




interface childProps {

    picture: string,
    heading: string,
    price1: string,
    price2: string,
    reviews: string
    comment: string,
    

}

interface childPropsArray {

    childProperties: childProps[]
}

const ChildWishList: React.FC<childPropsArray> = ({ childProperties }) => {
    return (

        // <main className='w-[full] flex justify-center'>
            <div className=' flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:justify-evenly sm:items-center gap-5'>
            {
                childProperties.map((child, index) => {
                    return (
                        <div className='w-[270px] h-[350px]'>
                            <div className='w-[270px] mb-3 h-[250px] relative justify-center items-center flex bg-[#F7F7F7]'>
                                <Image src={child.picture} alt='' width={190} height={180}></Image>
                                
                                <div className="absolute top-3 right-3 flex flex-col gap-3"><div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full'><Trash2 /></div></div>
                            </div>
                            <div className='flex justify-center gap-3 py-2 mt-[-12px] mb-3 bg-black items-center'><ShoppingCart className='text-white text-[12px]'/><p className='text-[12px] text-white'>Add To Cart</p> </div>
                            <h3 className='text-base font-bold'>{child.heading}</h3>
                            <h3 className='flex gap-3'><span className='text-red-500'>{child.price1}</span><span className='text-gray-500 text-decoration-line: line-through'>{child.price2}</span></h3>
                            
                        </div>
                    )
                })
            }
            </div>
        // </main>

    )
}

export default ChildWishList    









