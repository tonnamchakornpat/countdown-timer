const Second = 1000;
const Minute = Second * 60;
const Hour = Minute * 60;
const Day = Hour * 24;

export const getCountdown = () => {
  const now = new Date().getTime();
  const nowYear = new Date().getFullYear();
  const newYear = new Date(`December 31, ${nowYear} 23:59:59`).getTime();
  const unixTimeLeft = newYear - now;

  const timeData = {
    Days: Math.floor(unixTimeLeft / Day).toString(),
    Hours: Math.floor((unixTimeLeft % Day) / Hour).toString(),
    Minutes: Math.floor((unixTimeLeft % Hour) / Minute).toString(),
    Seconds: Math.floor((unixTimeLeft % Minute) / Second).toString(),
  };

  return timeData;
};
