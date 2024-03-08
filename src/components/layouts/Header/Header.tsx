"use client";

import style from "./Header.module.scss";
import {
  Affix,
  Row,
  Col,
  Typography,
  Button,
  Input,
  Select,
  Space,
  Avatar,
} from "antd";
import cx from "classnames";
import { useRouter } from "next/navigation";
import { MouseEvent, memo, useEffect, useState } from "react";
import Icon, {
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
  DownCircleOutlined,
  HeartOutlined,
  DownCircleTwoTone,
  SwapLeftOutlined,
} from "@ant-design/icons";
import SidebarMenuPage from "../SideBarMenu/SidebarMenu";

interface HeaderProps {
  isLoggedIn: boolean;
}

const HeaderPage = () => {
  const router = useRouter();

  return (
    <>
      <Affix>
        <div className={cx(style.root)}>
          <div className="header">
            <Row style={{ height: "100%" }}>
              <Col span={4}>
                <Typography.Text className="header__title">
                  Dask
                  <span className="header__title--1">Stack</span>
                </Typography.Text>
              </Col>
              <Col span={16}>
                <div className="header__control">
                  <div className="header__menu-search">
                    <Button
                      className="header__menu"
                      type="text"
                      icon={<MenuOutlined />}
                      size={"middle"}
                    />
                    <Input
                      className="header__search"
                      size="middle"
                      placeholder="Search"
                      prefix={
                        <SearchOutlined className="header__search--icon" />
                      }
                    />
                  </div>
                  <div className="header__notify-langue">
                    <HeartOutlined className="header__notify" />
                    <div className="header__langue">
                      <Select
                        className="header__langue--input"
                        suffixIcon={<DownCircleTwoTone />}
                        defaultValue="english"
                        menuItemSelectedIcon={<SwapLeftOutlined />}
                        // onChange={handleChange}
                        options={[
                          {
                            value: "english",
                            label: "english",
                          },
                          { value: "vietnamese", label: "vietnamese" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={4}>
                <div className="header__user">
                  <Avatar size="large" icon={<UserOutlined />} />
                  <div className="header__user--info">
                    <Typography.Text
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Moni Roy
                    </Typography.Text>
                    <Typography.Text style={{ fontSize: "12px" }}>
                      Admin
                    </Typography.Text>
                  </div>
                  <DownCircleOutlined />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <SidebarMenuPage/>
              </Col>
            </Row>
          </div>
        </div>
      </Affix>
    </>
  );
};

export default memo(HeaderPage);
