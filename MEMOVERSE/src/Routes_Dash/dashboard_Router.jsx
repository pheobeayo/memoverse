import Dash_Home from "../Container/Dash_Home";
import Explore from "../Container/Explore";
import Profile from "../Container/Profile";
import Post from "../Container/Your_Post";
import { Route, Routes } from "react-router";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dash_Home />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Explore" element={<Explore />}></Route>
            <Route path="/Post" element={<Post />}></Route>
        </Routes>
    )
}

