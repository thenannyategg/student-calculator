const { addArgentinaHolidays, calculateCourseEndDate } = require('./calendarUtils.js');

document.getElementById('course-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const startDate = document.getElementById('start-date').value;
  const numberOfClasses = document.getElementById('number-of-classes').value;

  const events = [];
  addArgentinaHolidays(events);

  const endDate = calculateCourseEndDate(startDate, numberOfClasses, events);

  document.getElementById('result-start-date').innerText = startDate;
  document.getElementById('result-end-date').innerText = endDate;
  document.getElementById('result').classList.remove('hidden');
});
