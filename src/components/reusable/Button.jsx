import React from "react";
import { IoIosReturnRight } from "react-icons/io";
const Button = ({ title = "Get Started" }) => {
  return (
    <button className="min-w-40 px-4 py-2 rounded-full text-sm font-medium bg-white text-zinc-900 flex justify-between items-center cursor-pointer">
      {title}
      <IoIosReturnRight size={"21"} />
    </button>
  );
};

export default Button;
