import {convertMsToDate, convertMsToTime} from './timeConvertingUtils';

export const transformTasksForTable = (tasks: any) => {
    return tasks.map((task: any, index: number) => {
        return {
            number: index + 1,
            ...task,
            taskName: task.taskName,
            timeStart: convertMsToDate(task.timeStart),
            timeEnd: convertMsToDate(task.timeEnd),
            timeSpend: convertMsToTime(task.timeSpend)
        }
    })
}