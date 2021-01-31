import React from "react";
import MainWrapper from "../Wrappers/MainWrapper";
import { transformTasksForTable } from "../../utils/tasksTransformUtils";

import { RootStateOrAny, useSelector } from "react-redux";

import { Button, Table, Space } from "antd";

const columns = [
  {
    title: "№",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Task",
    dataIndex: "taskName",
    key: "taskName",
  },
  {
    title: "Time start",
    dataIndex: "timeStart",
    key: "timeStart",
  },
  {
    title: "Time end",
    dataIndex: "timeEnd",
    key: "timeEnd",
  },
  {
    title: "Time spend",
    dataIndex: "timeSpend",
    key: "timeSpend",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button type="primary">Info</Button>
        <Button type="primary">Delete</Button>
      </Space>
    ),
  },
];

const TableTimer: React.FC = () => {
  const tasks = useSelector((state: RootStateOrAny) => state.tasks);
  const initialTasks = transformTasksForTable(tasks);

  return (
    <MainWrapper>
      <Table dataSource={initialTasks} columns={columns} />;
    </MainWrapper>
  );
};

export default TableTimer;
