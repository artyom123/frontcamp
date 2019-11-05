export function addTimeZero(time) {
    const timeString = String(time);

    return timeString.length === 1 ? `0${timeString}` : timeString;
}

export function formatDate(date) {
    const dateFormat = new Date(date);
    const dateFormatFirstPath = `${dateFormat.getFullYear()}/${dateFormat.getMonth() + 1}/${dateFormat.getDate()}`;

    const dateFormatSecondPath = `${addTimeZero(dateFormat.getHours())}:${addTimeZero(dateFormat.getMinutes())}:${addTimeZero(dateFormat.getSeconds())}`;

    return `${dateFormatFirstPath} ${dateFormatSecondPath}`;
}
