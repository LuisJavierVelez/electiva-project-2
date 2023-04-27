import React, { useState } from "react";
import { Layout } from "antd";
import { MenuSider } from "../../components/MenuComponents/MenuSider/MenuSider";
import { MenuTop } from "../../components/MenuComponents/MenuTop/MenuTop";
import "./GeneralLayout.scss"
import { Logout } from "../../components/MenuComponents/Logout";

export const GeneralLayout = (props) => {
    const { children } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content} = Layout;
  
    return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout className="general-layout">
          <Header className="general-layout-header">
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
            <Logout className="general-layout-header-logout"></Logout>
          </Header>
          <Content className="general-layout-content">{children}</Content>
          
        </Layout>
      </Layout>
    );
  };