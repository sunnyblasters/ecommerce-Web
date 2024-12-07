import React from 'react'
import Image from 'next/image'

interface servicesProps {

    picture: any,
    heading:string,
    paragraph:string

}

function ChildServices(props:servicesProps) {
  return (
    
        <main>
            <div className='w-[270px] h-[161px]  flex flex-col justify-between justify-items-center items-center'>
                <div className='w-20 h-20 m-0 p-0  rounded-full bg-slate-300 flex justify-center items-center'>{props.picture}</div>
                <h3 className='text-[20px] font-semibold'>{props.heading}</h3>
                <p className='text-[14px] font-normal'>{props.paragraph }</p>
            </div>
        </main>
  )
}

export default ChildServices