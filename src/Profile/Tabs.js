import React from "react";
import { Tabs } from "antd";
import {
  DashboardOutlined,
  AndroidOutlined,
  DollarOutlined,
  TeamOutlined,
  ControlOutlined,
  TrophyOutlined,
  ExpandOutlined,
} from "@ant-design/icons";
import Admin from "./Admin";
import Overview from "./Overview";
import Users from "./Users";
const { TabPane } = Tabs;

export default function Container() {
  return (
    <Tabs defaultActiveKey="2">
      <TabPane
        tab={
          <span>
            <DashboardOutlined />
            Overview
          </span>
        }
        key="1"
      >
        <Overview />
      </TabPane>
      <TabPane
        tab={
          <span>
            <ExpandOutlined />
            Details
          </span>
        }
        key="7"
      >
        Tab 1
      </TabPane>
      <TabPane
        tab={
          <span>
            <TeamOutlined />
            Users
          </span>
        }
        key="2"
      >
        <Users/>
      </TabPane>
      <TabPane
        tab={
          <span>
            <DollarOutlined />
            Billing
          </span>
        }
        key="3"
      >
        Tab 2
      </TabPane>
      <TabPane
        tab={
          <span>
            <ControlOutlined />
            Admin
          </span>
        }
        key="4"
      >
        <Admin></Admin>
      </TabPane>
      <TabPane
        tab={
          <span>
            <TrophyOutlined />
            Sales
          </span>
        }
        key="5"
      >
        Tab 2
      </TabPane>
      <TabPane
        tab={
          <span>
            <AndroidOutlined />
            Marketing
          </span>
        }
        key="6"
      >
        Tab 2
      </TabPane>
    </Tabs>
  );
}
