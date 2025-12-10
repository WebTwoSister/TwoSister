import { useState } from "react";
import ContainerPadding from "@/components/ContainerPadding";
import Image from "next/image";
import NameTitle from "@/components/nameTitle";
import { BiSolidBadgeCheck } from "react-icons/bi";
import AppointmentButton from "@/components/Appoinment_button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// Type of data for servicesData
type Service = {
  id: number;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
};

// Data of page
const servicesData: Service[] = [
  {
    id: 1,
    title: "Deep Cleaning",
    description:
      "A complete cleaning of your home with special attention to detail. We remove dust, dirt in hard-to-reach places, refresh the space and make your home shiny and tidy.",
    features: [
      "Deep cleaning of all surfaces.",
      "Cleaning hard-to-reach places.",
    ],
    imageSrc: "/service_img1.webp",
    imageAlt: "Spring cleaning service",
  },
  {
    id: 2,
    title: "Regular Cleaning",
    description:
      "Professional regular cleaning of your home or office to maintain cleanliness and order every day without unnecessary hassle.",
    features: [
      "Flexible cleaning schedule.",
      "Using safe and effective cleaning products.",
    ],
    imageSrc: "/regular_cleaning.webp",
    imageAlt: "Regular cleaning service",
  },
  {
    id: 3,
    title: "Post Construction Cleaning",
    description:
      "Cleaning after construction or renovation work to completely remove dust, debris, and material residues and prepare the space for use.",
    features: [
      "Removal of construction dust.",
      "Detailed cleaning of all surfaces.",
    ],
    imageSrc: "/construction.webp",
    imageAlt: "Construction cleaning service",
  },
  {
    id: 4,
    title: "Office Cleaning",
    description:
      "Regular and thorough cleaning of office spaces to create a clean, tidy and productive work environment.",
    features: ["Sanitizing work areas.", "Wet cleaning."],
    imageSrc: "/office.webp",
    imageAlt: "Office cleaning service",
  },
  {
    id: 5,
    title: "Window Washing",
    description:
      "Professional window cleaning inside and out to ensure maximum transparency and light transmission without streaks or stains.",
    features: ["Using professional tools.", "Using quality products."],
    imageSrc: "/window.webp",
    imageAlt: "Window washing service",
  },
  {
    id: 6,
    title: "Furniture Cleaning",
    description:
      "Thorough cleaning of furniture from dust, stains and odors to restore its fresh appearance and extend its service life.",
    features: [
      "Safe products for different types of surfaces.",
      "Deep cleaning to remove stubborn dirt.",
    ],
    imageSrc: "/furniture.webp",
    imageAlt: "Furniture cleaning service",
  },
  {
    id: 7,
    title: "Carpet Cleaning",
    description:
      "Deep and professional cleaning of carpets from dust, stains and unpleasant odors to restore their color, freshness and extend their service life.",
    features: [
      "Professional extraction or steam cleaning.",
      "Effective removal of dust and stubborn stains.",
    ],
    imageSrc: "/carpet.webp",
    imageAlt: "Carpet cleaning service",
  },
];

export default function ServicesPage() {
  const [serviceId, setServiceId] = useState<number>(1);
  const [selectedData, setSelectedData] = useState<Service>(servicesData[0]);
  return (
    <section
      id="services"
      className="flex flex-col min-h-screen mt-40 container-padding bg-[linear-gradient(180deg,#95377F_27.92%,#CD655E_100%)]"
    >
      {/* Component with adaptive padding */}
      <ContainerPadding>
        <div className="flex flex-col justify-center items-center py-5 sm:py-20">
          {/* Name of main title with underline */}
          <NameTitle name="Services" color="text-white" />
          {/* Main title */}
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
        <div className="hidden md:flex w-full h-auto max-h-[40vw] gap-[clamp(4%,2vw,10%)]">
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
        </div>
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
                  <h2 className="flex w-full absolute -top-8 text-2xl text-white justify-center">
                    {service.title}
                  </h2>
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
