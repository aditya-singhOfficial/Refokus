import React from "react";

const Stripe = ({ value }) => {
  return (
    <div className="w-1/6 px-6 py-6 border-t border-r border-b  flex items-center  justify-between">
      <img className="h-10/12" src={value.url} alt="" />
      <h2 className="font-semibold leading-none tracking-tight">
        {value.number}
      </h2>
    </div>
  );
};

export default Stripe;
