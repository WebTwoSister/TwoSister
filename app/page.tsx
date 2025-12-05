import React from "react";
import MainSection from "../section/main";
import AboutSection from "../section/about";
import Main_divider from "@/components/Main_divider";
import Advantage from "@/components/Advantage";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <MainSection />
      <Main_divider />
      <AboutSection />
      <Advantage />
    </main>
  );
}
