
//  const getHolidays = async () => {
//     const calendar = await fetch(
//       `https://calendarific.com/api/v2/holidays?api_key=${process.env.NEXT_PUBLIC_CALENDARIFIC_KEY}&country=US&year=2019`
//     ).then((res) => res.json());
//     return calendar;
//   };

//   const holidays = await getHolidays()
//   console.log(holidays)

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const isWeekend = dayOfWeek => dayOfWeek === 0 || dayOfWeek === 6; 

const buildCalendar = () => {
  const year = [];

  for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    const monthName = months[monthIndex];
    const daysInMonth = new Date(2023, monthIndex + 1, 0).getDate(); // Get the number of days in the month
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
// console.log(yearCalendar);


// import { weekDays, year2023 } from "../app/lib/calendar"

// export const year2023 = [
//   { monthName: 'January', days: 31, firstDayOfWeek: 'Sunday' },
//   { monthName: 'February', days: 28, firstDayOfWeek: 'Wednesday' },
//   { monthName: 'March', days: 31, firstDayOfWeek: 'Wednesday' },
//   { monthName: 'April', days: 30, firstDayOfWeek: 'Saturday' },
//   { monthName: 'May', days: 31, firstDayOfWeek: 'Monday' },
//   { monthName: 'June', days: 30, firstDayOfWeek: 'Friday' },
//   { monthName: 'July', days: 31, firstDayOfWeek: 'Sunday' },
//   { monthName: 'August', days: 31, firstDayOfWeek: 'Wednesday' },
//   { monthName: 'September', days: 30, firstDayOfWeek: 'Saturday' },
//   { monthName: 'October', days: 31, firstDayOfWeek: 'Monday' },
//   { monthName: 'November', days: 30, firstDayOfWeek: 'Thursday' },
//   { monthName: 'December', days: 31, firstDayOfWeek: 'Saturday' },
// ];

// const buildCalendar = () => {

//   let year = []
//   let currentMonth = []
//   let day = {}
//   let weekDayCount = 0

//   year2023.map(month => {
//   for (let i = 0; i <= month.days; i++ ) {
//     if(weekDayCount < 8) {
//       weekDayCount++ } else if (weekDayCount === 8) {
//         weekDayCount === 0
//       }

//     day = { 
//       id: i,
//       weekDay: weekDayCount,
//       month: month.monthName,
//       weekend: true,       // weekDay === 1 || weekDay === 7 ? true : false,
//       holiday: null
//     }
//     currentMonth.push(day)
//   }
//   year.push(currentMonth)
//   })
//  return year

// }

// console.log(buildCalendar())