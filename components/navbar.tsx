import Image from "next/image";
import AppointmentButton from "./Appoinment_button";

const SectionName = ['Home', 'About Us', 'Services', 'Projects', 'FAQ', 'Contacts'];

const navbar = () => {
  return <nav className="flex w-full h-15 rounded-4xl bg-white">
    <div className="flex items-center min-w-60 h-full mr-2">
      <Image
        src="/ico.jpg"
        alt="Logo"
        width={50}
        height={50}
        className="ml-6"
      />
      <div className="ml-4 flex flex-col text-nowrap">

      <p className="text-[1.5rem] font-baloo"><span className="text-[#F88944]">Two</span> Sisters</p>
      <p className="text-[0.875rem] -mt-2">Cleaning Service</p>
      </div>
    </div>
    <ul className="hidden lg:flex flex-1 justify-center items-center gap-[4%] text-[1.25rem] text-[#333333]">
      {SectionName.map((item, index) => (
        <li key={index} className="hover:text-[#F88944] cursor-pointer transition duration-300">{item}</li>
      ))}
    </ul>
    <div className="hidden lg:flex items-center mr-2">
      <AppointmentButton name="Get Appointment" />
    </div>
  </nav>;
};

export default navbar;
