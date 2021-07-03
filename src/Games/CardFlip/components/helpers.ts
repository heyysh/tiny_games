export const timerFormatter = (seconds: number): string => {
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;

  return (
    `${minute < 10 ? `0${minute}` : minute} : ${second < 10 ? `0${second}` : second}`
  );
}