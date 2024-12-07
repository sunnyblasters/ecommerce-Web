

import React from 'react'

function TopBar() {
  return (
    <div className='w-full h-[48px] flex justify-center items-center bg-black text-white'>

        <div className='lg:w-[80%] w-full lg:px-0 px-10 flex justify-between gap-3 items-center'>
          <div className='flex gap-2 justify-end items-center w-[80%]'>
            <p className='text-[11px] md:text-[14px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <button className='md:flex hidden text-decoration-line: underline text-[14px]'>ShopNow</button>
          </div>
          <div>
              <select name="" id="" className='text-white bg-black text-[14px]'>
                <option value="English">
                  English
                </option>
                <option value="French">
                  French
                </option>
                <option value="Urdu">
                  Urdu
                </option>
                <option value="German">
                  German
                </option>
                <option value="Chinese">
                  Chinese
                </option>
              </select>
          </div>
        </div>

    </div>
  )
}

export default TopBar