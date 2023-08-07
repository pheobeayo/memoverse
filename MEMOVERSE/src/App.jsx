import {
  Outlet,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import "./index.css";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import Dash_Home from "./Container/Dash_Home";
import Profile from "./Container/Profile";
import Footer from "./Component/element/Footer";
import PageContent from "./Routes_Dash/PageContent";
import BlogPage from "./Pages/BlogPage";
import PhotoCreate from "./Pages/PhotoCreation";



export default function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route index element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/dashboard" element={<PageContent />}>
            <Route path="home" element={<Dash_Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/BlogCreate" element={<BlogPage />} />
          <Route path="/PhotoCreate" element={<PhotoCreate />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

const Root = () => {
  return (
    <div className="">
      <div className="main">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};