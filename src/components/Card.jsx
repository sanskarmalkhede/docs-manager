import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({ data, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} className="relative flex-shrink-0 w-[18rem] h-[22rem] rounded-[3.2rem]  bg-zinc-900/80 p-7 text-white overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">
          {data.description}
        </p>
        <div className="footer w-full left-0 absolute bottom-0">
          <div className=" flex items-center justify-between px-8 py-3 mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer">
              {data.close ? (
                <MdOutlineFileDownload size="1em" color="black" />
              ) : (
                <IoCloseSharp size="1em" color="black" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-500"
              } flex items-center justify-center cursor-pointer`}
            >
              <h3 className="text-sm font-semibold flex item-center justify-center">
                {data.tag.tagTitle}
              </h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
