import React from 'react'
import ChildServices from './ChildServices'
import { TbTruckDelivery } from "react-icons/tb";
import { CiHeadphones } from "react-icons/ci";
import { ShieldCheck } from 'lucide-react';



function ParentServices() {
  return (
    
    <main className='w-full flex justify-center items-center my-16'>
        <div className='w-[80%] flex justify-center gap-11 items-center flex-wrap'>
            <ChildServices picture= {<TbTruckDelivery className='w-[60px] h-[60px] text-white bg-black rounded-full p-3'/>} heading='FREE AND FAST DELIVERY' paragraph='Free delivery for all orders over $140'/>
            <ChildServices picture= {<CiHeadphones className='w-[60px] h-[60px] text-white bg-black rounded-full p-3'/>} heading='24/7 CUSTOMER SERVICE' paragraph='Friendly 24/7 customer support'/>
            <ChildServices picture= {<ShieldCheck className='w-[60px] h-[60px] text-white bg-black rounded-full p-3'/>} heading='MONEY BACK GUARANTEE' paragraph='We reurn money within 30 days'/>
        </div>
    </main>
  )
}

export default ParentServices