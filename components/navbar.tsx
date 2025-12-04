"use client";
import Image from "next/image";
import AppointmentButton from "./Appoinment_button";
// import { CgMenuRight } from "react-icons/cg";
import { AnimatedMenu } from "./MobileMenu/AnimatedMenu";

const SectionName = [
  "Home",
  "About Us",
  "Services",
  "Projects",
  "FAQ",
  "Contacts",
];

const navbar = () => {
  return (
    <nav className="flex w-full min-w-[280px] h-15 rounded-4xl bg-white items-center justify-between">
      <div className="flex items-center min-w-60 h-full mr-2">
        <Image
          src="/ico.jpg"
          alt="Logo"
          width={50}
          height={50}
          className="ml-6 height-auto w-10"
        />
        <div className="ml-4 flex flex-col text-nowrap">
          <p className="text-[1.5rem] font-baloo">
            <span className="text-[#F88944]">Two</span> Sisters
          </p>
          <p className="text-[0.875rem] text-center -mt-2">Cleaning Service</p>
        </div>
      </div>
      <div className="flex flex-col lg:hidden text-4xl cursor-pointer mr-6">
        <AnimatedMenu />
        <p className="text-[0.875rem] text-center -mt-2">menu</p>
      </div>
      <ul className="hidden lg:flex flex-1 justify-center items-center gap-[4%] text-[1.25rem] text-[#333333]">
        {SectionName.map((item, index) => (
          <li
            key={index}
            className="hover:text-[#F88944] cursor-pointer transition duration-300"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex items-center mr-2">
        <AppointmentButton name="Get Appointment" />
      </div>
    </nav>
  );
};

export default navbar;
