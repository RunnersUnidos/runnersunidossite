"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

function AnimatedNumber({ value }: { value: number }) {
  let spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span
      key={value}
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [-2, 2, -2, 2, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {display}
    </motion.span>
  );
}

export default AnimatedNumber;
