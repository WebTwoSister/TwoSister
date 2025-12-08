import ContainerPadding from "@/components/ContainerPadding";
import Image from "next/image";
import NameTitle from "@/components/nameTitle";
import { forwardRef } from "react";

const about = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section id="about" ref={ref} className="flex w-full">
      {/* Component with castom adaptive padding */}
      <ContainerPadding>
        <div className="flex flex-col md:flex-row gap-10 w-full h-auto">
          {/* Image for large screens */}
          <div className="hidden relative md:flex flex-1/2 justify-start max-h-120">
            <Image
              src="/About.webp"
              alt="About"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex flex-col flex-1/2 pt-10">
            {/* Name of main title with underline */}
            <NameTitle name="About Us" color="text-black" />
            {/* Main title */}
            <h2 className="h1-adaptive-text text-center md:text-start text-black md:mb-8">
              <span className="text-[#F88944]">Two</span> Sisters - Cleaning
              Services
            </h2>
            {/* Image for small screens */}
            <div className="flex relative md:hidden max-h-120 my-6">
              <Image
                src="/About.webp"
                alt="About"
                loading="eager"
                priority
                width={600}
                height={600}
                className="h-auto object-contain"
              />
            </div>
            {/* Description paragraph */}
            <p className="p-adaptive-text text-start text-black">
              Two Sisters is a team of cleaning professionals who care about the cleanliness and comfort of your home and office. We use safe products and an individual approach to each client.
            </p>
          </div>
        </div>
      </ContainerPadding>
    </section>
  );
});

export default about;
