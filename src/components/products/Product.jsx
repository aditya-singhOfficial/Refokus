import React from "react";
import Button from "../reusable/Button";

const Product = ({ value, changePosition, index }) => {
  return (
    <div
      onMouseEnter={() => changePosition(index)}
      className="max-w-5xl h-fit lg:h-80 py-5 lg:py-20 m-auto flex-col lg:flex-row  flex justify-between items-center"
    >
      <h1 className="text-2xl lg:text-3xl font-medium">{value.title}</h1>
      <div className="w-10/12 lg:w-1/3 mt-10">
        <p>{value.description}</p>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-3 lg:gap-1 items-center mt-6">
          {value.live && <Button title="Live Website" />}
          {value.case && <Button title="Case Study" />}
        </div>
      </div>
    </div>
  );
};

export default Product;
