import React from "react";
import MainWrapper from "../Wrappers/MainWrapper";
import { transformTasksForTable } from "../../utils/tasksTransformUtils";

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { deleteTask } from '../../store/actions/tasksActions';

import { Button, Table, Space } from "antd";



const TableTimer: React.FC = () => {
  const tasks = useSelector((state: RootStateOrAny) => state.tasks);
  const initialTasks = transformTasksForTable(tasks);
  const dispatch = useDispatch();

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
          <Button type="primary" onClick={(e: any) => {
            const number = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.textContent[0];
            dispatch(deleteTask(tasks[number - 1].id));
            }
            }>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <MainWrapper>
      <Table dataSource={initialTasks} columns={columns} />;
    </MainWrapper>
  );
};

export default TableTimer;
