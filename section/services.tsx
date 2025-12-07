import Image from "next/image";
import NameTitle from "@/components/nameTitle";
import { BiSolidBadgeCheck } from "react-icons/bi";

const servicesData = [
  {
    title: "Spring Cleaning",
    description:
      "Deep cleaning of all surfaces, hard-to-reach places and rooms.",
    features: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
    imageSrc: "/service_img1.webp",
    imageAlt: "Spring cleaning service",
  },

  // You can add more services here
];

export default function ServicesPage() {
  return (
    <section
      id="services"
      className="flex flex-col min-h-screen mt-40 container-padding bg-[linear-gradient(180deg,#95377F_27.92%,#CD655E_100%)]"
    >
      <div className="flex flex-col justify-center items-center py-20">
        {/* Name of main title with underline */}
        <NameTitle name="About Us" color="text-white" />
        {/* Main title */}
        <h2 className="h1-adaptive-text text-center max-w-xl text-white">
          <span className="text-[#F88944]">Best</span> Cleaning Services For{" "}
          <span className="text-[#F88944]">Your</span> Home
        </h2>
        {/* Description paragraph */}
        <p className="p-adaptive-text text-center text-white max-w-3xl">
          We provide top-notch cleaning services for your home and office. Our
          dedicated team ensures a spotless environment, tailored to your needs.
          Contact us today for a free quote!
        </p>
      </div>
      <div className="flex w-full h-auto gap-[10%]">
        <div className="flex flex-col flex-[40%] h-auto justify-start items-end">
          <button className="flex w-full h-auto justify-center items-center border-2 text-white text-xl md:text-2xl border-[#F88944] bg-[#95377F] rounded-4xl p-2">
            Spring Cleaning
          </button>
        </div>
        <div className="flex flex-[60%] w-full h-auto justify-end items-center">
          <div className="flex relative max-w-200 h-auto rounded-2xl overflow-hidden">
            <Image
              src="/service_img1.webp"
              alt="Spring cleaning service"
              width={1024}
              height={900}
              className="w-full h-auto object-cover"
            />
            <div className="flex flex-col w-full h-[40%] lg:text-lg xl:text-2xl justify-center absolute bottom-0 left-0 bg-[#95377F70] p-4">
              <p className="flex w-full text-white">
                Spring Cleaning - deep cleaning of all surfaces, hard-to-reach
                places and rooms.
              </p>
              <div className="flex w-full h-auto flex-wrap justify-between mt-2 gap-2">
                <p className="flex text-white items-center text-nowrap mr-2">
                  <span className="text-[#F88944] text-2xl mr-2">
                    <BiSolidBadgeCheck />
                  </span>
                  Lorem ipsum dolor sit amet
                </p>
                <p className="flex text-white items-center text-nowrap mr-2">
                  <span className="text-[#F88944] text-2xl mr-2">
                    <BiSolidBadgeCheck />
                  </span>
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-60"></div>
    </section>
  );
}
