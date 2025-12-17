import Image from "next/image";
import ContainerPadding from "@/components/ContainerPadding";
import Logo from "@/components/NavbarMenu/logo";
import { AiFillInstagram, AiFillTikTok, AiFillFacebook } from "react-icons/ai";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { navbarLinks } from "@/app/config";
import AppointmentButton from "@/components/Appoinment_button";

export default function Footer() {
  return (
    <section id="contacts" className="w-full h-auto bg-black">
      <ContainerPadding className="flex flex-col">
        <div className="flex flex-col md:flex-row w-full h-auto justify-between items-center md:items-start pt-10">
          <div className="flex flex-col w-full md:w-60 h-auto items-center">
            <div className="flex">
              <Logo className="text-white" />
            </div>
            <p className="text-white text-[0.875rem] max-w-60 my-5">
              Professional, eco-friendly cleaning services you can trust.
            </p>
            <div className="flex w-full max-w-60 h-auto justify-between items-center text-white text-4xl">
              <span>
                <AiFillInstagram />
              </span>
              <span>
                <AiFillTikTok />
              </span>
              <span>
                <AiFillFacebook />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start w-auto h-auto my-5 md:my-0 md:mx-10">
            <h3 className="text-[1.5rem] text-[#F88944]">Links</h3>
            <ul className="flex flex-col items-center md:items-start">
              {navbarLinks
                .filter((link) => link.id !== 7)
                .map((item) => (
                  <a key={item.id} href={item.href}>
                    <li className="text-white text-[1.25rem] hover:underline decoration-2 decoration-solid decoration-[#F88944]">
                      {item.label}
                    </li>
                  </a>
                ))}
            </ul>
          </div>
          <div className="flex flex-col w-full items-center md:items-start sm:w-100 h-auto">
            <h3 className="text-[#F88944] text-[1.5rem]">
              Contact by text only
            </h3>
            <p className="flex text-white text-[1.25rem] text-nowrap my-2">
              <span className="text-[#F88944] text-[1.75rem] mr-2">
                <MdPermPhoneMsg />
              </span>
              Tatiana <span className="ml-3">204-962-2808</span>
            </p>
            <p className="flex text-white text-[1.25rem] text-nowrap">
              <span className="text-[#F88944] text-[1.75rem] mr-2">
                <MdPermPhoneMsg />
              </span>
              Iryna <span className="ml-6">204-962-1705</span>
            </p>
            <div className="flex max-h-50">
              <AppointmentButton />
              <Image
                src="/Cat_footer.webp"
                alt="cat"
                width={200}
                height={200}
                className="hidden md:flex w-50 h-auto object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full h-auto justify-center md:justify-start">
          <div className="flex w-40 md:w-full h-auto flex-col md:flex-row justify-between items-start md:items-start p-adaptive-text">
            <p className="flex text-white mb-3">
              <span className="text-2xl text-[#F88944] mr-2">
                <FaLocationDot />
              </span>
              Canada Winnipeg
            </p>
            <p className="flex text-white md:mx-2 mb-3">
              <span className="mr-2 text-2xl text-[#F88944]">
                <MdAccessTime />
              </span>
              Monday to Saturday: 8:00AM - 5:00PM
            </p>
            <p className="flex text-white items-center mb-3">
              <span className="text-[#F88944] text-2xl mr-2">
                <MdOutlineEmail />
              </span>{" "}
              twosisters@gmail.com
            </p>
          </div>
        </div>
        <div className="flex w-full h-auto justify-center text-white border-t-2 border-white">
          <p className="text-[0.825rem] sm:text-[1rem]">
            Developed by Gelo_DEV 2025{" "}
            <span className="text-[2rem]">&copy;</span> - All Rights Reserved
          </p>
        </div>
      </ContainerPadding>
    </section>
  );
}
