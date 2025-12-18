import { useState } from "react";
import { motion } from "framer-motion";
import ContainerPadding from "@/components/ContainerPadding";
import Image from "next/image";
import NameTitle from "@/components/nameTitle";
import { BiSolidBadgeCheck } from "react-icons/bi";
import AppointmentButton from "@/components/Appoinment_button";
// Import type of service
import { Service } from "@/app/types";
// Import data of services
import { servicesData } from "@/app/config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function ServicesSection() {
  const [serviceId, setServiceId] = useState<number>(1);
  const [selectedData, setSelectedData] = useState<Service>(servicesData[0]);
  return (
    <section
      id="services"
      className="flex flex-col mt-40 bg-[linear-gradient(180deg,#95377F_27.92%,#CD655E_100%)]"
    >
      {/* Component with adaptive padding */}
      <ContainerPadding>
        <div className="flex flex-col justify-center items-center py-5 sm:py-20">
          {/* Name of title with underline */}
          <NameTitle name="Services" color="text-white" />
          {/* Title */}
          <h2 className="h1-adaptive-text text-center max-w-xl text-white">
            <span className="text-[#F88944]">Best</span> Cleaning Services For{" "}
            <span className="text-[#F88944]">Your</span> Home
          </h2>
          {/* Description paragraph */}
          <p className="p-adaptive-text text-center text-white max-w-3xl">
            We offer the best cleaning services for your home or office. We use
            safe products and modern equipment to ensure perfect cleanliness and
            comfort in every corner.
          </p>
        </div>
        {/* Main container buttons + content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // The viewport controls exactly how the animation works.
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            delay: 0.2,
            duration: 0.3,
          }}
          className="hidden md:flex w-full h-auto max-h-[40vw] gap-[clamp(4%,2vw,10%)]"
        >
          {/* Button container */}
          <div className="flex flex-col flex-[40%] h-auto justify-between items-end">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setSelectedData(service);
                  setServiceId(service.id);
                }}
                className={`flex w-full h-auto justify-center items-center border-2 text-white text-[clamp(1rem,2vw,2.5rem)] shadow-2xl cursor-pointer rounded-4xl p-[clamp(0.15rem,0.5vw,0.4rem)] my-1 ${
                  service.id === serviceId
                    ? "bg-[#F88944] border-[#ffffff]"
                    : "bg-[#95377F] border-[#F88944]"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
          {/* Image + description container */}
          <div className="flex flex-[60%] w-full h-auto justify-end items-center">
            {selectedData && (
              <div className="flex relative h-auto w-full max-h-[40vw] rounded-3xl border-2 border-[#F88944] overflow-hidden">
                <Image
                  src={selectedData.imageSrc}
                  alt={selectedData.imageAlt}
                  width={1024}
                  height={900}
                  className="w-full h-auto object-cover"
                />
                {/* Description container */}
                <div className="flex flex-col w-full h-[40%] xl:h-[30%] text-[clamp(1rem,2vw,1.5rem)] leading-tight justify-center absolute bottom-0 left-0 bg-[#95377F90] p-4">
                  <p className="flex w-full text-white">
                    {selectedData.description}
                  </p>
                  <div className="flex w-full h-auto flex-wrap justify-between mt-2 gap-2">
                    {selectedData.features.map((feature, index) => (
                      <p
                        key={index}
                        className="flex text-white items-center text-nowrap mr-2"
                      >
                        <span className="text-[#F88944] text-2xl mr-2">
                          <BiSolidBadgeCheck />
                        </span>
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
        <div className="flex relative md:hidden justify-center items-center w-full overflow-hidden py-10">
          <Swiper
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full max-w-[400px] h-auto rounded-2xl"
          >
            {servicesData.map((service, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center overflow-visible rounded-2xl border-2 border-[#F88944] bg-[#95377F] aspect-3/4"
              >
                <div className="flex relative w-full h-full">
                  <h3 className="flex w-full absolute -top-8 text-2xl text-white justify-center">
                    {service.title}
                  </h3>
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={1024}
                    height={900}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                  <div className="flex flex-col w-full h-[35%] leading-tight justify-center absolute bottom-0 left-0 bg-[#95377F90] rounded-b-2xl p-4">
                    <p className="flex w-full text-white">
                      {service.description}
                    </p>
                    <div className="flex w-full h-auto flex-wrap justify-between mt-1 gap-1">
                      {service.features.map((feature, index) => (
                        <p
                          key={index}
                          className="flex text-white items-center text-nowrap mr-1"
                        >
                          <span className="text-[#F88944] text-xl mr-1">
                            <BiSolidBadgeCheck />
                          </span>
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex w-full h-auto justify-center gap-5 items-start py-5">
          <Image
            src="/Cat_left.webp"
            alt="Cat"
            width={100}
            height={100}
            className="w-40 h-auto object-contain"
          />
          <AppointmentButton />
        </div>
      </ContainerPadding>
    </section>
  );
}
