export default function Advantage() {
  return (
    <section aria-labelledby="stats-title">
      <h2 id="stats-title" className="sr-only">
        Company Achievements Statistics
      </h2>
      {/* For medium and larger screens */}
      <div className="hidden md:flex w-full h-100 pb-15 justify-between items-center bg-[url('/H-decoration.svg')] bg-cover bg-no-repeat">
        <figure className="flex flex-col items-center rotate-6 ml-[10%] 2xl:ml-[15%] lg:mb-8">
          <span className="text-[8rem] text-white text-center font-baloo">
            10
          </span>
          <figcaption className="text-3xl text-white text-center font-bubblegum md:-m-10 lg:-m-14 max-w-40">
            Years of Experience
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center -rotate-6 lg:mb-8">
          <span className="text-[8rem] text-white text-center font-baloo">
            175
          </span>
          <figcaption className="text-3xl text-white text-center font-bubblegum md:-m-10 lg:-m-14 max-w-40">
            Completed Orders
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center rotate-8 mr-[10%] xl:mr-[15%] lg:mb-8">
          <span className="text-[8rem] text-white text-center font-baloo">
            159
          </span>
          <figcaption className="text-3xl text-white text-center font-bubblegum md:-m-10 lg:-m-14 max-w-40">
            Satisfied Customers
          </figcaption>
        </figure>
      </div>
      {/* For small screens */}
      <div className="flex flex-col md:hidden w-full h-170 sm:h-200 justify-start items-center bg-[url('/V-decoration.svg')] bg-contain bg-center bg-no-repeat">
        <figure className="flex flex-col items-center rotate-6">
          <span className="text-[7rem] sm:text-[8rem] text-white text-center font-baloo">
            10
          </span>
          <figcaption className="text-2xl sm:text-3xl text-white text-center font-bubblegum max-w-40 -mt-10">
            Years of Experience
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center -rotate-6">
          <span className="text-[7rem] sm:text-[8rem] text-white text-center font-baloo">
            175
          </span>
          <figcaption className="text-2xl sm:text-3xl text-white text-center font-bubblegum  max-w-40 -mt-10">
            Completed Orders
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center rotate-3">
          <span className="text-[7rem] sm:text-[8rem] text-white text-center font-baloo">
            159
          </span>
          <figcaption className="text-2xl sm:text-3xl text-white text-center font-bubblegum max-w-40 -mt-10">
            Satisfied Customers
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
