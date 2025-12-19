"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ButtonUp({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col fixed top-[50%] right-2 justify-between text-[0.875rem] h-auto z-50"
    >
      {/* Button Up container */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="relative w-10 h-20 cursor-pointer opacity-30 hover:opacity-100 transition-opacity duration-300"
      >
        <Image
          src="/button_up.svg"
          alt=""
          aria-hidden="true"
          width={15}
          height={20}
          className="w-full h-auto"
        />
        <span className="absolute bottom-3 left-3 text-white">Up</span>
      </button>
    </motion.div>
  );
}
