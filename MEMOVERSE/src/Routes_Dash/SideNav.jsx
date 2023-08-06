import { Sidebar, sidebarClasses, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideNav() {
  //menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  //custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <Sidebar
      collapsed={menuCollapse}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "red",
        },
      }}
    >
      <Menu>
        <MenuItem active component={<Link to="home" />}>
          <h1>Home</h1>
        </MenuItem>

        <MenuItem active component={<Link to="profile" />}>
          <h1>Home2</h1>
        </MenuItem>

        <MenuItem active component={<Link to="Explore" />}>
          <h1>Home3</h1>
        </MenuItem>

        <MenuItem active>
          <h1>Home4</h1>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
