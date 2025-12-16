"use client";
import ContainerPadding from "@/components/ContainerPadding";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import Navbar from "../components/NavbarMenu/navbar";
import AppointmentButton from "@/components/Appoinment_button";
import NameTitle from "@/components/nameTitle";
import Image from "next/image";
import { motion } from "framer-motion";

const main = () => {
  return (
    <section
      id="home"
      className="bg-[linear-gradient(65deg,#96377F_0%,#96377F_70%,#F88944_95%,#F88944_100%)] md:bg-[linear-gradient(35deg,#96377F_0%,#96377F_70%,#F88944_95%,#F88944_100%)] h-auto w-full"
    >
      {/* Component with castom adaptive padding */}
      <ContainerPadding>
        <header className="flex flex-col md:flex-row w-full justify-center items-center md:gap-10 text-white min-h-10 h-auto py-1">
          <p className="flex items-center text-[0.75rem] sm:text-[1rem]">
            <span className="mx-2 text-2xl text-[#F88944]">
              <FaLocationDot />
            </span>
            Canada Winnipeg
          </p>
          <p className="flex items-center text-[0.75rem] sm:text-[1rem]">
            <span className="mx-2 text-2xl text-[#F88944]">
              <MdAccessTime />
            </span>
            Monday to Saturday: 8:00AM - 5:00PM
          </p>
        </header>
        {/* Navigation */}
        <Navbar />
        <div className="flex flex-col md:flex-row w-full h-auto">
          <div className="flex flex-col flex-1/2 lg:justify-center py-10">
            {/* Name of main title with underline */}
            <NameTitle name="Cleaning Service" />
            {/* Main title */}
            <h1 className="h1-adaptive-text text-center md:text-start text-white md:mb-8">
              <span className="text-[#F88944]">Quality</span> Cleaning Service
              and <span className="text-[#F88944]">Best</span> Offer’s
            </h1>
            {/* Image for small screens */}
            <div className="flex relative md:hidden">
              <Image
                src="/Star.svg"
                alt="Star"
                width={20}
                height={20}
                className="absolute top-5 left-15 w-5 h-auto"
              />
              <Image
                src="/Star.svg"
                alt="Star"
                width={20}
                height={20}
                className="absolute top-20 left-20 w-5 h-auto"
              />

              <motion.div
                className="absolute top-12 left-5 w-10 h-10 flex items-center justify-center"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 360, 360, 1],
                  opacity: [1, 0.5, 1, 1],
                }}
                transition={{
                  duration: 5,
                  times: [0, 0.3, 0.6, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/Star.svg"
                  alt="Star"
                  width={40}
                  height={40}
                  className="w-40 h-auto"
                />
              </motion.div>
              <Image
                src="/Main_IMG1.webp"
                alt="Main"
                loading="eager"
                priority
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
            {/* Description paragraph */}
            <p className="p-adaptive-text text-start text-white">
              We provide high-quality cleaning services for homes and offices.
              We use safe products, modern equipment and offer great deals for
              our clients. Contact us today for a free quote!
            </p>
            {/* Appointment button and cat image */}
            <div className="flex w-full h-auto justify-center items-center md:justify-start md:items-start md:gap-10 my-4">
              {/* Appointment button component */}
              <AppointmentButton name="Get Appointment" />
              <div className="hidden md:flex">
                <Image
                  src="/Cat.webp"
                  alt="Cat"
                  width={200}
                  height={200}
                  className="w-full h-auto min-h-40 max-h-180 max-w-150"
                />
              </div>
            </div>
          </div>

          {/* Image for large screens */}
          <div className="hidden relative md:flex flex-1/2 justify-end">
            <Image
              src="/Star.svg"
              alt="Star"
              width={20}
              height={20}
              className="absolute top-5 left-15 w-5 h-auto"
            />
            <Image
              src="/Star.svg"
              alt="Star"
              width={20}
              height={20}
              className="absolute top-20 left-20 w-5 h-auto"
            />

            <motion.div
              className="absolute top-12 left-5 w-10 h-10 flex items-center justify-center"
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 360, 360, 1],
                opacity: [1, 0.5, 1, 1],
              }}
              transition={{
                duration: 5,
                times: [0, 0.3, 0.6, 1],
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/Star.svg"
                alt="Star"
                width={40}
                height={40}
                className="w-40 h-auto"
              />
            </motion.div>

            <Image
              src="/Main_IMG1.webp"
              alt="Main"
              loading="eager"
              priority
              width={600}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </ContainerPadding>
    </section>
  );
};

export default main;
