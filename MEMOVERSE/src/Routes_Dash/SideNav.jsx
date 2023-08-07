import { Sidebar, sidebarClasses, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { PiToolboxBold } from "react-icons/pi";
import { BiBox } from "react-icons/bi";
import { LiaChartPieSolid } from "react-icons/lia";
import { FiSettings } from "react-icons/fi";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(false);
  const [collapse, setCollapse] = useState(false);
  

  const toggleMenu = () => {
    setCollapse(!collapse);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setCollapse(window.innerWidth < 400);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function once to initialize the state
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
      
      <Sidebar
      collapsed={collapse}
      className=""
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#251206",
          },
        }}
      >
        <div className="md:hidden pl-[23px] text-white ">
          <button className="text-dark" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        <Menu>
          <div className="py-[60px] pl-[23px] hidden md:grid">
            <img src="src/assets/images/MEMOVERSE (1).png" alt="logo" />
          </div>

       

          <MenuItem active component={<Link to="home" />}>
            <div className="flex space-x-2">
              <AiOutlineHome
                size={20}
                style={{ color: "white", opacity: 0.7 }}
              />
              <h1  className=" hidden md:grid text-white text-opacity-70">Home</h1>
            </div>
          </MenuItem>

          <MenuItem active component={<Link to="profile" />}>
            <div className="flex space-x-2">
              <RxPerson size={20} style={{ color: "white", opacity: 0.7 }} />
              <h1 className="hidden md:grid text-white text-opacity-70">Profile</h1>
            </div>
          </MenuItem>

          <MenuItem active component={<Link to="Explore" />}>
            <div className="flex space-x-2">
              <PiToolboxBold
                size={20}
                style={{ color: "white", opacity: 0.7 }}
              />
              <h1 className="hidden md:grid text-white text-opacity-70">Explore</h1>
            </div>
          </MenuItem>

          <MenuItem active>
            <div className="flex space-x-2">
              <BiBox size={20} style={{ color: "white", opacity: 0.7 }} />
              <h1 className="hidden md:grid text-white text-opacity-70">Your Posts</h1>
            </div>
          </MenuItem>

          <MenuItem active>
            <div className="flex space-x-2">
              <LiaChartPieSolid
                size={20}
                style={{ color: "white", opacity: 0.7 }}
              />
              <h1 className="hidden md:grid text-white text-opacity-70">Activities</h1>
            </div>
          </MenuItem>

          <div
            className="py-[50px] pl-[23px]
         text-white text-opacity-70 text-xl hidden md:grid font-bold leading-relaxed"
          >
            <h4>SETTINGS</h4>
          </div>

          <MenuItem active>
            <div className="flex space-x-2">
              <FiSettings size={20} style={{ color: "white", opacity: 0.7 }} />
              <h1 className=" hidden md:grid text-white text-opacity-70">Profile</h1>
            </div>
          </MenuItem>

          <MenuItem active>
            <div className="flex space-x-2">
              <FiSettings size={20} style={{ color: "white", opacity: 0.7 }} />
              <h1 className="hidden md:grid  text-white text-opacity-70">Post</h1>
            </div>
          </MenuItem>

          <MenuItem active>
            <div className="flex space-x-2">
              <FiSettings size={20} style={{ color: "white", opacity: 0.7 }} />
              <h1 className="hidden md:grid text-white text-opacity-70">Photo Album</h1>
            </div>
          </MenuItem>

          <div className="hidden md:grid py-[60px] mb-[100px] px-[20px] w-[200px] h-[200px] cursor-pointer">
            <img src="src/assets/images/Help.jpeg" alt="helpCenter" />
          </div>
        </Menu>
      </Sidebar>
    </>
  );
}
