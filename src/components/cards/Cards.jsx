import React from "react";
import Card from "./card";

const Cards = () => {
  return (
    <div className="w-full mt-10">
      <div className="max-w-5xl m-auto p-2 flex gap-2">
        <Card
          width={"basis-2/5"}
          header={"Up Next: News"}
          title={"Insight and behind the scenes"}
          para={true}
          start={false}
          hover={false}
        />
        <Card
          width={"basis-3/5"}
          header={"Get In Touch"}
          title={"Let's get to it together."}
          para={false}
          start={true}
          hover={true}
        />
      </div>
    </div>
  );
};

export default Cards;
