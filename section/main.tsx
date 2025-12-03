import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import Navbar from "../components/navbar";

const main = () => {
  return (
    <section className="bg-[linear-gradient(45deg,#96377F_0%,#96377F_70%,#F88944_95%,#F88944_100%)] h-176 w-full px-42">
      <div className="flex w-full justify-center items-center gap-10 text-white h-10">
        <p className="flex items-center">
          <span className="mx-2 text-2xl text-[#F88944]">
            <FaLocationDot />
          </span>
          Canada Winnipeg
        </p>
        <p className="flex items-center">
          <span className="mx-2 text-2xl text-[#F88944]">
            <MdAccessTime />
          </span>
          Monday to Saturday: 8:00AM - 5:00PM
        </p>
      </div>
      <Navbar />
      <h1 className="text-[5rem] font-bold text-center mb-8">
        Quality Cleaning Service and Best Offer’s
      </h1>
      <p className="text-lg text-center max-w-xl">
        We provide top-notch cleaning services for your home and office. Our
        dedicated team ensures a spotless environment, tailored to your needs.
        Contact us today for a free quote!
      </p>
    </section>
    
  );
};

export default main;
