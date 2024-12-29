import React from "react";
import { motion } from "framer-motion";
import { useColorTransition } from "../hooks/useColorTransition";

interface AnimatedColorButtonProps {
  colors: string[];
  duration?: number;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AnimatedColorButton({
  colors,
  duration = 3,
  children,
  className = "",
  onClick,
}: AnimatedColorButtonProps) {
  const { scope, backgroundColor } = useColorTransition(colors, duration);

  return (
    <motion.button
      ref={scope}
      style={{ backgroundColor }}
      className={`px-4 py-2 rounded-md text-white font-semibold transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
