import { BlogContext } from "../Store/BlogContext";
import { useContext } from "react";

const LoginComponent = () => {
  const { setUser } = useContext(BlogContext);

  const params = {
    permissions: ["SIGN_TRANSACTION"],
  };

  const handleLogin = async () => {
    try {
      // Check if ArConnect is available (extension is installed)
      

      const response = await  window.arweaveWallet.connect(params);
      console.log(response);
      setUser(response);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with ArConnect</button>
    </div>
  );
};

export default LoginComponent;
