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
      aria-labelledby="main-title"
      className="bg-[linear-gradient(65deg,#96377F_0%,#96377F_70%,#F88944_95%,#F88944_100%)] md:bg-[linear-gradient(35deg,#96377F_0%,#96377F_70%,#F88944_95%,#F88944_100%)] h-auto w-full"
    >
      {/* Component with castom adaptive padding */}
      <ContainerPadding>
        <header>
          <div className="flex flex-col md:flex-row w-full justify-center items-center md:gap-10 text-white py-2">
            <address className="not-italic flex items-center text-[0.75rem] sm:text-[1rem]">
              <span className="mx-2 text-2xl text-[#F88944]" aria-hidden="true">
                <FaLocationDot />
              </span>
              Canada Winnipeg
            </address>
            <div className="flex items-center text-[0.75rem] sm:text-[1rem]">
              <span className="mx-2 text-2xl text-[#F88944]" aria-hidden="true">
                <MdAccessTime />
              </span>
              Monday to Saturday: 8:00AM - 5:00PM
            </div>
          </div>
          <Navbar />
        </header>
        <div className="flex flex-col md:flex-row w-full h-auto">
          <div className="flex flex-col flex-1/2 lg:justify-center py-10">
            {/* Name of main title with underline */}
            <NameTitle name="Cleaning Service" />
            {/* Main title */}
            <h1
              id="main-title"
              className="h1-adaptive-text text-center md:text-start text-white md:mb-8"
            >
              <span className="text-[#F88944]">Quality</span> Cleaning Service
              and <span className="text-[#F88944]">Best</span> Offer’s
            </h1>
            {/* Image for small screens */}
            <div className="flex relative md:hidden">
              <div aria-hidden="true" className="contents">
                {[1, 2].map((_, index) => (
                  <Image
                    key={index}
                    src="/Star.svg"
                    alt=""
                    width={20}
                    height={20}
                    className={`absolute ${
                      index % 2 === 0 ? "top-20 left-20" : "top-5 left-16"
                    } opacity-40 w-5 h-auto`}
                  />
                ))}

                <motion.div
                  className="absolute top-12 left-5 w-10 h-10 flex items-center justify-center"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 1, 0.4],
                    rotate: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                >
                  <Image
                    src="/Star.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="w-40 h-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                  />
                </motion.div>
              </div>
              <Image
                src="/Main_IMG1.webp"
                alt="Professional cleaning service"
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
              <AppointmentButton name="Book Appointment" />
              <div className="hidden md:flex" aria-hidden="true">
                <Image
                  src="/Cat.webp"
                  alt=""
                  width={200}
                  height={200}
                  className="w-50 h-auto"
                />
              </div>
            </div>
          </div>

          {/* Image for large screens */}
          <div className="hidden relative md:flex flex-1/2 justify-end">
            <div className="contents" aria-hidden="true">
              {[1, 2].map((_, index) => (
                <Image
                  key={index}
                  src="/Star.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={`absolute ${
                    index % 2 === 0 ? "top-20 left-20" : "top-5 left-16"
                  } w-5 h-auto opacity-40`}
                />
              ))}

              <motion.div
                className="absolute top-12 left-5 w-10 h-10 flex items-center justify-center"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.4, 1, 0.4],
                  rotate: [-10, 10, -10],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              >
                <Image
                  src="/Star.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="w-40 h-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                />
              </motion.div>
            </div>

            <Image
              src="/Main_IMG1.webp"
              alt="Professional cleaning service"
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
