import React from "react";

const Stripe = ({ value }) => {
  return (
    <div className="w-1/3 lg:w-1/6 px-2 lg:px-6 py-2 lg:py-6 border-t border-r border-b  flex items-center  justify-between">
      <img className="h-[40%] lg:h-10/12" src={value.url} alt="" />
      <h2 className="font-semibold leading-none tracking-tight text-xs lg:text-xl">
        {value.number}
      </h2>
    </div>
  );
};

export default Stripe;
