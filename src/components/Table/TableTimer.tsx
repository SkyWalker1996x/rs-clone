import React from "react";
import MainWrapper from "../Wrappers/MainWrapper";
import { transformTasksForTable } from "../../utils/tasksTransformUtils";

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../store/actions/tasksActions";

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
      render: (props: any) => {
        return (
          <Space size="middle">
            <Button type="primary">Info</Button>
            <Button
              type="primary"
              onClick={() => {
                dispatch(deleteTask(props.id));
              }}
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <MainWrapper>
      <Table
        dataSource={initialTasks}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </MainWrapper>
  );
};

export default TableTimer;
