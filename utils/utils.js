export const timeJumpDays = (days) => {
    const today = new Date().getTime();
    const newDate = today + 24*60*60*1000 * days;
    return new Date(newDate)
}

export const timeJumpDaysISO = (days) => {
    const today = new Date().getTime();
    const newDate = today + 24*60*60*1000 * days;
    return new Date(newDate).toISOString().substring(0, 10);
}