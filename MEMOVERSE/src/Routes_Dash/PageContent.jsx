import { Outlet, useNavigate } from "react-router";
import SideNav from "./SideNav";
import { useEffect } from "react";


function PageContent() {
  const  navigate = useNavigate();

  useEffect(() => {
    navigate ('/dashboard/home');

  }, [navigate]);
  
  return (
    <div className="PageContent flex">
      <SideNav />
      <Outlet />
    </div>
  );
}
export default PageContent;