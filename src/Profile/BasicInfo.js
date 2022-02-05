import React from "react";
import { Descriptions, Radio, Button } from "antd";
import { Space, Card } from "antd";
import Breadcrumbs from "./Breadcrumbs";
import { Typography } from "antd";
import { Select } from "antd";
import flag from "country-code-emoji";

import { Tag, Input, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;
const { Title } = Typography;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default function BasicInfo({ profile }) {
  const {
    country,
    countryCode,
    name,
    localTime,
    timezone,
    currency,
    industry,
    cluster,
    arr,
    collection,
    slug,
    website,
  } = profile;
  return (
    <Space direction="vertical">
      <Breadcrumbs></Breadcrumbs>

      <Space>
        <Title>{name}</Title>
        <Tag>Tag 1</Tag>
        <Tag>
          <a href="https://github.com/ant-design/ant-design/issues/1862">
            Link
          </a>
        </Tag>
        <Tag closable>Tag 2</Tag>
        <Tag closable>Prevent Default</Tag>
      </Space>

      <Space align="start">
        <Descriptions title="Basic" column={1} size="small">
          <Descriptions.Item label="Country">
            {country} {countryCode ? flag(countryCode) : null}
          </Descriptions.Item>
          <Descriptions.Item label="Timezone">{timezone}</Descriptions.Item>
          <Descriptions.Item label="Local Time">{localTime}</Descriptions.Item>
          <Descriptions.Item label="Industry">{industry}</Descriptions.Item>
          <Descriptions.Item label="Cluster">{cluster}</Descriptions.Item>
          <Descriptions.Item label="Website">{website}</Descriptions.Item>
        </Descriptions>
        <Descriptions title="Billing" column={1} size="small">
          <Descriptions.Item label="ARR">{arr}</Descriptions.Item>
          <Descriptions.Item label="Collection">{collection}</Descriptions.Item>
          <Descriptions.Item label="Currency">{currency}</Descriptions.Item>
        </Descriptions>
        <Descriptions title="Technical" column={1} size="small">
          <Descriptions.Item label="Slug">{slug}</Descriptions.Item>
          <Descriptions.Item label="">{localTime}</Descriptions.Item>
          <Descriptions.Item label="Industry">{industry}</Descriptions.Item>
          <Descriptions.Item label="Cluster">{cluster}</Descriptions.Item>
        </Descriptions>
      </Space>
    </Space>
  );
}
