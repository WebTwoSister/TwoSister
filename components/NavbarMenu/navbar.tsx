"use client";
import Logo from "./logo";
import AppointmentButton from "../Appoinment_button";
import { AnimatedMenu } from "./AnimatedMenu";
import { navbarLinks } from "@/app/config";

const navbar = () => {
  return (
    // Navbar
    <nav className="flex w-full min-w-[280px] h-15 rounded-4xl bg-white items-center justify-between">
      {/* Logo */}
      <Logo className="ml-6" />
      {/* Mobile animated menu */}
      <div className="flex flex-col lg:hidden text-4xl cursor-pointer mr-6">
        <AnimatedMenu />
        <p className="text-[0.875rem] text-center -mt-2">menu</p>
      </div>
      {/* Navigation links large screen */}
      <ul className="hidden lg:flex flex-1 justify-center items-center gap-[4%] text-[1.25rem] text-[#333333]">
        {navbarLinks
          .filter((link) => link.id !== 5)
          .map((item) => (
            <li
              key={item.id}
              className="hover:text-[#F88944] cursor-pointer transition duration-300"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
      </ul>
      {/* Appointment button */}
      <div className="hidden lg:flex items-center mr-2">
        <AppointmentButton name="Book Appointment" />
      </div>
    </nav>
  );
};

export default navbar;
