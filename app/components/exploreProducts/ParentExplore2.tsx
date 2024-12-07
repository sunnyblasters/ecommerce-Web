import React from 'react'
import ChildExplore2 from './ChildExplore2'



interface parentCard {

    picture:string,
    heading:string,
    price1:string,
    price2:string,
    reviews:string,
    comment:string,
    color:string
}

const parentCardArray:parentCard[] = [

    {
        picture:'/pic1.png',
        heading:'HAVIT HV-G92 Gamepad',
        price1: '$120' ,
        price2:'$160',
        // reviews: <ReactStars count={5} size={24} color2={'yellow'}/>,
        reviews:'****',
        comment: '(88)',
        color:'40%'
    },
    {
        picture:'/pic2.png',
        heading:'AK-900 Wired Keyboard',
        price1: '$960' ,
        price2:'$1160',
        // reviews: <ReactStars count={4} size={24} color2={'yellow'}/>,
        reviews:'*****',
        comment: '(75)',
        color:'55%'
    },
    {
        picture:'/pic3.png',
        heading:'IPS LCD Gaming Monitor',
        price1: '$370' ,
        price2:'$400',
        // reviews: <ReactStars count={5} size={24} color2={'yellow'}/>,
        reviews:'****',
        comment: '(99)',
        color:'70%'
    },
    {
        picture:'/pic4.png',
        heading:'S-Series Comfort Chair',
        price1: '$375' ,
        price2:'$400',
        // reviews: <ReactStars count={3} size={24} color2={'yellow'}/>,
        reviews:'***',
        comment: '(65)',
        color:'50%'
    },
    {
        picture:'/pic2.png',
        heading:'AK-900 Wired Keyboard',
        price1: '$960' ,
        price2:'$1160',
        // reviews: <ReactStars count={4} size={24} color2={'yellow'}/>,
        reviews:'****',
        comment: '(75)',
        color:'40%'
    },
    {
        picture:'/pic3.png',
        heading:'IPS LCD Gaming Monitor',
        price1: '$370' ,
        price2:'$400',
        // reviews: <ReactStars count={5} size={24} color2={'yellow'}/>,
        reviews:'****',
        comment: '(99)',
        color:'60%'
    },
    {
        picture:'/pic1.png',
        heading:'HAVIT HV-G92 Gamepad',
        price1: '$120' ,
        price2:'$160',
        // reviews: <ReactStars count={5} size={24} color2={'yellow'}/>,
        reviews:'*****',
        comment: '(88)',
        color:'80%'
    }
    ,
    {
        picture:'/pic4.png',
        heading:'S-Series Comfort Chair',
        price1: '$375' ,
        price2:'$400',
        // reviews: <ReactStars count={3} size={24} color2={'yellow'}/>,
        reviews:'***',
        comment: '(65)',
        color:'50%'
    }
    ,
    {
        picture:'/pic2.png',
        heading:'AK-900 Wired Keyboard',
        price1: '$960' ,
        price2:'$1160',
        // reviews: <ReactStars count={4} size={24} color2={'yellow'}/>,
        reviews:'****',
        comment: '(75)',
        color:'40%'
    },
]

function ParentExplore2() {
  return (
    
    <ChildExplore2 childProperties={parentCardArray}/>
  )
}

export default ParentExplore2