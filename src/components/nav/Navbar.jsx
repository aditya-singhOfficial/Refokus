import React from "react";
import { Link } from "react-router-dom";
import Button from "../reusable/Button";

const Navbar = () => {
  return (
    <div className="max-w-5xl m-auto py-4 px-2  border-b border-zinc-700 flex justify-between">
      <div className="navLeft flex items-center gap-20">
        <Link to={"/"}>
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt="logo"
          />
        </Link>
        <div className="links flex items-center gap-8">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <Link
              key={index}
              className="font-regular text-sm flex items-center gap-1"
              to={"/"}
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.45em #00FF19" }}
                  className="inline-block w-2 h-2 rounded-full bg-green-500"
                ></span>
              )}
              {elem.length <= 0 ? (
                <span className="inline-block w-0.5 h-6  bg-zinc-700"></span>
              ) : (
                elem
              )}
            </Link>
          ))}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
