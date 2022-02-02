export const timeJumpDays = (days) => {
  const today = new Date().getTime();
  const newDate = today + 24 * 60 * 60 * 1000 * days;
  return new Date(newDate);
};

export const timeJumpDaysISO = (days) => {
  const today = new Date().getTime();
  const newDate = today + 24 * 60 * 60 * 1000 * days;
  return new Date(newDate).toISOString().substring(0, 10);
};

export function callAtMidnight(fun) {
  let night = new Date();
  night.setDate(new Date().getDate() + 1);
  night.setHours(0, 0, 0);
  let msToMidnight = night.getTime() - new Date().getTime();

  setTimeout(() => {
    fun();
    callAtMidnight();
  }, msToMidnight);
}
