const moment = require('moment');

const argentinaHolidays = [
  { date: '2023-01-01', title: 'New Year\'s Day' },
  { date: '2023-02-20', title: 'Carnival Monday' },
  { date: '2023-02-21', title: 'Carnival Tuesday' },
  { date: '2023-03-24', title: 'Day of Remembrance for Truth and Justice' },
  // Add other holidays here
];

function addArgentinaHolidays(events) {
  argentinaHolidays.forEach(holiday => {
    if (!events.find(event => event.date === holiday.date)) {
      events.push(holiday);
    }
  });
}

function calculateCourseEndDate(startDate, numberOfClasses, events) {
  const courseStart = moment(startDate);
  const holidays = events.map(event => event.date);

  let classesHeld = 0;
  let currentDate = courseStart.clone();

  while (classesHeld < numberOfClasses) {
    const dayOfWeek = currentDate.day();
    const isHoliday = holidays.includes(currentDate.format('YYYY-MM-DD'));

    if (dayOfWeek !== 0 && dayOfWeek !== 6 && !isHoliday) {
      classesHeld++;
    }

    if (classesHeld < numberOfClasses) {
      currentDate.add(1, 'days');
    }
  }

  return currentDate.format('YYYY-MM-DD');
}

module.exports = {
  addArgentinaHolidays,
  calculateCourseEndDate,
};
