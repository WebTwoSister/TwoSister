"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ButtonUpDown({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col fixed top-[50%] right-1 justify-between text-[0.875rem] h-50 z-50"
    >
      {/* Button Up container */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="relative w-10 h-20 cursor-pointer opacity-30 hover:opacity-100 transition-opacity duration-300"
      >
        <Image
          src="/button_up.svg"
          alt="up"
          width={15}
          height={20}
          className="w-full h-auto"
        />
        <span className="absolute bottom-3 left-3 text-white">Up</span>
      </button>
      {/* Button Down container */}
      <button
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
        className="relative w-10 h-20 cursor-pointer opacity-30 hover:opacity-100 transition-opacity duration-300"
      >
        <Image
          src="/button_down.svg"
          alt="down"
          width={15}
          height={20}
          className="w-full h-auto"
        />
        <span className="absolute top-4 left-1 text-white">Down</span>
      </button>
    </motion.div>
  );
}
