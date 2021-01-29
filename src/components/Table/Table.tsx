import React from "react";
import MainWrapper from "../Wrappers/MainWrapper";
import './Table.css';
import convertMsToDate from '../../utils/convertMsToDate';
import convertMsToTime from '../../utils/convertMsToTime';

import TaskItem from './TaskItem';
import  { RootStateOrAny, useSelector } from 'react-redux';




const Table: React.FC = () => {

    const tasks = useSelector((state: RootStateOrAny) => state.tasks);
    console.log(tasks);

    return (
        <MainWrapper>
            <div className='tasks-tabs'>
                <p className="tasks-tabs__item">TASKS LOG</p>
                <p className="tasks-tabs__item">TASKS CHART</p>
            </div>
            <div className="tasks-titles">
                <p className="tasks-titles__item">№</p>
                <p className="tasks-titles__item">Task</p>
                <p className="tasks-titles__item">Time start</p>
                <p className="tasks-titles__item">Time end</p>
                <p className="tasks-titles__item">Time spend</p>
                <p className="tasks-titles__item">Info</p>
                <p className="tasks-titles__item">Delete</p>
            </div>
            <ul className="tasks-list">
                  {/* {tasks.map(item => {
                   return <TaskItem id={item.id} taskName={item.taskName} timeStart={convertMsToDate(item.timeStart)} timeEnd={convertMsToDate(item.timeEnd)} timeSpend={convertMsToTime(item.timeSpend)} key={item.id}/>
                })} */}
            </ul>
        </MainWrapper>
    )
}

export default Table;