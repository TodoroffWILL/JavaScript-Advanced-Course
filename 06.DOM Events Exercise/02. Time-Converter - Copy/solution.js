function attachEventsListeners() {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  const rations = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  document.getElementById('daysBtn').addEventListener('click', onConvert);
  document.getElementById('hoursBtn').addEventListener('click', onConvert);
  document.getElementById('minutesBtn').addEventListener('click', onConvert);
  document.getElementById('secondsBtn').addEventListener('click', onConvert);

  function convert(value, unit) {
    let days = value / rations[unit];

    return {
      days: days,
      hours: days * rations.hours,
      minutes: days * rations.minutes,
      seconds: days * rations.seconds,
    };
  }

  function onConvert(e) {
    let input = e.target.parentNode.querySelector('input[type="text"]');
    let time = convert(Number(input.value), input.id);
    daysElement.value = time.days;
    hoursElement.value = time.hours;
    minutesElement.value = time.minutes;
    secondsElement.value = time.seconds;
  }
}

