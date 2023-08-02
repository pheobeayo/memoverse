import { useState, createContext } from "react";
import PropTypes from "prop-types";



export const BlogContext = createContext();


export function BlogProvider(props) {

  const [user, setUser] = useState(null);


  return (
    <div>
      <BlogContext.Provider
        value={{
          user,
          setUser
        }}
      >
        {props.children}
      </BlogContext.Provider>
    </div>
  );
}

BlogProvider.propTypes = {
    children: PropTypes.node.isRequired, 
  };
  