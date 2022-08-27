import CountdownTimer from "./CountdownTimer";
export default function Time() {
  let days = 1;
  const dayAdd = days < 10 ? "0" + days : days;

  let hours = 3;
  const addZeroToHours = hours < 10 ? "0" + hours : hours;

  let minutes = 60;
  const addZeroToMinutes = minutes < 10 ? "0" + minutes : minutes;

  let sec = 60 * 1000;
  const addZeroToSeconds = sec < 10 ? "0" + sec : sec;

  const THREE_DAYS_IN_MS =
    dayAdd * addZeroToHours * addZeroToMinutes * addZeroToSeconds;

  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}
