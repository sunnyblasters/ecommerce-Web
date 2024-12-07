import React from 'react'

import ParentWishList1 from './ParentWishList1'
import ParentWishList2 from './ParentWishList2'


function WishList() {
  return (
    <main className='w-full flex justify-center items-center'>

        <div className='w-[100%] flex flex-col justify-between items-center'>
          <ParentWishList1 />
          <ParentWishList2 />
        </div>
        
    </main>
  )
}

export default WishList