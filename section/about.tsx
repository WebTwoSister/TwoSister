import Image from "next/image"
import NameTitle from "@/components/nameTitle"

const about = () => {
  return (
    <section id="about" className='flex w-full container-padding my-6'>
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
        <div className="flex flex-col flex-1/2 py-10">
          {/* Name of main title with underline */}
          <NameTitle name="About Us" color="text-black"/>
          {/* Main title */}
          <h2 className="h1-adaptive-text text-center md:text-start text-black md:mb-8">
            <span className="text-[#F88944]">Two</span> Sisters - Cleaning Services
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
            We provide top-notch cleaning services for your home and office. Our
            dedicated team ensures a spotless environment, tailored to your
            needs. Contact us today for a free quote!
          </p>
        </div>
      </div>
    </section>
  )
}

export default about