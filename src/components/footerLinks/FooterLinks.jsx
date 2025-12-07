import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="w-full p-2 pb-5">
      <div className="max-w-5xl mx-auto flex gap-5 lg:gap-10">
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
          (item, index) => (
            <Link
              className="text-xs lg:text-sm text-zinc-300"
              key={index}
              to={"/"}
            >
              {item}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default FooterLinks;
