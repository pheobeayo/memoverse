
import SideNav from "./SideNav";
import { useEffect } from "react";
import Footer from "../Component/element/Footer";
import { Outlet } from "react-router-dom";

function PageContent() {
  useEffect(() => {
    window.location.hash = "/dashboard/home";
  }, []);

  return (
    <>
      <div className="PageContent flex ">
       
        <SideNav />
        <div className="w-full bg-stone-900">
          <Outlet />
        </div>
      </div>
      <Footer />
     
    </>
  );
}
export default PageContent;
