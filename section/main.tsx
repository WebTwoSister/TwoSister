import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import Navbar from "../components/navbar";
import AppointmentButton from "@/components/Appoinment_button";
import NameTitle from "@/components/nameTitle";
import Image from "next/image";

const main = () => {
  return (
    <section className="bg-[linear-gradient(65deg,#96377F_0%,#96377F_70%,#F88944_95%,#F88944_100%)] md:bg-[linear-gradient(35deg,#96377F_0%,#96377F_70%,#F88944_95%,#F88944_100%)] h-auto w-full container-padding">
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
        <div className="flex flex-col flex-1/2 py-10">
          {/* Name of main title with underline */}
          <NameTitle name="Cleaning Service" />
          <h1 className="h1-adaptive-text text-center md:text-start text-white md:mb-8">
            <span className="text-[#F88944]">Quality</span> Cleaning Service and{" "}
            <span className="text-[#F88944]">Best</span> Offer’s
          </h1>
          <div className="flex md:hidden">
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
          <p className="p-adaptive-text text-start text-white">
            We provide top-notch cleaning services for your home and office. Our
            dedicated team ensures a spotless environment, tailored to your
            needs. Contact us today for a free quote!
          </p>
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
        <div className="hidden md:flex flex-1/2 justify-end">
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
    </section>
  );
};

export default main;
