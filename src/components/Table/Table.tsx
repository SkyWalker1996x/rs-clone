import React from "react";
import MainWrapper from "../Wrappers/MainWrapper";
import './Table.css';

import TaskItem from './TaskItem';
import { createStore } from 'redux'
import { tasksReducer } from "../../store/reducers/tasksReducer";

const store = createStore(tasksReducer);

function convertMsToTime (millisec: number) {
    let seconds: any = (millisec / 1000).toFixed(0);
    let minutes: any = Math.floor(seconds / 60);
    let hours: any = "";
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        hours = (hours >= 10) ? hours : "0" + hours;
        minutes = minutes - (hours * 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
    }

    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;

    if (hours !== "") {
        return hours + ":" + minutes + ":" + seconds;
    }

    return minutes + ":" + seconds;
}

function convertMsToDate (millisec: number) {
    let year = new Date(millisec).getFullYear()
    let day = new Date(millisec).getDay()
    let month = new Date(millisec).getMonth() + 1
    let hour = new Date(millisec).getHours()
    let minutes = new Date(millisec).getMinutes()
    let seconds = new Date(millisec).getSeconds()
    return `${day}.${month}.${year} - ${hour}:${minutes}:${seconds}`
}


const Table: React.FC = () => {
    console.log(store.getState());
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
                {store.getState().map(item => {
                   return <TaskItem id={item.id} taskName={item.taskName} timeStart={convertMsToDate(item.timeStart)} timeEnd={convertMsToDate(item.timeEnd)} timeSpend={convertMsToTime(item.timeSpend)} key={item.id}/>
                })}
            </ul>
        </MainWrapper>
    )
}

export default Table;