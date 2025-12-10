import Image from "next/image";
import ContainerPadding from "@/components/ContainerPadding";
import NameTitle from "@/components/nameTitle";
import { Slider } from "@/components/CompareSlider";

export default function PortfolioPage() {
  return (
    <section id="projects" className="w-full h-auto">
      <ContainerPadding>
        <div className="flex w-full h-auto">
          <div className="flex flex-col flex-1/2 lg:justify-center py-10">
            {/* Name of main title with underline */}
            <NameTitle name="Work Portfolio" color="black" />
            {/* Main title */}
            <h2 className="h1-adaptive-text text-center md:text-start text-black md:mb-8">
              Recent Projects Completed
            </h2>
            {/* Description paragraph */}
            <p className="p-adaptive-text text-start text-black">
              We provide high-quality cleaning services for homes and offices.
              We use safe products, modern equipment and offer great deals for
              our clients. Contact us today for a free quote!
            </p>
          </div>
          <div className="flex flex-1/2 justify-center items-center">
            <Slider Before="/construction.webp" After="/carpet.webp" />
          </div>
        </div>
      </ContainerPadding>
    </section>
  );
}
