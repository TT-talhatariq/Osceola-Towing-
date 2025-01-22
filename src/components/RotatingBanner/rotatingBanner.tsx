import { motion } from "framer-motion";
import React from "react";

function RotatingBanner() {
  return (
    <div>
      <div className="relative overflow-hidden h-16 w-full bg-white">
        <motion.div
          className="absolute inset-0 flex flex-col"
          animate={{ y: ["0%", "-100%"] }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="flex items-center justify-around w-full h-16 bg-yellow-500 text-white font-bold">
            <span>Osceola</span>
            <span className="text-xl">⭐</span>
            <span>Towing</span>
            <span>Osceola</span>
          </div>

          <div className="flex items-center justify-around w-full h-16 bg-black text-white font-bold">
            <span>Towing</span>
            <span className="text-xl">⭐</span>
            <span>Osceola</span>
            <span>Towing</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default RotatingBanner;
