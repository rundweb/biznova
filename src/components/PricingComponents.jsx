import { BsStars } from "react-icons/bs";
import gsap from "gsap";
import { useEffect } from "react";
import { pricingPlans } from "../assets/data/data";
import { BsCheckAll } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
const PricingComponents = () => {
  useEffect(() => {
    [".pricing-p", ".pricing-h1", ".pricing-h2", ".pricing"].forEach(
      (selector) => {
        gsap.fromTo(
          selector,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: { trigger: selector, start: "top bottom" },
          }
        );
      }
    );
  }, []);
  return (
    <section className="container-primary min-h-screen py-16 flex flex-col gap-10 md:gap-16 items-center justify-center font-ns">
      <div className="flex flex-col gap-5 text-center max-w-xl items-center justify-center">
        <div className="pricing-p">
          <p className="flex items-center gap-2 text-primary tracking-wide font-semibold text-lg">
            <BsStars className="text-xl" />
            Perfect Plan
          </p>
        </div>
        <div className="pricing-h1">
          <h1
            className="text-font-primary font-extrabold lg:font-black tracking-wide
            text-3xl md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight"
          >
            Choose the Perfect Plan for Your Business
          </h1>
        </div>
        <div className="pricing-h2">
          <h2 className="text-font-primary/90 tracking-wide md:max-w-lg font-medium">
            Find the perfect plan for your business, whether you`re a startup,
            growing company, or large enterprise.
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-10 items-start justify-center">
        {pricingPlans.map((item, i) => (
          <div
            key={i}
            className={`pricing relative overflow-hidden flex flex-col gap-5 px-5 py-8 neo-secondary rounded-lg w-full max-w-xs ${
              i === 1 ? "scale-110" : "scale-100"
            }`}
          >
            <div
              className={`button-blue ${
                i === 1 ? "flex" : "hidden"
              } absolute w-full top-7 -right-28 rotate-45`}
            >
              <h1 className="text-sm tracking-wider font-bold flex items-center gap-2">
                HOTS <FaFire />
              </h1>
            </div>
            <div className="flex flex-col gap-2 text-font-primary">
              <p className="font-black text-base text-primary tracking-wide">
                BIZNOVA
              </p>
              <h1 className="font-bold text-3xl tracking-wide">{item.name}</h1>
              <h2 className="font-normal text-base">{item.description}</h2>
            </div>
            <div className="flex flex-col gap-5 text-font-primary mt-5">
              <h3 className="font-extrabold text-4xl">
                {item.price}
                <span
                  className={`${
                    i === 2 ? "hidden" : "inline-block"
                  } text-lg font-medium text-font-primary`}
                >
                  /month
                </span>
              </h3>
              <button className="button-blue font-semibold flex flex-col group">
                <div className="overflow-hidden h-6">
                  <div className="-mt-6 group-hover:mt-0 duration-200 ease-linear">{item.buttonText}</div>
                  <div className="">{item.buttonText}</div>
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              {item.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-2"
                >
                  <div>
                    <BsCheckAll className="text-primary text-2xl" />
                  </div>
                  <h1 className="text-font-primary tracking-wide">{feature}</h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingComponents;
