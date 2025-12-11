import Image from "next/image";
import ContainerPadding from "@/components/ContainerPadding";

export default function Testimonials() {
  return (
    <section className="w-full h-auto bg-[url(/Background.webp)] bg-no-repeat bg-center bg-cover">
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
        <div className="flex w-full h-250"></div>
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
