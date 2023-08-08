import { Othent } from 'othent';
import { useState, useEffect, useContext } from 'react';
import { isNil } from "ramda";
import { BlogContext} from '../Store/BlogContext';

const SDKDemo = () => {

  const {user, setUser} = useContext(BlogContext);

  const [isSigningIn, setIsSigningIn] = useState(false);
  const [othent, setOthent] = useState(null);
  useEffect(() => {
    const initializeOthent = async () => {
      const othentInstance = await Othent({ 
        API_ID: "b5d7095cd48ab18eea7b1b77ded2808e",
      });
      setOthent(othentInstance);
    }
    initializeOthent();
  }, []);


  async function logIn() {
    try {
      setIsSigningIn(true); 
      const userDetails = await othent.logIn();
      console.log(userDetails);
  
      // Check if userDetails is not null or undefined
      if (!isNil(userDetails)) {
        setUser({
          userId: userDetails.nickname, 
          userPicture: userDetails.picture,
          userContract: userDetails.contract_Id, // Use userDetails.contract_id to access the contract_id property
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setIsSigningIn(false);
    }
  }

  async function logOut() {
    try {
      const response = await othent.logOut();
      console.log(response);
      setUser(null);
      console.log("<<logout()");
    } catch (error) {
      console.error("Error during logOut:", error);
    }
  }
  
  


  return (
    <div>
    {isNil(user) ? (
     <button onClick={logIn}>{isSigningIn ? 'Signing In...' : 'Sign In with Google'} </button>
     ) : (
     <button onClick={logOut}>Sign Out</button>
     )}
     </div>
  );
};

export default SDKDemo;