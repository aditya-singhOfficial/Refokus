import React from "react";
import Button from "../reusable/Button";

const Product = ({ value }) => {
  return (
    <div className="w-5xl py-20 m-auto  flex justify-between items-center">
      <h1 className="text-3xl font-medium">{value.title}</h1>
      <div className="w-1/3 ">
        <p>{value.description}</p>
        <div className="flex gap-5 items-center mt-6">
          {value.live && <Button title="Live Website" />}
          {value.case && <Button title="Case Study" />}
        </div>
      </div>
    </div>
  );
};

export default Product;
