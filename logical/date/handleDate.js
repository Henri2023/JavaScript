// - TimeStempToString(timeStemp, hour12, sepDate, sepTime)

console.log(
  TimeStempToString(1625014800000)
);

function TimeStempToString(
  timeStemp,
  hour12 = false,
  sepDate = '-',
  sepTime = ':'
) {
  // Input: timeStemp (int)
  // Output "%Y-%m-%d %H:%M:%S"

  const date = new Date(timeStemp);

  if (typeof hour12 === 'string') {
    hour12 = false;
  };

  const options = {
    timeZone: 'America/Recife',
    hour12: hour12
  };

  string =  date.toLocaleString('pt-BR', options);
  string = string.replace(/\//g, sepDate);
  string = string.replace(/:/g, sepTime);

  return string;
};