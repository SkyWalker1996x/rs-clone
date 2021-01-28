import React from 'react';

import { Button } from 'antd';

type TaskItemProps = {
    id: any,
    taskName: string,
    timeStart: any,
    timeEnd: any,
    timeSpend: any
}

const TaskItem: React.FC<TaskItemProps> = ({ id, taskName, timeStart, timeEnd, timeSpend }) => {
    return (
    <li className="tasks-list__task">
        <p className="tasks-list__task__item">{ id }</p>
        <p className="tasks-list__task__item">{ taskName }</p>
        <p className="tasks-list__task__item">{ timeStart }</p>
        <p className="tasks-list__task__item">{ timeEnd }</p>
        <p className="tasks-list__task__item">{ timeSpend }</p>
        <p className="tasks-list__task__item">
            <Button type="primary">Info</Button>
        </p>
        <p className="tasks-list__task__item">
            <Button type="primary">Delete</Button>
        </p>
    </li>
    )
}

export default TaskItem;