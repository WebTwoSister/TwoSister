import { useState } from "react";
import ContainerPadding from "@/components/ContainerPadding";
import Image from "next/image";
import NameTitle from "@/components/nameTitle";
import { BiSolidBadgeCheck } from "react-icons/bi";

type Service = {
  id: number;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
};

const servicesData: Service[] = [
  {
    id: 1,
    title: "Spring Cleaning",
    description:
      "A complete cleaning of your home with special attention to detail. We remove dust, dirt in hard-to-reach places, refresh the space and make your home shiny and tidy.",
    features: ["Deep cleaning of all surfaces.", "Cleaning hard-to-reach places."],
    imageSrc: "/service_img1.webp",
    imageAlt: "Spring cleaning service",
  },
  {
    id: 2,
    title: "Regular Cleaning",
    description:
      "Professional regular cleaning of your home or office to maintain cleanliness and order every day without unnecessary hassle.",
    features: ["Flexible cleaning schedule to suit your schedule.", "Using safe and effective cleaning products."],
    imageSrc: "/regular_cleaning.webp",
    imageAlt: "Regular cleaning service",
  },
  {
    id: 3,
    title: "Construction Cleaning",
    description:
      "Cleaning after construction or renovation work to completely remove dust, debris, and material residues and prepare the space for use.",
    features: ["Removal of construction dust and small debris.", "Detailed cleaning of all surfaces."],
    imageSrc: "/construction.webp",
    imageAlt: "Construction cleaning service",
  },
  {
    id: 4,
    title: "Office Cleaning",
    description:
      "Regular and thorough cleaning of office spaces to create a clean, tidy and productive work environment.",
    features: ["Sanitizing work areas and common surfaces.", "Cleaning at a time convenient for the company."],
    imageSrc: "/office.webp",
    imageAlt: "Office cleaning service",
  },
  {
    id: 5,
    title: "Window Washing",
    description:
      "Professional window cleaning inside and out to ensure maximum transparency and light transmission without streaks or stains.",
    features: ["Using quality products and professional tools.", "Washing inside and out."],
    imageSrc: "/window.webp",
    imageAlt: "Window washing service",
  },
  {
    id: 6,
    title: "Furniture Cleaning",
    description:
      "Thorough cleaning of furniture from dust, stains and odors to restore its fresh appearance and extend its service life.",
    features: ["Safe products for different types of fabrics.", "Deep cleaning to remove stubborn dirt."],
    imageSrc: "/furniture.webp",
    imageAlt: "Furniture cleaning service",
  },
  {
    id: 7,
    title: "Carpet Cleaning",
    description:
      "Deep and professional cleaning of carpets from dust, stains and unpleasant odors to restore their color, freshness and extend their service life.",
    features: ["Professional extraction or steam cleaning.", "Effective removal of dust and stubborn stains."],
    imageSrc: "/carpet.webp",
    imageAlt: "Carpet cleaning service",
  },
];

export default function ServicesPage() {
  const [serviceId, setServiceId] = useState<number | null>(null);
  const [selectedData, setSelectedData] = useState<Service>(servicesData[0]);
  return (
    <section
      id="services"
      className="flex flex-col min-h-screen mt-40 container-padding bg-[linear-gradient(180deg,#95377F_27.92%,#CD655E_100%)]"
    >
      <ContainerPadding>
        <div className="flex flex-col justify-center items-center py-20">
          {/* Name of main title with underline */}
          <NameTitle name="Services" color="text-white" />
          {/* Main title */}
          <h2 className="h1-adaptive-text text-center max-w-xl text-white">
            <span className="text-[#F88944]">Best</span> Cleaning Services For{" "}
            <span className="text-[#F88944]">Your</span> Home
          </h2>
          {/* Description paragraph */}
          <p className="p-adaptive-text text-center text-white max-w-3xl">
            We offer the best cleaning services for your home or office. We use safe products and modern equipment to ensure perfect cleanliness and comfort in every corner.
          </p>
        </div>
        <div className="flex w-full h-auto max-h-[40vw] gap-[clamp(4%,2vw,10%)]">
          <div className="flex flex-col flex-[40%] h-auto justify-between items-end">
            {servicesData.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setSelectedData(service)
                    setServiceId(service.id)
                  }}

                  className={`flex w-full h-auto justify-center items-center border-2 text-white text-[clamp(1rem,2vw,2.5rem)] shadow-2xl cursor-pointer rounded-4xl p-[clamp(0.15rem,0.5vw,0.4rem)] my-1 ${service.id === serviceId ? "bg-[#F88944] border-[#ffffff]" : "bg-[#95377F] border-[#F88944]"}`}
                >
                  {service.title}
                </button>
            ))}
          </div>
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
              <div className="flex flex-col w-full h-[40%] text-[clamp(1rem,2vw,1.5rem)] leading-tight justify-center absolute bottom-0 left-0 bg-[#95377F70] p-4">
                <p className="flex w-full text-white">
                  {selectedData.description}
                </p>
                <div className="flex w-full h-auto flex-wrap justify-between mt-2 gap-2">
                  {selectedData.features.map((feature, index) => (
                  <p key={index} className="flex text-white items-center text-nowrap mr-2">
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
        <div className="flex w-full h-60"></div>
      </ContainerPadding>
    </section>
  );
}
