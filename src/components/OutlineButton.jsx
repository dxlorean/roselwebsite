import React from "react";

const DrawOutlineButton = ({ children, lineColor = "bg-emerald-700", ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-2 py-2 transition-colors duration-[300ms] font-serif text-gray-700 hover:text-black"
    >
      <span>{children}</span>

      {/* BOTTOM */}
      <span 
        className={`absolute bottom-0 right-0 h-[2.5px] w-0 transition-all delay-100 duration-75 group-hover:w-full ${lineColor}`} 
      />

    </button>
  );
};

export default DrawOutlineButton;