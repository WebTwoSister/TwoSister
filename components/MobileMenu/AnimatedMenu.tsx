"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

export const AnimatedMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacts", label: "Contacts" },
  ];

  return (
    <div className="relative">
      {/* OPEN BUTTON */}
      <button
        onClick={toggleMenu}
        className={`${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <CgMenuRight size={32} />
      </button>

      {/* OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ clipPath: "circle(0% at 80% 10%)" }}
            animate={{ clipPath: "circle(150vw at 80% 10%)" }}
            exit={{ clipPath: "circle(0% at 80% 10%)" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="
              fixed top-0 right-0 w-full sm:w-[50%] h-screen
              bg-[linear-gradient(45deg,#ffffff_0%,#ffffff_30%,#F88944_100%,#F88944_100%)]
              shadow-xl flex flex-col items-center z-50
            "
          >
            {/* CLOSE BUTTON */}
            <motion.button
              onClick={toggleMenu}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="absolute top-5 right-5"
            >
              <IoClose size={32} />
            </motion.button>

            {/* MENU ITEMS */}
            <ul className="pt-24 w-full flex flex-col items-center text-[#96377F]">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="text-2xl py-4 w-full text-center"
                >
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className="block w-full"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
