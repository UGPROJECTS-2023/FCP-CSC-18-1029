import React from "react";

// import { ReactComponent as Apple } from "../assets/apple.svg";
// import { ReactComponent as Google } from "../assets/google.svg";
// import { ReactComponent as App } from "../assets/app.svg";

import Container from "../components/Container";
import { Link } from "react-router-dom";

const Homes = () => {
  return (
    <>
      <Container>
        <section id="Homes" className="container pt-8">
          <div className="flex flex-col lg:bg-custom md:max-h-[512px] overflow-hidden w-full bg-no-repeat bg-center items-center justify-center md:border-[2px] md:border-[#24343D] md:py-24 py-10 rounded-[24px]">
            <h1 className="lg:text-[72px] md:text-[52px] text-[26px] leading-[36px] md:leading-[60px] lg:leading-[85px] font-semibold font-Bricolage_Grotesque text-center">
              <p className="bg-gradient-to-b from-[#8ba9cd] to-[#28EDDB] bg-clip-text text-transparent">
                <span className="text-[#EBEDED]">Unlocking </span>
                Real Estate's Future with <br /> Blockchain and Web 3.0
              </p>
            </h1>
            <p className="text-[#A2B3BC] font-Poppins font-normal text-[15px] md:text-[18px] text-center mt-6">
              Hero Heading: Unlocking Real Estate's Future with Blockchain and
              Web 3.0 Hero Text: Welcome to the next frontier in real estate
              <br className="hidden md:block" />
              innovation. Our cutting-edge blockchain-powered Web 3.0 platform
              is revolutionizing the way properties are bought
              <br className="hidden md:block" />
              sold, and managed.{" "}
            </p>
            <div className="flex items-center gap-6 pt-8">
              <Link to="/" target="_blank">
                <button className="bg-[#555656] py-2 md:px-10 px-8 rounded-[4px] border-[2px] border-[#818282] text-[#FDFDFD] md:text-[18px] text-[10.95px] font-normal font-Poppins">
                  Create account
                </button>
              </Link>

              <Link to="/">
                <button className="bg-[#79C4EC] py-2 md:px-10 px-8 rounded-[4px] border-[2px] border-[#15151A] text-[#151519] md:text-[18px] text-[10.95px] font-normal font-Poppins">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Active Users Section  */}
        <div className="container py-10 md:py-20">
          <div className="flex items-center justify-center md:gap-x-28 gap-x-10">
            <div>
              <h2 className="text-[#D6D8D8] leading-[44px] text-[20px] md:text-[40px] font-medium font-Bricolage_Grotesque text-center">
                3,200
              </h2>
              <p className="text-[#818282] font-Poppins text-[13.5px] md:text-[18px] font-normal">
                House Sold
              </p>
            </div>
            <div>
              <h2 className="text-[#D6D8D8] leading-[44px] text-[20px] md:text-[40px] font-medium font-Bricolage_Grotesque text-center">
                500
              </h2>
              <p className="text-[#818282] font-Poppins text-[13.5px] md:text-[18px] font-normal">
                Users
              </p>
            </div>
            <div>
              <h2 className="text-[#D6D8D8] leading-[44px] text-[20px] md:text-[40px] font-medium font-Bricolage_Grotesque text-center">
                107
              </h2>
              <p className="text-[#818282] font-Poppins text-[13.5px] md:text-[18px] font-normal">
                Leases
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Homes;
