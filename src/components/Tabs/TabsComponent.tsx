import React from "react";
import TableTimer from '../Table/TableTimer'

import { Tabs } from "antd";

const { TabPane } = Tabs;

export const TabsComponent: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Tasks log" key="1">
        <TableTimer />
      </TabPane>
      <TabPane tab="Tasks chart" key="2">
        <h1> Task Chart</h1>
      </TabPane>
    </Tabs>
  );
};