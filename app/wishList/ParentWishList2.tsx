import React from 'react'
// import ReactStars from 'react-stars'

import ChildWishList1 from './ChildWishList1'


interface parentCard {

    picture: string,
    heading: string,
    price1: string,
    price2: string,
    reviews: string,
    comment: string,

}

const parentCardArray: parentCard[] = [

    {
        picture: '/e9.png',
        heading: 'The north coat',
        price1: '$120',
        price2: '$160',
        // reviews: <ReactStars count={5} size={24} color2={'yellow'}/>,
        reviews: '****',
        comment: '(88)',

    },
    {
        picture: '/pic3.png',
        heading: 'Gucci duffle bag',
        price1: '$960',
        price2: '$1160',
        // reviews: <ReactStars count={4} size={24} color2={'yellow'}/>,
        reviews: '*****',
        comment: '(75)',

    },
    {
        picture: '/pic1.png',
        heading: 'RGB liquid CPU Cooler',
        price1: '$370',
        price2: '$400',
        // reviews: <ReactStars count={5} size={24} color2={'yellow'}/>,
        reviews: '****',
        comment: '(99)',

    },
    {
        picture: '/pic2.png',
        heading: 'Small BookSelf',
        price1: '$375',
        price2: '$400',
        // reviews: <ReactStars count={3} size={24} color2={'yellow'}/>,
        reviews: '***',
        comment: '(65)',

    },

]

function ParentWishList2() {
    return (

        <main className='w-full flex flex-col items-center justify-center mb-24'>
            <div className='md:w-[80%] w-full px-6 md:px-0 my-14'>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-[80%] flex flex-col gap-5'>
                        <div className='flex gap-2 items-center'><div className='w-[10px] h-8 bg-[#DB4444]'></div><h3 className='text-[20px] text-normal text-[#DB4444]'>Just For You</h3></div>
                        
                    </div>
                    <div className='w-[300px] flex justify-end' ><button className='text-base  font-medium rounded-[4px] text-black py-2 px-3 md:px-7 hover:bg-black transition-all 0.7s hover:text-white border-[2px] border-gray-200'>Move All To Bag</button></div>
                </div>
            </div>
            <div className="carousel-deiv">
                    <ChildWishList1 childProperties={parentCardArray} />
                </div>
        </main>
    )
}

export default ParentWishList2



    


