import { ethers } from "ethers";
// import logo from "../assets/logo.svg";

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };

  return (
    <nav className="flex items-end justify-end container">
      {account ? (
        <button
          type="button"
          className="bg-blue-600 px-10 text-white font-Poppins py-3 rounded-lg"
        >
          {account.slice(0, 6) + "..." + account.slice(38, 42)}
        </button>
      ) : (
        <button
          type="button"
          className="bg-blue-600 px-10 text-white font-Poppins py-3 rounded-lg"
          onClick={connectHandler}
        >
          Connect
        </button>
      )}
    </nav>
  );
};

export default Navigation;
