import React from "react";
import { Progress } from "antd";
import { Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Space, Button, Card } from "antd";
import { Tooltip } from "antd";
import { Typography } from "antd";
import { Descriptions, Radio } from "antd";

const { Title } = Typography;
export default function Products({ profile }) {
  const { planStart, planEnd } = profile;
  return (
    <Card
      title="Products"
      size="small"
      align="center"
      extra={
        <Space>
          <Badge status="success" text="Paying" />
          {/* <Badge status="default" text="Unused"/> */}
          <Badge status="processing" text="Trial" />
        </Space>
      }
    >
      <Space direction="vertical" size={32} align="center">
        <Space size="large">
          <Badge dot size="small" status="success">
            <Tooltip title="Work OS">
              <Avatar
                src="https://img.icons8.com/fluency/344/windows-10.png"
                size="large"
                shape="square"
                icon={<UserOutlined />}
              />
            </Tooltip>
          </Badge>
          <Badge dot status="default">
            <Avatar
              src="https://img.icons8.com/color/344/microsoft-excel-2019--v1.png"
              size="large"
              shape="square"
              icon={<UserOutlined />}
            />
          </Badge>
          <Badge dot color="blue" count="Trial">
            <Avatar
              src="https://img.icons8.com/color/344/microsoft-onenote-2019.png"
              size="large"
              shape="square"
              icon={<UserOutlined />}
            />
          </Badge>
          <Badge dot status="default">
            <Avatar
              src="https://img.icons8.com/color/344/microsoft-powerpoint-2019--v1.png"
              size="large"
              shape="square"
              icon={<UserOutlined />}
            />
          </Badge>
          <Badge dot status="default">
            <Avatar
              src="https://img.icons8.com/color/344/microsoft-word-2019--v2.png"
              size="large"
              shape="square"
              icon={<UserOutlined />}
            />
          </Badge>
        </Space>
        <Space size="large">
          <Progress
            type="circle"
            size="large"
            width={180}
            format={() => (
              <Title level={4}>
                Enterprise
                <br />
                100 users
              </Title>
            )}
            percent={70}
          />
          <Descriptions size="small" column={1} style={{ width: 160 }}>
            <Descriptions.Item label="Plan start">
              {planStart}
            </Descriptions.Item>
            <Descriptions.Item label="Plan end">{planEnd}</Descriptions.Item>
          </Descriptions>
        </Space>

        <Space align="center" size="large">
          <Badge dot status="default">
            <Avatar
              src="https://img.icons8.com/color/344/microsoft-sql-server.png"
              shape="square"
              icon={<UserOutlined />}
            />
          </Badge>
          <Badge dot status="default">
            <Avatar
              src="https://img.icons8.com/color/344/windows-logo.png"
              shape="square"
              icon={<UserOutlined />}
            />
          </Badge>
          <Badge dot status="default">
            <Avatar
              src="https://img.icons8.com/color/344/visual-studio-code-2019.png"
              shape="square"
              icon={<UserOutlined />}
            />
          </Badge>
          <Badge dot status="default">
            <Avatar
              src="https://img.icons8.com/color/344/microsoft-onedrive-2019.png"
              shape="square"
              icon={<UserOutlined />}
            />
          </Badge>
        </Space>
      </Space>
    </Card>
  );
}
