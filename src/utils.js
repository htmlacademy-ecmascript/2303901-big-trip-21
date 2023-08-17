

// eslint-disable-next-line no-undef
const dayjs = require('dayjs');
const maxHour = 23;
const maxMinute = 59;
const maxDaysInMonth = 31;

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInteger(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function getRandomTime(maxHours, maxMinutes) {
  const randomHour = getRandomInteger(maxHours);
  const randomMinute = getRandomInteger(maxMinutes);
  return { hour: randomHour, minute: randomMinute };
}

function adjustEndTime(startTime, endTime) {
  if (startTime.hour === endTime.hour && startTime.minute >= endTime.minute) {
    endTime.hour = (endTime.hour + 1) % 24;
  }
}

function generateRandomDate() {
  const randomMonth = getRandomInteger(12) + 1;
  const randomDay = getRandomInteger(maxDaysInMonth) + 1;
  const startToTime = getRandomTime(maxHour, maxMinute);
  const endToTime = getRandomTime(maxHour, maxMinute);
  const startToDate = dayjs(`2019-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}T${startToTime.hour.toString().padStart(2, '0')}:${startToTime.minute.toString().padStart(2, '0')}:56.845Z`);
  const endToDate = dayjs(`2019-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}T${endToTime.hour.toString().padStart(2, '0')}:${endToTime.minute.toString().padStart(2, '0')}:56.845Z`);

  adjustEndTime(startToTime, endToTime);

  return { startDate: startToDate, endDate: endToDate };
}

function getDescriptionDate(date1, date2) {
  const diffInMinutes = date2.diff(date1, 'minute');

  if (diffInMinutes === 0) {
    return {
      monthAndDay: getMonthAndDayInEnglish(date1),
      timeStart: getTime(date1),
      timeEnd: getTime(date2),
      timeDifference: '0M'
    };
  }

  const absDiffInMinutes = Math.abs(diffInMinutes);
  let timeDifference;

  if (absDiffInMinutes < 60) {
    timeDifference = `${absDiffInMinutes.toString().padStart(2, '0')}M`;
  } else if (absDiffInMinutes < 1440) {
    const hours = Math.floor(absDiffInMinutes / 60);
    const minutes = absDiffInMinutes % 60;
    timeDifference = `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  } else {
    const days = Math.floor(absDiffInMinutes / 1440);
    const hours = Math.floor((absDiffInMinutes % 1440) / 60);
    const minutes = absDiffInMinutes % 60;

    const formattedDays = days > 0 ? `${days}D ` : '';
    const formattedHours = hours > 0 ? `${hours.toString().padStart(2, '0')}H ` : '';
    const formattedMinutes = minutes > 0 ? `${minutes.toString().padStart(2, '0')}M` : '';

    timeDifference = formattedDays + formattedHours + formattedMinutes;
  }

  return {
    monthAndDay: getMonthAndDayInEnglish(date1),
    timeStart: getTime(date1),
    timeEnd: getTime(date2),
    timeDifference
  };
}

function getMonthAndDayInEnglish(date) {
  return date.format('MMM DD').toUpperCase();
}

function getTime(startDates) {
  return startDates.format('HH:mm');
}

function generateAndPrintRandomDescription() {
  const { startDate, endDate } = generateRandomDate();
  const result = getDescriptionDate(startDate, endDate);

  return result;
}

export { getRandomArrayElement, getRandomInteger, generateRandomDate, generateAndPrintRandomDescription };
