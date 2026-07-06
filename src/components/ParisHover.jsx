import React from "react";

const DrawOutlineButton = ({ children, lineColor = "bg-emerald-700", ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-2 py-2 transition-colors duration-[300ms] font-mono text-gray-700 hover:text-black"
    >
      {/* Main Content (Text or Icon) - z-10 keeps it above the sliding text */}
      <span className="relative z-10">{children}</span>

      {/* Sliding "Paris" Text */}
      <span className="absolute left-1/2 top-[70%] -z-0 -translate-x-1/2 text-[10px] italic text-gray-800 opacity-0 transition-all duration-300 ease-out pointer-events-none group-hover:top-full group-hover:translate-y-1 group-hover:opacity-100">
        Paris
      </span>


    </button>
  );
};

export default DrawOutlineButton;