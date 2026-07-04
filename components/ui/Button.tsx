"use client";

import { motion } from "framer-motion";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

export default function Button({
    children,
    className = "",
}: ButtonProps) {
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                y: -2,
            }}
            whileTap={{
                scale: 0.97,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
            }}
            className={`
      rounded-full
      border
      border-white/20
      bg-white/10
      backdrop-blur-xl
      px-10
      py-4
      text-white
      font-medium
      shadow-xl
      transition-all
      hover:bg-white
      hover:text-black
      ${className}
      `}
        >
            {children}
        </motion.button>
    );
}