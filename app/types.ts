// Types for navbarLinks
export type NavbarLink = {
  id: number;
  href: `#${string}`;
  label: string;
};

// Types for testimonials
export type Testimonial = {
  id: number;
  text: string;
  image: string;
};

// Types for servicesData
export type Service = {
  id: number;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
};
