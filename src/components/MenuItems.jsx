import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems({ setInputValue }) {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/nftMarket" onClick={() => setInputValue("explore")}>
        <NavLink to="/nftBalance">Explore</NavLink>
      </Menu.Item>
      <Menu.Item key="/collection">
        <NavLink to="/collection">Your Collection</NavLink>
      </Menu.Item>
      <Menu.Item key="/transactions">
        <NavLink to="/transactions">Transaction</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
