import { NavLink } from "react-router-dom";

// import { ReactComponent as X } from "../assets/x.svg";
// import { ReactComponent as Github } from "../assets/github.svg";
// import { ReactComponent as Discord } from "../assets/discord.svg";

function Footer(props) {
  return (
    <div className="container relative w-full text-white font-Poppins">
      <div className="pb-7 pt-14">
        <div className="flex flex-wrap mb-16 gap-x-24 md:gap-x-20 gap-y-8">
          <div className="md:mr-32" style={{ maxWidth: 400 }}>
            Home
            <p className="text-[14px] md:leading-[21.63px] font-light md:mt-3 mt-2">
              leveraging web3 to grow strong communities
              <br className="hidden md:block" /> and incentivize active members
            </p>
          </div>
          {GROUP_LINKS.map((group, key) => (
            <div key={key}>
              <h6 className="mb-6 text-[20px] leading-[30px] font-medium uppercase">
                {group.name}
              </h6>
              {group.links.map((link, key) => (
                <div
                  key={key}
                  className="mb-4 text-[#71757D] text-[16px] leading-[24px] font-light"
                >
                  <NavLink {...link} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t-[1px] border-[#71757D]">
          <div className="flex flex-wrap items-center justify-center gap-2 pt-5 md:pt-5">
            <p className="text-[#4F5259] md:flex-1 text-left font-medium font-Raleway text-[14px]">
              © 2023 | All rights reserved
            </p>
            <div className="flex items-center gap-4 md:ml-auto">
              <p>LInks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const GROUP_LINKS = [
  {
    name: "product",
    links: [
      { children: "features", to: "/" },
      { children: "solution", to: "/" },
      { children: "pricing", to: "/" },
    ],
  },
  {
    name: "resources",
    links: [
      { children: "FAQ's", to: "/" },
      { children: "documentation", to: "/" },
      { children: "apps", to: "/" },
    ],
  },
  {
    name: "company",
    links: [
      { children: "about us", to: "/" },
      { children: "news", to: "/" },
      { children: "blog", to: "/" },
    ],
  },
];
