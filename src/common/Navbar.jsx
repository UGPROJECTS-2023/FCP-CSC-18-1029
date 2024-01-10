import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

// import { ReactComponent as Menu } from "../assets/menu.svg";

const links = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Download App",
  },
];

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navOpenHandler = () => {
    setNavOpen(true);
    document.body.classList.add("overflow-hidden", "lg:overflow-auto");
  };

  const navCloseHandler = () => {
    setNavOpen(false);
    document.body.classList.remove("overflow-hidden", "lg:overflow-auto");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`sticky top-0 transition-transform duration-500 z-30`}>
        <div className="container ">
          <div className="flex items-center justify-between py-6 transition-transform duration-500 md:py-8">
            <div
              className={`${
                isScrolled ? "md:opacity-0" : "md:opacity-100 ease-out"
              }`}
            >
              <Link to="/">
                {/* <Logo /> */}
                Logo
              </Link>
            </div>
            <div className="items-center hidden lg:flex border-[0.25px] bg-[#060b12] h-[40px] border-[#24343D] rounded-[48px]">
              {links.map((link, i) => (
                <Link
                  //   smooth={true}
                  //   offset={-100}
                  //   duration={500}
                  className={`flex items-center cursor-pointer text-[#D1CBCB] gap-2 py-2 px-4 rounded-full transition-colors hover:text-white`}
                  to={link.name}
                  key={i}
                >
                  <span className="text-[15px] font-light font-Poppins">
                    {link.name}
                  </span>
                </Link>
              ))}
              <a
                href="https://docs.audaxious.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex text-[15px] font-light font-Poppins items-center cursor-pointer text-[#D1CBCB] gap-2 py-2 px-4 rounded-full transition-colors hover:text-white`}
              >
                Resources
              </a>
              <a
                href="https://blog.audaxious.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex text-[15px] font-light font-Poppins items-center cursor-pointer text-[#D1CBCB] gap-2 py-2 px-4 rounded-full transition-colors hover:text-white`}
              >
                Blog
              </a>
            </div>
            <div
              className={`font-medium transition-transform duration-500 ${
                isScrolled ? "opacity-0" : "opacity-100 ease-out"
              }`}
            >
              <Link to={"/"} target="_blank">
                <button className="hidden lg:inline-block px-12 py-2 rounded-[4px] text-[#FEFEFF] text-[16px] border-[0.75px] border-[#FEFEFF] shadow shadow-[#181E24] opacity-70">
                  Buy House
                </button>
              </Link>
            </div>

            <button
              type="button"
              className={`lg:hidden transition-opacity ${
                navOpen ? "opacity-0" : "opacity-100"
              }`}
              onClick={navOpenHandler}
            >
              {/* <Menu /> */}
              menu
            </button>
          </div>

          {/* Mobile nav */}
          <Transition
            show={navOpen}
            enter="transition-transform duration-200"
            enterFrom="-translate-x-[calc(100%+40px)]"
            enterTo="translate-x-0"
            leave="transition-transform duration-200"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-[calc(100%+40px)]"
            className="absolute top-0 left-0 z-10 h-screen duration-150 bg-[#060B12] w-80 lg:hidden pb-11"
          >
            <div className="absolute top-0 left-0 z-10 h-screen p-4 bg-[#060B12] w-80 lg:hidden pb-11">
              <div className="flex flex-col h-full mt-4">
                <Link to="/" onClick={navCloseHandler}>
                  Logo
                  {/* <Logo /> */}
                </Link>

                <div className="flex flex-col flex-1 gap-2 mt-12">
                  {links.map((link, i) => (
                    <Link
                      //   smooth={true}
                      //   offset={-100}
                      //   duration={500}
                      onClick={navCloseHandler}
                      className={`flex items-center gap-3 py-2 pl-2 rounded-full transition-colors text-[#D1CBCB]`}
                      to={link.name}
                      key={i}
                    >
                      <span className="text-[15px] font-light font-Poppins">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                  <a
                    href="https://docs.audaxious.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={navCloseHandler}
                    className={`flex text-[15px] font-light font-Poppins items-center cursor-pointer text-[#D1CBCB] gap-2 py-2 px-2 rounded-full transition-colors hover:text-white`}
                  >
                    Resources
                  </a>
                  <a
                    href="https://blog.audaxious.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={navCloseHandler}
                    className={`flex text-[15px] font-light font-Poppins items-center cursor-pointer text-[#D1CBCB] gap-2 py-2 px-2 rounded-full transition-colors hover:text-white`}
                  >
                    Blog
                  </a>
                </div>

                <div className="p-2 mt-6 font-medium">
                  <Link to="/" target="_blank">
                    <button className="md:hidden inline-block w-full text-center px-12 py-2 rounded-[4px] text-[#FEFEFF] text-[16px] border-[0.75px] border-[#FEFEFF] shadow shadow-[#181E24] opacity-70">
                      Log In
                    </button>
                  </Link>
                </div>
              </div>

              <button
                className="absolute mt-4 top-4 -right-10"
                onClick={navCloseHandler}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </Transition>

          <Transition
            show={navOpen}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="absolute inset-0 h-screen bg-black/20 lg:hidden"
            onClick={navCloseHandler}
          ></Transition>
        </div>
      </div>
    </>
  );
}

export default Navbar;
