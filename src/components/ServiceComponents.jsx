import { BsStars } from "react-icons/bs";
import { services } from "../assets/data/data";
import gsap from "gsap";
import { useEffect } from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
const ServiceComponents = () => {
  const serviceH1 = "Empowering Your Business With Smart Solutions";
  const splitService = serviceH1.split(" ");

  useEffect(() => {}, []);
  return (
    <section className="container-primary min-h-screen w-full p-5 py-16 font-ns flex items-center justify-center flex-col gap-10 md:gap-14 " >
      <div className="flex flex-col gap-5 items-center justify-center text-center ">
        <div className="home">
          <p className="button-blue rounded-full text-base font-semibold">
            <BsStars />
            Our Service
          </p>
        </div>
        <div className="overflow-hidden flex items-center flex-wrap justify-center max-w-2xl ">
          {splitService.map((item, index) => (
            <h1
              key={index}
              className={`text-h1 animated-text text-font-primary font-extrabold lg:font-black tracking-wide
            text-3xl md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight`}
            >
              {item}&nbsp;
            </h1>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-start sm:justify-center gap-5 sm:gap-10 w-full">
        {services.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 sm:max-w-64 cursor-pointer group overflow-hidden w-full h-max"
          >
            <div className="">
              <img
                src={item.icon}
                alt="service images"
                className="h-48 md:h-40 w-full object-cover group-hover:h-28 group-hover:scale-110 duration-500 ease-in-out"
              />
            </div>
            <h1 className="text-xl font-bold text-font-primary tracking-wide">
              {item.title}
            </h1>
            <p className="text-font-primary/80 sm:text-base">
              {item.description}
            </p>
            <div className="opacity-0 group-hover:opacity-100 flex items-start justify-start duration-500 ease-in-out">
              <h1 className="flex items-center gap-2 font-medium text-secondary">
                Read More <HiMiniArrowLongRight />
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceComponents;
