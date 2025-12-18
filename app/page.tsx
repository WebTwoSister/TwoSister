'use client';

import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import MainSection from "../section/main";
import AboutSection from "../section/about";
import Main_divider from "@/components/Main_divider";
import ButtonUpDown from "@/components/buttonUpDown";
import Advantage from "@/components/Advantage";
import ServicesSection from "@/section/services";
import Services_divider from "@/components/Services_divider";
import PortfolioSection from "@/section/portfolio";
import AppointmentSection from "@/section/Appointment";
import Testimonials from "@/section/testimonials";
import FAQ from "@/section/faq";
import Footer from "@/section/footer";

export default function HomePage() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });


  return (
    <main className="flex flex-col">
      <MainSection />
      <Main_divider />
      <AboutSection />
      <Advantage />
      <div ref={ref}>
      <ServicesSection />
      <Services_divider />
      <PortfolioSection />
      <AppointmentSection />
      <Testimonials />
      <FAQ />
      <Footer />
      </div>
      <ButtonUpDown visible={inView} />
    </main>
  );
}
