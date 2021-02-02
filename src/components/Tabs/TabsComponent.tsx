import React from "react";
import TableTimer from "../Table/TableTimer";
import Chart from '../Chart/Chart';

import { Tabs } from "antd";

const { TabPane } = Tabs;

export const TabsComponent: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Tasks log" key="1">
        <TableTimer />
      </TabPane>
      <TabPane tab="Tasks chart" key="2">
        <Chart />
      </TabPane>
    </Tabs>
  );
};
