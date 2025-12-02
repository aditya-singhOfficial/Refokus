import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
import yir from "../../../public/videos/yir.webm";
import yahoo from "../../../public/videos/yahoo.webm";

import arqitel from "../../../public/videos/arqitel.webm";
import ttr from "../../../public/videos/ttr.webm";

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ];

  const [position, setPosition] = useState(null);

  const changePosition = (value) => {
    setPosition(value * 20);
  };

  return (
    <div className="w-full mt-10 relative">
      {products.map((item, index) => (
        <Product value={item} changePosition={changePosition} index={index} />
      ))}
      <div className="h-full w-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: position + `rem` }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute left-[44%] -translate-x-[50%]  w-96 h-80 overflow-y-hidden rounded-md"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            {position == 0 && (
              <video autoPlay muted loop>
                <source src={arqitel} type="video/webm" />
              </video>
            )}
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={ttr} type="video/webm" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={yir} type="video/webm" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={yahoo} type="video/webm" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
