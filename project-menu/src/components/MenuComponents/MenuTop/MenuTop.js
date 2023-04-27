import React from "react";
import { Button } from "antd";
import Logo from "../../../assets/png/pantro.png";
import "./MenuTop.scss"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
      <img className="menu-top__left__logo" src={Logo} alt="Logo" />
        <Button
          type="link"
          onClick={() => setMenuCollapsed(!menuCollapsed)}
          aria-label={menuCollapsed ? "Mostrar menú" : "Ocultar menú"}
        >
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        

      </div>
    </div>
  );
};
