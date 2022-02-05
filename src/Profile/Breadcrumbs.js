import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export default function Breadcrumbs() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item>Company</Breadcrumb.Item>
      <Breadcrumb.Item>Account</Breadcrumb.Item>
    </Breadcrumb>
  );
}
