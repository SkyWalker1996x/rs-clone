import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../interfaces/Store";
import {
  toPageInfo,
  toSentenceText,
  transformTasksForTable,
} from "../../utils/tasksTransformUtils";
import NotFoundPage from "../NotFoundPage";
import "./styles.css";
import { Card } from "antd";

const TaskPage = ({ number }: any) => {
  const tasks = useSelector((state: State) => state.tasks);
  const pageTask = transformTasksForTable(tasks).find(
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
        </Card>
      </div>
    </div>
  );
};

export default TaskPage;
