import React from 'react'
// import ReactStars from 'react-stars'

import ChildWishList from './ChildWishList1'


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
        picture: '/p1.png',
        heading: 'The north coat',
        price1: '$120',
        price2: '$160',
        // reviews: <ReactStars count={5} size={24} color2={'yellow'}/>,
        reviews: '****',
        comment: '(88)',

    },
    {
        picture: '/p2.png',
        heading: 'Gucci duffle bag',
        price1: '$960',
        price2: '$1160',
        // reviews: <ReactStars count={4} size={24} color2={'yellow'}/>,
        reviews: '*****',
        comment: '(75)',

    },
    {
        picture: '/p3.png',
        heading: 'RGB liquid CPU Cooler',
        price1: '$370',
        price2: '$400',
        // reviews: <ReactStars count={5} size={24} color2={'yellow'}/>,
        reviews: '****',
        comment: '(99)',

    },
    {
        picture: '/p4.png',
        heading: 'Small BookSelf',
        price1: '$375',
        price2: '$400',
        // reviews: <ReactStars count={3} size={24} color2={'yellow'}/>,
        reviews: '***',
        comment: '(65)',

    },

]

function ParentWishList1() {
    return (

        <main className='w-full flex flex-col items-center justify-center mb-11'>
            <div className='md:w-[80%] w-full px-6 md:px-0 my-14'>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-[80%] flex flex-col'>
                        <h3 className='text-[20px] font-normal'>Wishlist (4)</h3>
                    </div>
                    <div className='w-[300px] flex justify-end' ><button className='text-base font-medium rounded-[4px] text-black py-2 px-3 md:px-7 hover:bg-black transition-all 0.7s hover:text-white border-[2px] border-gray-200'>Move All To Bag</button></div>
                </div>
            </div>
            <div className="carousel-deiv">
                    <ChildWishList childProperties={parentCardArray} />
                </div>
        </main>
    )
}

export default ParentWishList1



    


