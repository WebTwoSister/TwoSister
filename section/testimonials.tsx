import Image from "next/image";
import ContainerPadding from "@/components/ContainerPadding";
import NameTitle from "@/components/nameTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

type Testimonials = {
  id: number;
  text: string;
  image: string;
};

const testimonials: Testimonials[] = [
  {
    id: 1,
    text: "Tatiana and Irena are an amazing team who have been cleaning my home for the past two years. They are extremely professional and so hard working! I am always so pleased with the work they do to make my home so fresh and clean. They pay attention to all the little details.I have recommended them to friends and they, too, have been so pleased with their work. I highly recommend these amazing people if you are looking for cleaners who do a great job and approach their work with pride, love and laughter! Pat Adamson.",
    image: "/testimonial1.webp",
  },
  {
    id: 2,
    text: "Two sisters cleaning has years of experience. They are very trustworthy. They clean for my church friends and condo friends. Your place will sparkle and they’re very cheerful.  Vera Mandryk.",
    image: "/testimonial2.webp",
  },
  {
    id: 3,
    text: "My name is Coleen  and I would like to personally endorse the cleaning skills of the Tetania and Irina! I chanced upon these two lovely women as recommended by someone on Facebook ! I cannot tell you how many of my friends have chosen to use their services ! I have only heard amazingly positive things about their service! They are prompt, very, very thorough , professional, honest, trustworthy, and really I could not say enough good things about them! I was so glad to have found them in my life! You will not be disappointed",
    image: "/testimonial3.webp",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full h-auto bg-[url(/Background.webp)] bg-no-repeat bg-center bg-cover"
    >
      <div className="flex w-full h-auto">
        <svg
          viewBox="0 0 1440 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 0V90.2C1368.43 99.9 1288.8 82 1209.6 65C1100.88 41.7 1000.08 42.6 889.92 62C799.2 78 718.56 76 640.8 54C526.32 21.6 415.872 26.4 295.2 44C176.256 61.4 89.2799 43 0 12.3V0H1440Z"
            fill="#963880"
          />
        </svg>
      </div>
      <ContainerPadding>
        <div className="flex flex-col w-full h-auto items-center justify-center">
          <div className="flex w-full h-auto flex-col justify-center items-center py-5 sm:py-20">
            {/* Name of title with underline */}
            <NameTitle name="Testimonials" color="text-black" />
            {/* Title */}
            <h2 className="h1-adaptive-text text-center max-w-xl text-black">
              What Our Customers Say
            </h2>
            {/* Description paragraph */}
            <p className="p-adaptive-text text-center text-black max-w-3xl">
              Real testimonials our customers.
            </p>
          </div>
          <div className="flex w-full 2xl:w-[70%] h-auto py-10 overflow-hidden">
            <Swiper
              navigation={true}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper w-full h-auto"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="flex h-auto w-full">
                  <div className="flex flex-col md:flex-row w-full h-auto">
                    <div className="h-auto order-2 md:order-1">
                      <Image
                        src={item.image}
                        alt="testimonial"
                        width={400}
                        height={800}
                        className="h-auto object-contain aspect-3/4"
                      />
                    </div>
                    <div className="w-full h-auto md:ml-10 order-1 md:order-2">
                      <p className="w-full md:max-w-[70%] h-auto border-2 border-[#444] rounded-2xl p-4 bg-white">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </ContainerPadding>
      <div className="flex w-full h-auto">
        <svg
          viewBox="0 0 1440 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 126.596V3.72854C71.568 -9.4845 151.2 14.8983 230.4 38.0552C339.12 69.7937 439.92 68.5678 550.08 42.1417C640.8 20.347 721.44 23.0713 799.2 53.0391C913.68 97.1733 1024.13 90.6349 1144.8 66.6607C1263.74 42.959 1350.72 68.0229 1440 109.842V126.596H0Z"
            fill="#963880"
          />
        </svg>
      </div>
    </section>
  );
}
