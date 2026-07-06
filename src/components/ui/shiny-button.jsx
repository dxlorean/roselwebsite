import React from "react"
import { motion } from "motion/react";

import { cn } from "@/lib/utils"

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
}

export const ShinyButton = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        // ADDED border-yellow-500 HERE to force the static border to be pure gold
        "relative cursor-pointer rounded-lg  border-2 border-green-900 px-6 py-2 lg:py-4 font-serif font-bold backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_60%_0%,var(--primary)/10%_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_var(--primary)/10%]",
        className
      )}
      {...animationProps}
      {...props}>
      <span
        className="relative block size-full text-2xl lg:text-3xl tracking-wide text-green-800  dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg, black calc(var(--x) + 20%), transparent calc(var(--x) + 30%), black calc(var(--x) + 100%))",
        }}>
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          // The animated shine is pure yellow/gold (Tailwind yellow-500 rgb values)
          backgroundImage:
            "linear-gradient(-75deg, rgba(234,179,8,0.2) calc(var(--x)+20%), rgba(234,179,8,1) calc(var(--x)+25%), rgba(234,179,8,0.2) calc(var(--x)+100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px" />
    </motion.button>
  );
})

ShinyButton.displayName = "ShinyButton"