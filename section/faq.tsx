import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ContainerPadding from "@/components/ContainerPadding";
import NameTitle from "@/components/nameTitle";

// Type of data for servicesData
type FAQ = {
  id: number;
  question: string;
  answer: string;
};

// Data of page
const faqData: FAQ[] = [
  {
    id: 1,
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No, you don’t need to worry about providing any cleaning products or equipment. Our team arrives fully equipped with all the necessary tools and professional-grade supplies to complete the job efficiently.",
  },
  {
    id: 2,
    question: "Are you cleaning products eco-friendly?",
    answer:
      "Yes, we use eco-friendly and non-toxic cleaning products that are safe for children, pets, and the environment.",
  },
  {
    id: 3,
    question: "How do I book a cleaning appointment?",
    answer:
      "You can easily book a cleaning appointment through our website by clicking the Get Appointment button, or text us at our phone number. We will confirm the details with you.",
  },
  {
    id: 4,
    question: "How long does a typical cleaning take?",
    answer:
      "The duration depends on the size of the space and the type of service, but most cleanings take between 2 to 4 hours.",
  },
  {
    id: 5,
    question: "How much does a cleaning service cost?",
    answer:
      "The cost depends on the size of your space and the type of cleaning service. Contact us for a free, personalized estimate.",
  },
  {
    id: 6,
    question: "Do you provide cleaning services in homes with pets?",
    answer:
      "Absolutely! We are pet-friendly and use safe, non-toxic cleaning products. We kindly ask that pets are secured during the cleaning for their comfort and safety.",
  },
];

export default function FAQ() {
  const [faqId, setFaqId] = useState<number>(1);
  return (
    <section id="faq" className="w-full h-auto bg-[#963880]">
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
              Find clear answers to the most common questions about our cleaning
              services, booking process, pricing, and what to expect. We’re here
              to make everything simple and transparent for you.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {faqData.map((item) => {
              const isOpen = item.id === faqId;

              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => setFaqId(isOpen ? 0 : item.id)}
                    className={`flex w-full justify-center items-center border-2 text-white 
            text-[clamp(1rem,2vw,2.5rem)] shadow-2xl cursor-pointer rounded-4xl 
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{
                        height: { duration: 0.45, ease: "easeInOut" },
                        opacity: { duration: 0.25, delay: 0.3 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-[clamp(1rem,2vw,2.5rem)] text-white p-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden sm:flex flex-[40%] justify-end items-start">
          <Image
            src="/faq.webp"
            alt="faq"
            width={300}
            height={600}
            className="object-contain sticky top-20"
          />
        </div>
      </ContainerPadding>
    </section>
  );
}
