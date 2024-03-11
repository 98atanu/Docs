import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";


const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}className=' relative flex-shrink-0 w-52 h-64 rounded-[45px] bg-zinc-900/90 text-white overflow-hidden py-10 px-8'> 
        <FaRegFileAlt />
        <p className='text-xm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0 ">
           <div className='flex items-center justify-between py-3 px-8 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoMdClose /> : <LuDownload size="0.7em" color='#fff' /> }
            </span>
           </div>
           {data.tag.isOpen && (
               <div className={`tag w-full py-4 ${data.tag.tagColor === "green" ? "bg-violet-900" : "bg-teal-950" } flex justify-center items-center`}>
                   <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
              </div>
           )}          
        </div>  
    </motion.div>
  )
}

export default Card