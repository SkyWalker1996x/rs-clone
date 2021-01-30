export default function convertMsToDate (millisec: number) {
    let year: any = new Date(millisec).getFullYear()
    let day: any = new Date(millisec).getDay()
    let month: any = new Date(millisec).getMonth() + 1
    let hour: any = new Date(millisec).getHours()
    let minutes: any = new Date(millisec).getMinutes()
    let seconds: any = new Date(millisec).getSeconds()
    return `${day}.${month}.${year} - ${hour}:${minutes}:${seconds}`
}