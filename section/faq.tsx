import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ContainerPadding from "@/components/ContainerPadding";
import NameTitle from "@/components/nameTitle";
import { faqData } from "../app/config";

export default function FAQ() {
  const [faqId, setFaqId] = useState<number>(1);
  return (
    <section
      aria-labelledby="faq-title"
      id="faq"
      className="w-full h-auto bg-[#963880]"
    >
      <ContainerPadding className="flex h-auto lg:min-h-230 pb-10 gap-[5%]">
        <div className="flex flex-col flex-[60%] w-full h-auto">
          <div className="w-full h-auto mb-10">
            {/* Subtitle */}
            <NameTitle name="Frequently Asked Questions" />
            {/* Title */}
            <h2
              id="faq-title"
              className="h1-adaptive-text text-center md:text-start text-white md:mb-8"
            >
              You Have <span className="text-[#F88944]">Questions</span>, We
              Have <span className="text-[#F88944]">Answers</span>
            </h2>
            {/* Description paragraph */}
            <p className="p-adaptive-text text-start text-white">
              Find clear answers to the most common questions about our cleaning
              services, booking process, pricing, and what to expect. We’re here
              to make everything simple and transparent for you.
            </p>
          </div>
          {/* FAQ items */}
          <div className="flex flex-col gap-2">
            {faqData.map((item) => {
              const isOpen = item.id === faqId;

              return (
                <div key={item.id} className="relative">
                  <button
                    id={`faq-button-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setFaqId(isOpen ? 0 : item.id)}
                    className={`flex w-full justify-center items-center border-2 text-white 
            p-adaptive-text shadow-2xl cursor-pointer rounded-4xl 
            p-[clamp(0.15rem,0.5vw,0.4rem)]
            ${
              isOpen
                ? "bg-[#F88944] border-white"
                : "bg-[#95377F] border-[#F88944]"
            }`}
                  >
                    {item.question}
                  </button>
                  {item.id === faqId && (
                    <motion.div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-button-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{
                        height: { duration: 0.45, ease: "easeInOut" },
                        opacity: { duration: 0.25, delay: 0.3 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="p-adaptive-text text-white p-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="hidden sm:flex flex-[40%] justify-end items-start"
        >
          <Image
            src="/faq.webp"
            alt=""
            width={300}
            height={600}
            className="object-contain w-80 h-auto sticky top-20"
          />
        </div>
      </ContainerPadding>
    </section>
  );
}
