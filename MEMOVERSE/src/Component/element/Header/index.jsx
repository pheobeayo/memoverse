import { Link } from "react-router-dom";
import { gradientStyle } from "../GradientStyle";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="">
      <nav className="sm:grid sm:grid-cols-2">
        <div style={gradientStyle}>
          <div
            className="sm:container
        sm:mx-auto  pt-[60px] pb-[20px] sm:pb-[0] sm:pt-[60px]"
          >
            <div className=" sm:pl-[80px] flex justify-between container mx-auto px-8">
              <img
                className="w-[126px] h-[26px]"
                alt="logo"
                src="src/assets/images/MEMOVERSE (2).png"
              />

              <div className="hidden sm:flex  text-stone-950 text-lg font-semibold  space-x-4">
                <Link to="/">
                  <button className="">Home</button>
                </Link>

                <Link to="/">
                  <button>Explore</button>
                </Link>

                <Link to="/">
                  <button>About us</button>
                </Link>

                <Link to="/">
                  <button>Dashboard</button>
                </Link>
              </div>

              <div className="md:hidden mb-4 ">
                <button className="text-dark" onClick={toggleMenu}>
                  {isOpen ? (
                    <FaTimes className="text-2xl" />
                  ) : (
                    <FaBars className="text-2xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid bg-stone-950 ">
          <div
            className=" sm:container
        mx-auto p-[60px]"
          >
            <div className="hidden sm:grid justify-items-end">
              <Link to="/SignIn">
                <button
                  className="bg-gradient-to-r from-orange-400 px-5 py-2.5 
                  to-orange-400 text-white rounded-sm text-center"
                >
                  SignIn
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed z-20 top-0 bg-stone-950
         right-0 bottom-0 left-0 flex flex-col 
         items-center gap-6 justify-center"
        >
          <button
            className="text-white absolute top-[60px] right-[40px]"
            onClick={toggleMenu}
          >
            <FaTimes className="text-2xl" />
          </button>

          <h3 className="text-white text-sm font-normal leading-none">
            <Link to="/">Home</Link>
          </h3>
          <h3 className="text-white text-sm font-normal leading-none">
            <Link to="/dashboard">Dashboard</Link>
          </h3>

          <Link to="/SignIn">
            <div className="flex">
              <button className=" bg-gradient-to-r from-orange-400 px-5 py-2.5  to-orange-400 text-white rounded-sm text-center ">
                SignIn
              </button>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}
