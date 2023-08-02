import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
         <Route index element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
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