'use client'
import React from 'react'
import ChildCategory from './ChildCategory'
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { VscGame } from "react-icons/vsc";











interface parentCard {

    picture:any,
    heading:string,
    
}

const parentCardArray:parentCard[] = [

    {
        // picture:'/c1.png',
        picture:<CiMobile4 className='w-12 h-auto'/>,
        heading:'Phones',
        
    },
    {
        // picture:'/c2.png',
        picture:<HiOutlineComputerDesktop className='w-12 h-auto'/>,
        heading:'Computers',
        
    },
    {
        // picture:'/c3.png',
        picture:<IoWatchOutline className='w-12 h-auto'/>,
        heading:'SmartWatch',
        
    },
    {
        // picture:'/c4.png',
        picture:<CiCamera className='w-12 h-auto'/>,
        heading:'Camera',
        
    },
    {
        // picture:'/c5.png',
        picture:<CiHeadphones className='w-12 h-auto'/>,
        heading:'HeadPhones',
        
    },
    {
        // picture:'/c6.png',
        picture:<VscGame className='w-12 h-auto'/>,
        heading:'Gaming',
        
    },
    {
        // picture:'/c3.png',
        picture:<IoWatchOutline className='w-12 h-auto'/>,
        heading:'SmartWatch',
        
    },
    {
        // picture:'/c2.png',
        picture:<HiOutlineComputerDesktop className='w-12 h-auto'/>,
        heading:'Computers',
        
    }
]

function ParentCategory() {
  return (
    
    <ChildCategory childProperties={parentCardArray}/>
  )
}

export default ParentCategory