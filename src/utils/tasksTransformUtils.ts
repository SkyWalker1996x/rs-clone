import {convertMsToDate, convertMsToTime} from './timeConvertingUtils';

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