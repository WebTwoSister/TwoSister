"use client";
import { useInView } from "react-intersection-observer";
import MainSection from "../section/main";
import AboutSection from "../section/about";
import Main_divider from "@/components/Main_divider";
import ButtonUpDown from "@/components/buttonUpDown";
import Advantage from "@/components/Advantage";
import ServicesPage from "@/section/services";
import Services_divider from "@/components/Services_divider";

export default function HomePage() {
  const { ref, inView } = useInView({
    threshold: 0.3, // коли 30% секції видно — активується
  });

  return (
    <main className="flex flex-col min-h-screen">
      <MainSection />
      <Main_divider />
      <AboutSection ref={ref} />
      <ButtonUpDown visible={inView} />
      <Advantage />
      <ServicesPage />
      <Services_divider />
    </main>
  );
}
