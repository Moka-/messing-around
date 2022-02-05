import React from "react";
import { Timeline } from "antd";
import { Space, Card } from "antd";

export default function Container() {
  return (
    <Card title="Timeline" size="small">
      <Timeline>
        <Timeline.Item color="green">
          <p>Signed up</p>
          <p>Started work OS trial</p>
        </Timeline.Item>
        <Timeline.Item color="red">
          <p>Opened support ticket</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>Technical testing 1</p>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <p>Technical testing 1</p>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <p>Technical testing 1</p>
        </Timeline.Item>
      </Timeline>
    </Card>
  );
}
