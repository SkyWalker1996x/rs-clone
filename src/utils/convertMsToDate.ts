export default function convertMsToDate (millisec: number) {
    let year = new Date(millisec).getFullYear()
    let day = new Date(millisec).getDay()
    let month = new Date(millisec).getMonth() + 1
    let hour = new Date(millisec).getHours()
    let minutes = new Date(millisec).getMinutes()
    let seconds = new Date(millisec).getSeconds()
    return `${day}.${month}.${year} - ${hour}:${minutes}:${seconds}`
}