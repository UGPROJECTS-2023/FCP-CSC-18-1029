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
              <p className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
                <span className="text-[#EBEDED]">Providing </span>
                web 3.0 benefits
                <br /> through social networks
              </p>
            </h1>
            <p className="text-[#A2B3BC] font-Poppins font-normal text-[15px] md:text-[18px] text-center mt-6">
              Seamlessly connecting millions of social network users to web3 and
              its benefits.
              <br className="hidden md:block" />
              With AI and Web3, AudaXious offers projects an optimal way to
              incentivize
              <br className="hidden md:block" />
              members, grow communities, and enhance adoption
            </p>
            {/* <p className='text-[#A2B3BC] font-Poppins font-normal text-[15px] md:text-[18px] text-center mt-6'>
            Using tech and AI to easily connect millions to web3 and share
            <br className='hidden md:block' />
            blockchain benefits with social network users
          </p> */}
            <div className="flex items-center gap-6 pt-8">
              <Link to="/" target="_blank">
                <button className="bg-[#555656] py-2 md:px-10 px-8 rounded-[4px] border-[2px] border-[#818282] text-[#FDFDFD] md:text-[18px] text-[10.95px] font-normal font-Poppins">
                  Create account
                </button>
              </Link>

              <Link to="/">
                <button className="bg-[#79C4EC] py-2 md:px-10 px-8 rounded-[4px] border-[2px] border-[#15151A] text-[#151519] md:text-[18px] text-[10.95px] font-normal font-Poppins">
                  Engage Portal
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
                Active Users
              </p>
            </div>
            <div>
              <h2 className="text-[#D6D8D8] leading-[44px] text-[20px] md:text-[40px] font-medium font-Bricolage_Grotesque text-center">
                500
              </h2>
              <p className="text-[#818282] font-Poppins text-[13.5px] md:text-[18px] font-normal">
                Downloads
              </p>
            </div>
            <div>
              <h2 className="text-[#D6D8D8] leading-[44px] text-[20px] md:text-[40px] font-medium font-Bricolage_Grotesque text-center">
                107
              </h2>
              <p className="text-[#818282] font-Poppins text-[13.5px] md:text-[18px] font-normal">
                Communities
              </p>
            </div>
          </div>
        </div>

        {/* Download App Section  */}
        <section id="Download App" className="py-10 md:mt-10 bg-[#13161E]">
          <div className="container flex flex-wrap items-center justify-center text-center gap-y-12 md:gap-x-32">
            <div>
              <h3 className="text-[#FFFFFF] font-medium text-[27px] md:text-[32px] font-Bricolage_Grotesque">
                Download Our mobile app
              </h3>
              <p className="font-Poppins text-[17px] lg:text-left font-light text-[#968F8F] leading-[28px] mb-4">
                Do more with audaxious, downlaod
                <br /> the audaxious mobile app to get
                <br />
                started
              </p>
              <div className="flex items-center gap-4">
                {/* <Apple />
                <Google /> */}
              </div>
            </div>
            {/* <App /> */}
          </div>
        </section>

        {/* Get Started Section  */}
        <div className="container py-20">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent font-Bricolage_Grotesque font-medium text-[36px]">
              Get Started With Audaxious
            </h2>
            <p className="text-[#EBEDED] font-Poppins text-[18px] leading-[30px] font-light mb-6 mt-2">
              Earn rewards. Promote Products & Brands. Build Communities{" "}
            </p>
            <button className="bg-[#EBEDED] rounded-[4px] font-Raleway text-[#151519] text-[18px] font-medium py-3 px-12">
              Create account
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Homes;
