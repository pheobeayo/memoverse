import { ethers } from "ethers";
import { useState, useContext } from "react";
import { isNil } from "ramda";
import { BlogContext } from "../Store/BlogContext";

const Wallet_Connect = () => {
  const { user, setUser } = useContext(BlogContext);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const logIn = async () => {
    try {

      if (typeof window.ethereum === 'undefined') {
        alert("pls install metamask to use this feature");
        return;
      }

      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      const signer = await provider.getSigner();
      await provider.send("eth_requestAccounts", []);
      const wallet_address = await signer.getAddress();
      console.log(wallet_address);
      setIsSigningIn(true);

      if (!isNil(wallet_address)) {
        setUser({
          userId: wallet_address,
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const logOut = async () => {
    try {
      setUser(null);
      console.log("Logged out successfully.");
    } catch (error) {
      console.error("Error during logOut:", error);
    }
  };

  return (
    <div>
      {isNil(user) ? (
        <button onClick={logIn}>{isSigningIn ? 'Connecting..' : 'Connect Wallet'}</button>
      ) : (
        <button onClick={logOut}>Sign Out</button>
      )}
    </div>
  );
};

export default Wallet_Connect;
