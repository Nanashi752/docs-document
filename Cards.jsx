import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
function Cards({data , refrence}) {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} className='opacity-60 relative w-60 h-80 bg-zinc-200 rounded-[50px] py-10 px-8 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='absolute bottom-0 left-0  w-full '>
            <div className='flex justify-between px-8 py-3 align items-center'>
                <p>{data.filesize}</p>
                <span>
                {
                    data.close ? <IoMdClose /> : <MdDownload />
                }
                </span>
            </div>
            {
                data.tag.isOpen && (<div className={`bg-${data.tag.tagColor}-300 w-full py-4 flex justify-center items-center`}>
                <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
            </div>)
            }
            
        </div>
    </motion.div>
  )
}

export default Cards
