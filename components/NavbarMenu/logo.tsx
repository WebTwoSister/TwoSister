import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center min-w-60 h-full mr-2 ${className}`}>
      <Image
        src="/ico.webp"
        alt="Logo"
        width={50}
        height={50}
        className="height-auto w-10"
      />
      <div className="ml-4 flex flex-col text-nowrap">
        <p className={`text-[1.5rem] font-baloo`}>
          <span className="text-[#F88944]">Two</span> Sisters
        </p>
        <p className={`text-[0.875rem] text-center -mt-2`}>Cleaning Services</p>
      </div>
    </div>
  );
}
