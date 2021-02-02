import {convertMsToDate, convertMsToTime} from './timeConvertingUtils';
import { Tasks } from '../interfaces/Store';

export const transformTasksForTable = (tasks: any) => {
    return tasks.map((task: any, index: number) => {
        return {
            key: index,
            number: index + 1,
            ...task,
            timeStart: convertMsToDate(task.timeStart),
            timeEnd: convertMsToDate(task.timeEnd),
            timeSpend: convertMsToTime(task.timeSpend)
        }
    })
}

export const extractTimeChart = (tasks: Tasks) => {
    const timesChartData = Array.from({ length: 24 }, (value, key) => {
      return {
        name: key.toString(),
        spendMinutes: 0,
      };
    });
  
    tasks.forEach((task) => {
      const { timeStart, timeEnd, timeSpend } = task;
      const taskHourStart = new Date(timeStart).getHours();
      const taskMinutesStart = new Date(timeStart).getMinutes();
      const taskHourEnd = new Date(timeEnd).getHours();
      const taskMinutesEnd = new Date(timeEnd).getMinutes();
      const differenceHours = taskHourEnd - taskHourStart;
  
      timesChartData.forEach((item) => {
        const { name, spendMinutes } = item;
  
        switch (differenceHours) {
          case 0:
            if (taskHourStart === +name) {
              timesChartData[+name] = {
                name,
                spendMinutes: spendMinutes + Math.floor(timeSpend / 1000 / 60),
              };
            }
            return;
  
          case 1:
            if (taskHourStart === +name) {
              timesChartData[+name] = {
                name,
                spendMinutes: spendMinutes + (60 - taskMinutesStart),
              };
            }
  
            if (taskHourEnd === +name) {
              timesChartData[+name] = {
                name,
                spendMinutes: spendMinutes + taskMinutesEnd,
              };
            }
            return;
  
          case 2:
            if (taskHourStart === +name) {
              timesChartData[+name] = {
                name,
                spendMinutes: spendMinutes + (60 - taskMinutesStart),
              };
            }
  
            if (taskHourStart + 1 === +name) {
              timesChartData[+name] = {
                name,
                spendMinutes: 60,
              };
            }
  
            if (taskHourEnd === +name) {
              timesChartData[+name] = {
                name,
                spendMinutes: spendMinutes + taskMinutesEnd,
              };
            }
            return;
        }
      });
    });
  
    return timesChartData;
  };