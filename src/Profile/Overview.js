import React from "react";
import { Statistic, Row, Col, Card } from "antd";
import { LikeOutlined } from "@ant-design/icons";

export default function Overview() {
  return (
    <div>
      <Card title="Features usage">
        <Row gutter={16}>
          <Col>
            <Statistic title="Account" value={10} prefix={<LikeOutlined />} />
          </Col>
          <Col>
            <Statistic title="Boards" value={5} />
          </Col>
          <Col>
            <Statistic title="Views" value={0} />
          </Col>
          <Col>
            <Statistic title="Communication" value={0} />
          </Col>
          <Col>
            <Statistic title="Advanced" value={0} />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
