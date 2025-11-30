import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full  py-6 mt-5">
      <div className="max-w-5xl mx-auto flex gap-24">
        <div className="w-1/2 ">
          <h1 className="text-[9.5rem] leading-none">refokus.</h1>
        </div>
        <div className="w-1/2 flex gap-4">
          <div className="w-1/3 ">
            <h1 className="mb-6 text-zinc-400">Socials</h1>
            {["Instgram", "Twitter", "LinkedIn"].map((item, index) => (
              <Link className="block mt-3 text-zinc-500" key={index} to={"/"}>
                {item}
              </Link>
            ))}
          </div>
          <div className="w-1/3 ">
            <h1 className="mb-6 text-zinc-400">Sitemaps</h1>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <Link className="block mt-3 text-white" key={index} to={"/"}>
                {item}
              </Link>
            ))}
          </div>
          <div className="w-1/3 flex flex-col items-end">
            <p className="mb-14 text-right text-white leading-none">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              className="bg-[#2563EB] py-0.5 px-1"
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
