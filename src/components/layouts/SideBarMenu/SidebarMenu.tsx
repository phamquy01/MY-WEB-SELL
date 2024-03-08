"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    style: {
      fontWeight: "bold",
      padding: "25px 0 25px 60px",
    },
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Navigation One", "sub1", <MailOutlined />),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />),
  getItem("Navigation Three", "sub4", <SettingOutlined />),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const SidebarMenuPage: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={items}
    />
  );
};

export default SidebarMenuPage;
