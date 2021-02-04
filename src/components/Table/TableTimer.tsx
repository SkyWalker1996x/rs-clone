import React, { useState } from "react";
import Highlighter from "react-highlight-words";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// components
import MainWrapper from "../Wrappers/MainWrapper";
import { transformTasksForTable } from "../../utils/tasksTransformUtils";
// antd
import { Button, Table, Space, Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// redux
import { deleteTask } from "../../store/actions/tasksActions";
import { State } from "../../interfaces/Store";
import {
  convertMsToDate,
  convertMsToTime,
} from "../../utils/timeConvertingUtils";
import {TaskForTable} from "../../interfaces/Utils";

const TableTimer: React.FC = () => {
  const tasks = useSelector((state: State) => state.tasks);
  const initialTasks = transformTasksForTable(tasks);
  const dispatch = useDispatch();
  const history = useHistory();

  const [search, setSearch] = useState({
    searchText: "",
    searchedColumn: "",
  });
  const { searchText, searchedColumn } = search;

  const handleSearch = (
      selectedKeys: string,
      confirm: any,
      dataIndex: string
  ) => {
    confirm();
    setSearch({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    setSearch((prevState: { searchText: string; searchedColumn: string }) => {
      return {
        ...prevState,
        searchText: "",
      };
    });
  };
  let searchInput: any;
  const getColumnSearchProps = (dataIndex: any) => ({
    // eslint-disable-next-line
    filterDropdown: ({
                       setSelectedKeys,
                       selectedKeys,
                       confirm,
                       clearFilters,
                     }: any) => (
        <div style={{ padding: 8 }}>
          <Input
              ref={(node) => {
                searchInput = node;
              }}
              placeholder={`Search task name`}
              value={selectedKeys[0]}
              onChange={(e) =>
                  setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: "block" }}
              key={`SearchInput${dataIndex}`}
          />
          <Space>
            <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
                key="SearchInputButtonSearch"
            >
              Search
            </Button>
            <Button
                key="SearchInputButtonReset"
                onClick={() => handleReset(clearFilters)}
                size="small"
                style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
    ),
    // eslint-disable-next-line
    filterIcon: (filtered: any) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value: any, record: any) =>
        record[dataIndex]
            ? record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase())
            : "",
    // eslint-disable-next-line
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text: any) =>
        searchedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text ? text.toString() : ""}
            />
        ) : (
            text
        ),
  });

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
      ...getColumnSearchProps("taskName"),
    },
    {
      title: "Time start",
      dataIndex: "timeStart",
      key: "timeStart",
      sorter: (a: TaskForTable, b: TaskForTable) => a.timeStart - b.timeStart,
      sortDirections: ["descend", "ascend"],
      render: (props: number) => {
        return <Typography.Text>{convertMsToDate(props)}</Typography.Text>;
      },
    },
    {
      title: "Time end",
      dataIndex: "timeEnd",
      key: "timeEnd",
      sorter: (a: any, b: any) => a.timeEnd - b.timeEnd,
      sortDirections: ["descend", "ascend"],
      render: (props: number) => {
        return <Typography.Text>{convertMsToDate(props)}</Typography.Text>;
      },
    },
    {
      title: "Time spend",
      dataIndex: "timeSpend",
      key: "timeSpend",
      sorter: (a: any, b: any) => a.timeSpend - b.timeSpend,
      sortDirections: ["descend", "ascend"],
      render: (props: number) => {
        return <Typography.Text>{convertMsToTime(props)}</Typography.Text>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (props: any) => {
        return (
            <Space size="middle">
              <Button
                  type="primary"
                  onClick={() => {
                    history.push(`/task/${props.number}`);
                  }}
              >
                Info
              </Button>
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
            // @ts-ignore
            columns={columns}
            pagination={{ pageSize: 5 }}
        />
      </MainWrapper>
  );
};

export default TableTimer;
