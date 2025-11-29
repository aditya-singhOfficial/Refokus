import React from "react";

const Marque = ({ imagesURL }) => {
  return (
    <div className="flex whitespace-nowrap overflow-hidden gap-10 mt-5">
      {imagesURL.map((url, index) => (
        <img key={index} src={url} alt="logo" className="w-32 shrink-0"/>
      ))}
      {imagesURL.map((url, index) => (
        <img key={index} src={url} alt="logo" className="w-32 shrink-0"/>
      ))}
    </div>
  );
};

export default Marque;
