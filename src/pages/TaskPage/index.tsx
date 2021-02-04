import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../interfaces/Store";
import { Link } from "react-router-dom";
import {
  toPageInfo,
  toSentenceText,
  transformTasksForPageInfo,
} from "../../utils/tasksTransformUtils";
import NotFoundPage from "../NotFoundPage";
import "./styles.css";
import { Button, Card } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const TaskPage = ({ number }: any) => {
  const tasks = useSelector((state: State) => state.tasks);
  const pageTask = transformTasksForPageInfo(tasks).find(
    (item) => item.number === +number
  );

  if (!pageTask) {
    return <NotFoundPage />;
  }

  return (
    <div className="wrapper">
      <div className="site-card-wrapper">
        <Card title="Task Info:" bordered={true}>
          {Object.keys(toPageInfo(pageTask)).map((field, index) => {
            return (
              <p key={index}>
                {toSentenceText(field)}: {pageTask[field]}
              </p>
            );
          })}
          <Link to="/">
            <Button type="primary" icon={<ArrowLeftOutlined />}>
              To main
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default TaskPage;
