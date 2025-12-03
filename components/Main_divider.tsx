import Image from "next/image"

const Main_divider = () => {
  return (
    <div className="flex w-full h-auto">
{/* 
        <Image
        src="/Main_divider.svg"
        alt="Divider"
        width={1440}
        height={99}
        className="w-full h-auto"
      /> */}

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
     viewBox="0 0 1440 99" opacity="1">

  <defs>
    <linearGradient id="divider-gradient" x1="-2.56114e-10" y1="49.5" x2="1668" y2="50">
      <stop offset="0.627988" stopColor="#95377F"/>
<stop offset="1" stopColor="#F88944"/>
    </linearGradient>
  </defs>

  <g fill="url(#divider-gradient)">
    <path d="M0 0V3.99969C195.84 147.789 264.672 -69.1947 427.68 30.5976C531.648 94.2927 567.36 129.59 693.648 63.7951C701.25 59.8358 710.497 57.6956 720 57.6956C729.503 57.6956 738.75 59.8358 746.352 63.7951C872.496 129.59 908.352 94.2927 1012.32 30.5976C1175.33 -69.1947 1244.16 147.689 1440 3.99969V0H0Z"/>
  </g>

</svg>
    </div>
  )
}

export default Main_divider