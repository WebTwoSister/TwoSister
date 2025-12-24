import { motion } from "framer-motion";
import ContainerPadding from "@/components/ContainerPadding";
import NameTitle from "@/components/nameTitle";
import { Slider } from "@/components/CompareSlider";

export default function PortfolioSection() {
  return (
    <section
      aria-labelledby="portfolio-title"
      id="projects"
      className="w-full h-auto"
    >
      <ContainerPadding>
        <div className="flex flex-col w-full h-auto">
          <div className="flex flex-col md:flex-row w-full h-auto">
            <div className="flex flex-col flex-1/2 py-10 md:mr-10">
              {/* Subtitle with underline */}
              <NameTitle name="Work Portfolio" color="black" />
              {/* Title */}
              <h2
                id="portfolio-title"
                className="h1-adaptive-text text-center md:text-start text-black md:mb-8"
              >
                Recent Projects Completed
              </h2>
              {/* Description paragraph */}
              <p className="p-adaptive-text text-center md:text-start text-black">
                Discover our latest completed projects, showcasing quality,
                attention to detail and professionalism. We implement each task
                with a focus on results and customer satisfaction.
              </p>
            </div>
            {/* Container with compare slider 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: 0.1,
                duration: 0.2,
                ease: "easeOut",
              }}
              className="flex flex-1/2 justify-center items-center rotate-6 md:py-20 py-5 md:ml-10"
            >
              <Slider Before="/Before.webp" After="/After.webp" />
            </motion.div>
          </div>
          {/* Container with compare sliders 2 and 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: 0.1,
              duration: 0.2,
              ease: "easeOut",
            }}
            className="flex flex-col md:flex-row w-full h-auto"
          >
            {/* Slider 2 */}
            <div className="flex flex-1/2 justify-center -rotate-8 items-center md:mr-10 py-15">
              <Slider Before="/Before.webp" After="/After.webp" />
            </div>
            {/* Slider 3 */}
            <div className="flex flex-1/2 justify-center -rotate-3 items-center md:ml-10">
              <Slider Before="/Before.webp" After="/After.webp" />
            </div>
          </motion.div>
        </div>
      </ContainerPadding>
    </section>
  );
}
