import { BlogContext } from "../Store/BlogContext";
import { useState, useContext } from "react";
import { isNil } from "ramda";


const LoginComponent = () => {

  const { user, setUser } = useContext(BlogContext);
const [isSigningIn, setIsSigningIn] = useState(false);


  const handleLogin = async () => {
    
    try {
      // Check if ArConnect is available (extension is installed)
      if (typeof window.arweaveWallet == 'undefined') {
        alert("pls install arConnect to use this feature")
        return;
      }

      await window.arweaveWallet.connect(["ACCESS_ADDRESS", "SIGN_TRANSACTION",  "ACCESS_ALL_ADDRESSES"]);
      setIsSigningIn(true)
      const walletNames = await window.arweaveWallet.getWalletNames();
      console.log("Your wallet address is", walletNames);

      setUser(walletNames);
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
       setIsSigningIn(false);
    }
  };

  const logOut = async () => {
    try {
      await window.arweaveWallet.disconnect();
      setUser(null);
      console.log("Logged out successfully.");
    } catch (error) {
      console.error("Error during logOut:", error);
    }
  };

  return (
    <div>
      {isNil(user) ? (
        <button onClick={handleLogin}>{isSigningIn ? 'Connecting..' : 'Connect Wallet'}</button>
      ) : (
        <button onClick={logOut}>Sign Out</button>
      )}
    </div>
  );
};

export default LoginComponent;
