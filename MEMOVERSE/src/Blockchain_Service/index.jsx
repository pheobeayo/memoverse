import { Othent } from "othent";
import { useState, useEffect } from "react";

const useOthent = () => {
  const [othent, setOthent] = useState(null);

  useEffect(() => {
    const initOthent = async () => {
      try {
        const othentInstance = await Othent({
          API_ID: "b5d7095cd48ab18eea7b1b77ded2808e",
        });
        setOthent(othentInstance);
      } catch (error) {
        console.error("Error initializing Othent:", error);
      }
    };
    initOthent();
  }, []);

  return othent;
};

export { useOthent };
