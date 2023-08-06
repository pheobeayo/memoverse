import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import Dash_Home from "./Container/Dash_Home";
import Profile from "./Container/Profile";
import PageContent from "./Routes_Dash/PageContent";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/dashboard" element={<PageContent />} >
            <Route path="home" element={<Dash_Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          
        </Route>
       
    
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <div className="">
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};



