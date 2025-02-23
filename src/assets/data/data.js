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

import {
  BiCodeAlt,
  BiSearchAlt,
  BiPalette,
  BiCart,
  BiSupport,
  BiTrendingUp,
} from "react-icons/bi";

const services = [
  {
    title: "Website Development",
    description:
      "Build a fast, modern website that enhances your brand and user experience.",
    icon: BiCodeAlt,
  },
  {
    title: "SEO Strategy",
    description:
      "Boost search rankings with optimized content and technical improvements.",
    icon: BiSearchAlt,
  },
  {
    title: "Branding & Design",
    description:
      "Create a unique visual identity with stunning design and strong branding.",
    icon: BiPalette,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Simplify online selling with secure payments and seamless navigation.",
    icon: BiCart,
  },
  {
    title: "Business Consulting",
    description:
      "Get expert insights and strategies to scale your business effectively.",
    icon: BiTrendingUp,
  },
  {
    title: "24/7 Support",
    description:
      "Reliable customer support to keep your business running smoothly.",
    icon: BiSupport,
  },
];

import portfolio1 from "../image/portfolio1.jpg";
import portfolio2 from "../image/portfolio2.jpg";

const portfolio = [
  {
    id: 1,
    title: "About Us Website Design",
    portImg: portfolio1,
    category: ["Template", "SaaS", "About"],
  },
  {
    id: 2,
    title: "Service Us Website Design",
    portImg: portfolio2,
    category: ["Template", "SaaS", "Services"],
  },
];
import testimonialImg from "../image/testimonial.jpg";

const testimonialItem = [
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
];

export { menu, dataHome, whatWeOffer, services, portfolio,testimonialItem };
