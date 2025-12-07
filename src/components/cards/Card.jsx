import { motion } from "motion/react";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
const Card = ({ width, hover, header, title, para, start }) => {
  return (
    <motion.div
      whileHover={{ padding: "12px" }}
      className={`${width} ${
        hover ? " hover:bg-violet-500" : " hover:bg-zinc-400"
      } bg-zinc-500 rounded-md p-2 flex flex-col justify-between h-[40vh] lg:h-[60vh]`}
    >
      <div className="flex flex-col gap-2 lg:gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-xs lg:text-xl">{header}</h2>
          <IoMdArrowForward />
        </div>
        <h1 className="lg:text-4xl text-md font-semibold w-10/12">{title}</h1>
      </div>
      <div className="w-full">
        {para && (
          <p className="text-xs lg:text-sm ">Explore what drives our team</p>
        )}
        {start && (
          <>
            <h1 className="lg:text-4xl text-md font-semibold">
              Start a Product
            </h1>
            <button className="lg:px-3 px-1 text-xs lg:py-1  lg:font-semibold border lg:border-2 mt-4 border-zinc-50 rounded-full">
              Contact Us
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
