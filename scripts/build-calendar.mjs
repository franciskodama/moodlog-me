import fs from 'fs'

// import { getHolidays } from "../app/lib/calendar"

//  const getHolidays = async () => {
//     const calendar = await fetch(
//       `https://calendarific.com/api/v2/holidays?api_key=${process.env.NEXT_PUBLIC_CALENDARIFIC_KEY}&country=US&year=2019`
//     ).then((res) => res.json());
//     return calendar;
//   };

  // const holidays = await getHolidays()
  // console.log(holidays)

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const isWeekend = dayOfWeek => dayOfWeek === 0 || dayOfWeek === 6; 

const buildCalendar = () => {
  const year = [];

  for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    const monthName = months[monthIndex];
    const daysInMonth = new Date(2023, monthIndex + 1, 0).getDate(); 
    for (let dayIndex = 1; dayIndex <= daysInMonth; dayIndex++) {
      const date = new Date(2023, monthIndex, dayIndex);
      const day = {
        id: (monthIndex * daysInMonth) + (dayIndex - 1),
        monthDay: dayIndex,
        weekDay: weekdays[date.getDay()],
        month: monthName,
        weekend: isWeekend(date.getDay()),
        // holiday: getHolidays(),
      };
      year.push(day);
    }
  }
  return year;
}

const yearCalendar = buildCalendar();
const jsonData = JSON.stringify(yearCalendar, null, 2); 
fs.writeFile('./lib/calendar.json', jsonData, err => {
  if (err) {
    console.error('Error writing JSON file:', err);
  } else {
    console.log('JSON file created successfully.');
  }
});
