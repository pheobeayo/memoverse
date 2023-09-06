import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="hidden sm:flex text-bold font-medium  space-x-20 text-white px-20 py-10 ">
      
      <Link to="/">
        <button className="">Home</button>
      </Link>

      <Link to="/explore">
        <button>Explore</button>
      </Link>

      <Link to="/about-us">
        <button>About us</button>
      </Link>

      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
      <Link to="/SignIn">
        <div className="flex">
          <button className=" bg-gradient-to-r from-orange-400 px-10 py-2.5  to-orange-400 text-white rounded-sm text-center mx-24">
            Connect Wallet
          </button>
        </div>
      </Link>
     
    </div>
  );
}
