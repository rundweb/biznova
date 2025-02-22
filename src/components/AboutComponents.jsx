import aboutImg from "../assets/image/about.jpg";
import { BsStars } from "react-icons/bs";
import ButtonBlue from "../element/ButtonBlue";
import { whatWeOffer } from "../assets/data/data";
import { BiCheckDouble } from "react-icons/bi";

import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import SplitText from "gsap-trial/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);
const AboutComponents = () => {
  useEffect(() => {
    const splitAbout = new SplitText(".about-split", { type: "words" });
    const words = splitAbout.words;
    const splitAbout2 = new SplitText(".about-split2", { type: "words" });
    const words2 = splitAbout2.words;

    gsap.fromTo(
      ".about-title",
      { y: 100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".about-box",
          start: "top 70%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.from(words, {
      opacity: 0.4,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-box",
        start: "top 40%",
      },
    });

    gsap.from(words2, {
      opacity: 0.4,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-box",
        start: "top 25%",
      },
    });

    gsap.fromTo(
      ".list-about",
      { opacity: 0, x: 10 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 1,
        ease: "back.out",
        scrollTrigger: {
          trigger: ".about-box",
          start: "top 5%",
        },
      }
    );

    gsap.fromTo(
      ".box-img",
      { width: "100%" },
      {
        width: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-box",
          start: "top 40%",
        },
      }
    );
  }, []);
  return (
    <section className="about-box container-primary font-ns min-h-screen flex gap-10 lg:gap-28 justify-center items-center w-full py-16 flex-col-reverse md:flex-row">
      <div className="relative p-5 w-full">
        <img
          src={aboutImg}
          alt="about-img is here"
          className="h-80 sm:h-[450px] w-full object-cover relative z-20 rounded-xl object-top"
        />
        <div className="absolute z-10 w-[50%] h-[60%] button-blue top-0 right-0  rounded-xl shadow-none"></div>
        <div className="absolute z-10 w-[50%] h-[60%] button-blue bottom-0 left-0 rounded-xl shadow-none"></div>
        <div className="absolute z-30 h-full w-0 bg-white top-0 right-0 box-img"></div>
      </div>

      <div className="flex flex-col gap-5 text-left items-start justify-start w-full ">
        <div className="about-title">
          <p className="text-lg font-semibold flex items-center gap-2 text-primary">
            <BsStars />
            About Us
          </p>
        </div>
        <div className="flex flex-wrap justify-start md:justify-start lg:max-w-xl about-img">
          <h1
            className={`about-split text-font-primary font-extrabold lg:font-black tracking-wide text-3xl md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight `}
          >
            Innovative Digital Solutions for Modern Businesses
          </h1>
        </div>
        <div className="home-p">
          <h2 className="text-font-primary font-medium about-split2">
            At BizNova, we are committed to helping businesses establish a
            strong digital presence through high-quality, professionally
            designed website templates. Our solutions are tailored to meet the
            evolving needs of modern enterprises.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {whatWeOffer.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-font-primary w-64 list-about"
            >
              <BiCheckDouble className="text-xl text-secondary" />
              <h3 className="font-semibold tracking-wide">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 items-center justify-center mt-5 list-about">
          <ButtonBlue name={"Get Started"} />
        </div>
      </div>
    </section>
  );
};

export default AboutComponents;
