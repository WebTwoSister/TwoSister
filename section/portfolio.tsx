import Image from "next/image";
import ContainerPadding from "@/components/ContainerPadding";
import NameTitle from "@/components/nameTitle";
import { Slider } from "@/components/CompareSlider";

export default function PortfolioSection() {
  return (
    <section id="projects" className="w-full h-auto">
      <ContainerPadding>
        <div className="flex flex-col w-full h-auto">
          <div className="flex flex-col md:flex-row w-full h-auto">
          <div className="flex flex-col flex-1/2 py-10 md:mr-10">
            {/* Name of main title with underline */}
            <NameTitle name="Work Portfolio" color="black" />
            {/* Main title */}
            <h2 className="h1-adaptive-text text-center md:text-start text-black md:mb-8">
              Recent Projects Completed
            </h2>
            {/* Description paragraph */}
            <p className="p-adaptive-text text-center md:text-start text-black">
              Discover our latest completed projects, showcasing quality, attention to detail and professionalism. We implement each task with a focus on results and customer satisfaction.
            </p>
          </div>
          {/* Container with compare slider 1 */}
          <div className="flex flex-1/2 justify-center items-center rotate-6 md:py-20 py-5 md:ml-10">
            <Slider Before="/Before.webp" After="/After.webp" />
          </div>
          </div>
          {/* Container with compare sliders 2 and 3 */}
          <div className="flex flex-col md:flex-row w-full h-auto">
            <div className="flex flex-1/2 justify-center -rotate-8 items-center md:mr-10 py-15">
            <Slider Before="/Before.webp" After="/After.webp" />
          </div>
            <div className="flex flex-1/2 justify-center -rotate-3 items-center md:ml-10">
            <Slider Before="/Before.webp" After="/After.webp" />
          </div>
          </div>
        </div>
      </ContainerPadding>
    </section>
  );
}
