import { BsStars } from "react-icons/bs";
import home from "../assets/image/home.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ButtonBlue from "../element/ButtonBlue";
import ButtonWhite from "../element/ButtonWhite";
import { dataHome } from "../assets/data/data";
import CountUp from "react-countup";
const HomeComponents = () => {
  const textHome = [
    "Elevate",
    "Your",
    "Business",
    "with",
    "a",
    "Next-Gen",
    "Website",
  ];

  const textRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      ".home",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.8"
      )
      .fromTo(
        ".home-p",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.8"
      )
      .fromTo(
        ".home-btn",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.8"
      )
      .fromTo(
        ".home-img",
        { height: 0 },
        { height: "480px", duration: 2 },
        "-=0.2"
      )
      .fromTo(
        ".home-count",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.8"
      );
  }, []);
  return (
    <div className="container-primary font-ns min-h-screen flex flex-col gap-10 lg:gap-20 justify-center items-center w-full py-20 md:flex-row mt-10 md:mt-0">
      <div className="flex flex-col justify-center items-center text-center gap-5 w-full max-w-sm md:max-w-full md:items-start md:text-start">
        <div className="home">
          <p className="button-blue rounded-full text-sm font-semibold">
            <BsStars />
            Innovate With Confidence
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start lg:max-w-lg ">
          {textHome.map((word, index) => (
            <h1
              key={index}
              ref={(el) => (textRef.current[index] = el)}
              className={`text-font-primary font-extrabold lg:font-black tracking-wide text-3xl md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight capitalize ${
                index === 2 && "text-primary"
              } ${index === 6 && "text-primary"}`}
            >
              {word}
              <span>&nbsp;</span>
            </h1>
          ))}
        </div>
        <div className="home-p">
          <h2 className="text-font-primary lg:max-w-md">
            A modern, high-performance, and fully responsive template.
            SEO-friendly, fast, and easy to customize.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center mt-5">
          <ButtonBlue name={"Get Started"} />
          <ButtonWhite name={"View Features"} />
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className="relative">
          <img
            src={home}
            alt="home-image primary"
            className="h-80 max-h-96 md:max-h-[480px] w-full object-cover object-center rounded-2xl home-img"
          />
          <div className="home-count absolute w-[95%] bg-third/50 filter backdrop-blur-md left-2/4 -translate-x-2/4 bottom-2 rounded-2xl items-center justify-center p-5 border-2 border-third hidden md:flex">
            <div className="flex items-center justify-around gap-5 w-full">
              {dataHome.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-2 items-center justify-center w-full ${
                    i === 1 && "border-x-0 lg:border-x-2 border-third/50 "
                  }`}
                >
                  <h1 className="text-primary font-bold text-3xl">
                    <CountUp end={item.count} duration={5} delay={2} />
                    {item.last}
                  </h1>
                  <h2 className="font-medium text-font-primary tracking-wide text-center">
                    {item.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponents;
