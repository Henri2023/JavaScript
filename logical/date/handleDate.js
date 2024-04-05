// - TimeStempToString(timeStemp)

console.log(
  TimeStempToString(1625014800000)
);

function TimeStempToString(timeStemp) {
  // Input: timeStemp (int)
  // Output "%Y-%m-%d %H:%M:%S"
  var date = new Date(timeStemp);

  string =  date.toLocaleString('pt-BR', { timeZone: 'America/Recife'});
  string = string.replace(/\//g, '-');

  return string;
};