import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function Card() {
    return (
        <>
            <div className='relative w-60 h-80 rounded-[3.2rem]  bg-zinc-900/80 p-5 text-white overflow-hidden'>
                <FaRegFileAlt />
                <p className='text-sm leading-tight mt-5 font-semibold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem provident ea nam nemo.
                </p>
                <div className="footer w-full left-0 absolute bottom-0">
                    <div className=' flex items-center justify-between px-8 py-3 mb-3'>
                        <h5>.4mb</h5>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer'>
                            <MdOutlineFileDownload size="1em" color='black' />
                        </span>
                    </div>
                    <div className="tag w-full py-4 bg-green-600">
                        <h3 className='text-sm font-semibold flex item-center justify-center'>Download Now</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card