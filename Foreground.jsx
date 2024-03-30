import React, { useRef } from 'react'
import Cards from './Cards'

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {desc : "this wil be the backgornd of the card will  be displayed.",
         filesize : ".9mb",
         close : true,
         tag : {isOpen : true ,tagTitle : "Download Now!" , tagColor : "red"},
    },
    {desc : "this wil be the backgornd of the card will  be displayed.",
         filesize : ".4mb",
         close : false,
         tag : {isOpen : true ,tagTitle : "Download Now!" , tagColor : "green"},
    },
    {desc : "this wil be the backgornd of the card will  be displayed.",
         filesize : ".9mb",
         close : true,
         tag : {isOpen : true ,tagTitle : "Download Now!" , tagColor : "blue"},
    },
    ];
  return (
      <div ref = {ref} className="fixed z-[3] w-full h-screen flex gap-10 flex-wrap p-10">
        {
            data.map((item,index) => (
                <Cards data = {item} refrence ={ref}/>
            ))
        }
      </div>
    
  )
}

export default Foreground
