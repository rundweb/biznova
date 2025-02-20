import { useEffect, useState } from "react";
import { menu } from "../assets/data/data";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import NavbarComponents from "../components/NavbarComponents";
import { Link } from "react-router-dom";
import gsap from "gsap";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const handleClick = () => {
    setOpenMenu(false);

    gsap.fromTo(
      ".icons",
      { rotate: 180 },
      { rotate: 0, duration: 1, ease: "back.out" }
    );

    gsap.fromTo(
      ".nav-link",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.2,
        duration: 1,
        ease: "back.out",
      }
    );
  };

  useEffect(() => {
    gsap.fromTo(
      ".logo",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger:0.1,
        duration: 1.2,
        ease: "back.out",
      }
    );
  }, []);
  return (
    <section className="bg-white font-ns">
      <div className="container-primary flex items-center justify-between">
        <div className="w-full relative z-20 nav-link logo">
          <h1 className="text-3xl font-extrabold tracking-wide text-neutral-800">
            BIZ<span>NOVA</span>
          </h1>
        </div>
        {/* icon open menu */}
        <div className="relative z-20 icons logo md:hidden">
          {openMenu ? (
            <HiOutlineMenuAlt3
              className="text-3xl text-neutral-800"
              onClick={handleClick}
            />
          ) : (
            <IoClose
              className="text-3xl text-neutral-800"
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
        </div>
        {/* menu mobile */}
        <div
          className={`w-full min-h-screen p-5 fixed top-0 right-0 bg-white flex flex-col z-10 py-16 ${
            openMenu ? "-right-full" : "right-0"
          } duration-500 ease-linear md:hidden`}
        >
          {menu.map((item, i) => (
            <div key={i} className="nav-link">
              <NavbarComponents name={item.name} path={item.path} />
            </div>
          ))}
          <Link
            to={"/contact"}
            className="nav-link bg-blue-500 flex items-center justify-center h-12 rounded-lg text-white tracking-wide font-semibold text-lg mt-6 shadow-xl"
          >
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex w-full items-center gap-4 justify-center">
          {menu.map((item, i) => (
            <div key={i} className="logo">
              <NavbarComponents name={item.name} path={item.name} />
            </div>
          ))}
        </div>

        <div className="hidden md:flex w-full items-center justify-end logo">
          <Link
            to={"/contact"}
            className="bg-blue-500 h-10 rounded-lg flex items-center group justify-center px-5 text-white font-medium gap-2 hover:bg-blue-600 duration-300 ease-in-out shadow-lg"
          >
            Contact Us
            <div className="h-5 w-5 overflow-hidden">
              <div className="relative flex items-center justify-center flex-col gap-2">
                <FiArrowUpRight className="text-xl -mt-7 group-hover:mt-0 duration-150 ease-linear" />
                <FiArrowUpRight className="text-xl group-hover:mt-0 duration-150 ease-linear" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
