import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContainerPadding from "@/components/ContainerPadding";
import NameTitle from "@/components/nameTitle";

// Type of data for servicesData
type FAQ = {
  id: number;
  title: string;
  description: string;
};

// Data of page
const faqData: FAQ[] = [
  {
    id: 1,
    title: "Deep Cleaning",
    description:
      "A complete cleaning of your home with special attention to detail. We remove dust, dirt in hard-to-reach places, refresh the space and make your home shiny and tidy.",
  },
  {
    id: 2,
    title: "Regular Cleaning",
    description:
      "Professional regular cleaning of your home or office to maintain cleanliness and order every day without unnecessary hassle.",
  },
  {
    id: 3,
    title: "Post Construction Cleaning",
    description:
      "Cleaning after construction or renovation work to completely remove dust, debris, and material residues and prepare the space for use.",
  },
  {
    id: 4,
    title: "Office Cleaning",
    description:
      "Regular and thorough cleaning of office spaces to create a clean, tidy and productive work environment.",
  },
  {
    id: 5,
    title: "Window Washing",
    description:
      "Professional window cleaning inside and out to ensure maximum transparency and light transmission without streaks or stains.",
  },
  {
    id: 6,
    title: "Furniture Cleaning",
    description:
      "Thorough cleaning of furniture from dust, stains and odors to restore its fresh appearance and extend its service life.",
  },
  {
    id: 7,
    title: "Carpet Cleaning",
    description:
      "Deep and professional cleaning of carpets from dust, stains and unpleasant odors to restore their color, freshness and extend their service life.",
  },
];

export default function FAQ() {
  const [faqId, setFaqId] = useState<number>(1);
  return (
    <section className="w-full h-auto bg-[#963880]">
      <ContainerPadding className="flex h-auto pb-10 gap-[5%]">
        <div className="flex flex-col flex-[60%] w-full h-auto">
          <div className="w-full h-auto mb-10">
            <NameTitle name="Frequently Asked Questions" />
            {/* Title */}
            <h2 className="h1-adaptive-text text-center md:text-start text-white md:mb-8">
              You Have <span className="text-[#F88944]">Questions</span>, We
              Have <span className="text-[#F88944]">Answers</span>
            </h2>
            {/* Description paragraph */}
            <p className="p-adaptive-text text-start text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col">
            {faqData.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => setFaqId(item.id)}
                  className={`flex w-full h-auto justify-center items-center border-2 text-white 
        text-[clamp(1rem,2vw,2.5rem)] shadow-2xl cursor-pointer rounded-4xl 
        p-[clamp(0.15rem,0.5vw,0.4rem)] my-1
        ${
          item.id === faqId
            ? "bg-[#F88944] border-white"
            : "bg-[#95377F] border-[#F88944]"
        }`}
                >
                  {item.title}
                </button>

                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    item.id === faqId
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    height: { duration: 0.5 },
                    opacity: {
                      duration: 0.3,
                      delay: item.id === faqId ? 0.5 : 0,
                    },
                  }}
                  className="text-[1.25rem] text-white p-4"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex flex-[40%] w-full h-auto justify-end">
          <Image
            src="/faq.webp"
            alt="faq"
            width={300}
            height={600}
            className="h-auto object-contain"
          />
        </div>
      </ContainerPadding>
    </section>
  );
}
