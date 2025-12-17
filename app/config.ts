import { NavbarLink, Testimonial, Service } from "./types";

// Links for navbar and footer
export const navbarLinks: NavbarLink[] = [
  { id: 1, href: "#home", label: "Home" },
  { id: 2, href: "#about", label: "About Us" },
  { id: 3, href: "#services", label: "Services" },
  { id: 4, href: "#projects", label: "Projects" },
  { id: 5, href: "#testimonials", label: "Testimonials" },
  { id: 6, href: "#faq", label: "FAQ" },
  { id: 7, href: "#contacts", label: "Contacts" },
];

// Data of testimonials section
export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Tatiana and Irena are an amazing team who have been cleaning my home for the past two years. They are extremely professional and so hard working! I am always so pleased with the work they do to make my home so fresh and clean. They pay attention to all the little details.I have recommended them to friends and they, too, have been so pleased with their work. I highly recommend these amazing people if you are looking for cleaners who do a great job and approach their work with pride, love and laughter! Pat Adamson.",
    image: "/testimonial1.webp",
  },
  {
    id: 2,
    text: "Two sisters cleaning has years of experience. They are very trustworthy. They clean for my church friends and condo friends. Your place will sparkle and they’re very cheerful.  Vera Mandryk.",
    image: "/testimonial2.webp",
  },
  {
    id: 3,
    text: "My name is Coleen  and I would like to personally endorse the cleaning skills of the Tetania and Irina! I chanced upon these two lovely women as recommended by someone on Facebook ! I cannot tell you how many of my friends have chosen to use their services ! I have only heard amazingly positive things about their service! They are prompt, very, very thorough , professional, honest, trustworthy, and really I could not say enough good things about them! I was so glad to have found them in my life! You will not be disappointed",
    image: "/testimonial3.webp",
  },
];

// Data of servic section
export const servicesData: Service[] = [
  {
    id: 1,
    title: "Deep Cleaning",
    description:
      "A complete cleaning of your home with special attention to detail. We remove dust, dirt in hard-to-reach places, refresh the space and make your home shiny and tidy.",
    features: [
      "Deep cleaning of all surfaces.",
      "Cleaning hard-to-reach places.",
    ],
    imageSrc: "/service_img1.webp",
    imageAlt: "Spring cleaning service",
  },
  {
    id: 2,
    title: "Regular Cleaning",
    description:
      "Professional regular cleaning of your home or office to maintain cleanliness and order every day without unnecessary hassle.",
    features: [
      "Flexible cleaning schedule.",
      "Using safe and effective cleaning products.",
    ],
    imageSrc: "/regular_cleaning.webp",
    imageAlt: "Regular cleaning service",
  },
  {
    id: 3,
    title: "Post Construction Cleaning",
    description:
      "Cleaning after construction or renovation work to completely remove dust, debris, and material residues and prepare the space for use.",
    features: [
      "Removal of construction dust.",
      "Detailed cleaning of all surfaces.",
    ],
    imageSrc: "/construction.webp",
    imageAlt: "Construction cleaning service",
  },
  {
    id: 4,
    title: "Office Cleaning",
    description:
      "Regular and thorough cleaning of office spaces to create a clean, tidy and productive work environment.",
    features: ["Sanitizing work areas.", "Wet cleaning."],
    imageSrc: "/office.webp",
    imageAlt: "Office cleaning service",
  },
  {
    id: 5,
    title: "Window Washing",
    description:
      "Professional window cleaning inside and out to ensure maximum transparency and light transmission without streaks or stains.",
    features: ["Using professional tools.", "Using quality products."],
    imageSrc: "/window.webp",
    imageAlt: "Window washing service",
  },
  {
    id: 6,
    title: "Furniture Cleaning",
    description:
      "Thorough cleaning of furniture from dust, stains and odors to restore its fresh appearance and extend its service life.",
    features: [
      "Safe products for different types of surfaces.",
      "Deep cleaning to remove stubborn dirt.",
    ],
    imageSrc: "/furniture.webp",
    imageAlt: "Furniture cleaning service",
  },
  {
    id: 7,
    title: "Carpet Cleaning",
    description:
      "Deep and professional cleaning of carpets from dust, stains and unpleasant odors to restore their color, freshness and extend their service life.",
    features: [
      "Professional extraction or steam cleaning.",
      "Effective removal of dust and stubborn stains.",
    ],
    imageSrc: "/carpet.webp",
    imageAlt: "Carpet cleaning service",
  },
];