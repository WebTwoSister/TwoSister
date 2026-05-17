import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Advantage() {
  // Ref for the section element
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  // Motion values for animated counters
  const years = useMotionValue(0);
  const orders = useMotionValue(0);
  const customers = useMotionValue(0);
  const rounded_years = useTransform(years, Math.round);
  const rounded_orders = useTransform(orders, Math.round);
  const rounded_customers = useTransform(customers, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(years, 10, { duration: 2.5 });
      const animation2 = animate(orders, 175, { duration: 2.5 });
      const animation3 = animate(customers, 159, { duration: 2.5 });

      return () => {
        animation.stop();
        animation2.stop();
        animation3.stop();
      };
    }
  }, [isInView]);

  return (
    <section ref={ref} aria-labelledby="stats-title">
      <h2 id="stats-title" className="sr-only">
        Company Achievements Statistics
      </h2>
      {/* For medium and larger screens */}
      <div className="hidden md:flex w-full h-100 pb-15 justify-between items-center bg-[url('/H-decoration.svg')] bg-cover bg-no-repeat">
        <figure className="flex w-100 flex-col items-center rotate-6 ml-[10%] 2xl:ml-[15%] lg:mb-8">
          <motion.span className="text-[8rem] text-white text-center font-baloo">
            {rounded_years}
          </motion.span>
          <figcaption className="text-3xl text-white text-center font-bubblegum md:-m-10 lg:-m-14 max-w-40">
            Years of Experience
          </figcaption>
        </figure>
        <figure className="flex w-100 flex-col items-center -rotate-6 lg:mb-8">
          <motion.span className="text-[8rem] text-white text-center font-baloo">
            {rounded_orders}
          </motion.span>
          <figcaption className="text-3xl text-white text-center font-bubblegum md:-m-10 lg:-m-14 max-w-40">
            Completed Orders
          </figcaption>
        </figure>
        <figure className="flex w-100 flex-col items-center rotate-8 mr-[10%] xl:mr-[15%] lg:mb-8">
          <motion.span className="text-[8rem] text-white text-center font-baloo">
            {rounded_customers}
          </motion.span>
          <figcaption className="text-3xl text-white text-center font-bubblegum md:-m-10 lg:-m-14 max-w-40">
            Satisfied Customers
          </figcaption>
        </figure>
      </div>
      {/* For small screens */}
      <div className="flex flex-col md:hidden w-full h-170 sm:h-200 justify-start items-center bg-[url('/V-decoration.svg')] bg-contain bg-center bg-no-repeat">
        <figure className="flex flex-col items-center rotate-6">
          <motion.span className="text-[7rem] sm:text-[8rem] text-white text-center font-baloo">
            {rounded_years}
          </motion.span>
          <figcaption className="text-2xl sm:text-3xl text-white text-center font-bubblegum max-w-40 -mt-10">
            Years of Experience
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center -rotate-6">
          <motion.span className="text-[7rem] sm:text-[8rem] text-white text-center font-baloo">
            {rounded_orders}
          </motion.span>
          <figcaption className="text-2xl sm:text-3xl text-white text-center font-bubblegum  max-w-40 -mt-10">
            Completed Orders
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center rotate-3">
          <motion.span className="text-[7rem] sm:text-[8rem] text-white text-center font-baloo">
            {rounded_customers}
          </motion.span>
          <figcaption className="text-2xl sm:text-3xl text-white text-center font-bubblegum max-w-40 -mt-10">
            Satisfied Customers
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
