import { Othent } from 'othent';
import { useState, useEffect } from 'react';


const SDKDemo = () => {

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

    const userDetails = await othent.logIn()
    console.log(userDetails)

  }

  return (
    <div>
     <button onClick={logIn}>Log In </button>
    </div>
  );
};

export default SDKDemo;