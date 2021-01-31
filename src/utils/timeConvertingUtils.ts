export const toDecimal = (number: number) => {
    const strNumber = number.toString();
    if (strNumber.length > 1) {
        return strNumber;
    } else {
        return `0${strNumber}`;
    }
}

export const convertMsToDate = (millisec: number) => {
    const date = new Date(millisec);
    const hours = toDecimal(date.getHours());
    const minutes = toDecimal(date.getMinutes());
    const seconds = toDecimal(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
}

export const convertMsToTime = (millisec: number) => {
    const hours = toDecimal(Math.floor(millisec / 3600000));
    const minutes = toDecimal(Math.floor(millisec / 60000) % 60);
    const seconds = toDecimal(Math.floor(millisec / 1000) % 60);

    return `${hours}:${minutes}:${seconds}`;
}

