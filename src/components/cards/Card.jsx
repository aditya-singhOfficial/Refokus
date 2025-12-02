import { motion } from "motion/react";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
const Card = ({ width, hover, header, title, para, start }) => {
  return (
    <motion.div
      whileHover={{padding:"12px"}}
      className={`${width} ${
        hover ? " hover:bg-violet-500" : " hover:bg-zinc-400"
      } bg-zinc-500 rounded-md p-2 flex flex-col justify-between h-[60vh]`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">{header}</h2>
          <IoMdArrowForward size={20} />
        </div>
        <h1 className="text-4xl font-semibold w-10/12">{title}</h1>
      </div>
      <div className="w-full">
        {para && <p className="text-sm ">Explore what drives our team</p>}
        {start && (
          <>
            <h1 className="text-4xl font-semibold">Start a Product</h1>
            <button className="px-3 py-1 font-semibold border-2 mt-4 border-zinc-50 rounded-full">
              Contact Us
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
