const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/service",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const dataHome = [
  {
    name: "Courses",
    count: 200,
    last: "+",
  },
  {
    name: "Experience",
    count: 10,
    last: "+",
  },
  {
    name: "Followers",
    count: 2,
    last: "m",
  },
];

const whatWeOffer = [
  {
    title: "Professional & Modern",
    description:
      "Clean, corporate-ready templates for a strong online presence.",
  },
  {
    title: "Fully Responsive",
    description: "Optimized for seamless performance across all devices.",
  },
  {
    title: "SEO & High Performance",
    description: "Fast-loading and search engine-friendly structure.",
  },
  {
    title: "Easy Customization",
    description: "Flexible and scalable to fit your business needs.",
  },
];

import service1 from "../image/website.jpg";
import service2 from "../image/seo.jpg";
import service3 from "../image/branding.jpg";
import service4 from "../image/eccomerce.jpg";

const services = [
  {
    title: "Custom Website",
    description: "Build a powerful, brand-driven website with modern design.",
    icon: service1,
  },
  {
    title: "SEO Optimization",
    description: "Elevate your search rankings with advanced SEO strategies.",
    icon: service2,
  },
  {
    title: "Branding & Design",
    description: "Create a distinctive and impactful brand identity.",
    icon: service3,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Unlock seamless online selling with secure payment integration.",
    icon: service4,
  },
];

export { menu, dataHome, whatWeOffer, services };
