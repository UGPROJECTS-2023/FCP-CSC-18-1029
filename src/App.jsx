import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import app from "./assets/app.svg";

// ABIs
import RealEstate from "./abis/RealEstate.json";
import Escrow from "./abis/Escrow.json";

// Config
import config from "./config.json";
import Homes from "./pages/Homes";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

export default function App() {
  const [provider, setProvider] = useState(null);
  const [escrow, setEscrow] = useState(null);

  const [account, setAccount] = useState(null);

  const [homes, setHomes] = useState([]);
  const [home, setHome] = useState({});
  const [toggle, setToggle] = useState(false);

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();

    const realEstate = new ethers.Contract(
      config[network.chainId].realEstate.address,
      RealEstate,
      provider
    );
    const totalSupply = await realEstate.totalSupply();
    const homes = [];

    for (var i = 1; i <= totalSupply; i++) {
      const uri = await realEstate.tokenURI(i);
      const response = await fetch(uri);
      const metadata = await response.json();
      homes.push(metadata);
    }

    setHomes(homes);

    const escrow = new ethers.Contract(
      config[network.chainId].escrow.address,
      Escrow,
      provider
    );
    setEscrow(escrow);

    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
    });
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const togglePop = (home) => {
    setHome(home);
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div>
      <Navbar account={account} setAccount={setAccount} />

      {/* <Navigation account={account} setAccount={setAccount} /> */}
      {/* <Search /> */}

      <Homes />

      <div className="cards__section container">
        <div className="cards">
          {homes.map((home, index) => (
            <div className="card" key={index} onClick={() => togglePop(home)}>
              <div className="card__image">
                <img src={home.image} alt="Home" />
              </div>
              <div className="card__info">
                <h4>{home.attributes[0].value} ETH</h4>
                <p>
                  <strong>{home.attributes[2].value}</strong> bds |
                  <strong>{home.attributes[3].value}</strong> ba |
                  <strong>{home.attributes[4].value}</strong> sqft
                </p>
                <p>{home.address}</p>
              </div>
            </div>
          ))}
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
          <img src={app} alt="shshhshs" />
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
      <div>
        {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
        {toggle && (
          <Home
            home={home}
            provider={provider}
            account={account}
            escrow={escrow}
            togglePop={togglePop}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
