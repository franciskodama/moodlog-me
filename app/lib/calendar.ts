export const getHolidays = async () => {
  const calendar = await fetch(
    `https://calendarific.com/api/v2/holidays?api_key=${process.env.NEXT_PUBLIC_CALENDARIFIC_KEY}&country=US&year=2023`
  ).then((res) => res.json());
  return calendar;
};

export const year2023 = [
  { monthName: 'January', days: 31, firstDayOfWeek: 'Sunday' },
  { monthName: 'February', days: 28, firstDayOfWeek: 'Wednesday' },
  { monthName: 'March', days: 31, firstDayOfWeek: 'Wednesday' },
  { monthName: 'April', days: 30, firstDayOfWeek: 'Saturday' },
  { monthName: 'May', days: 31, firstDayOfWeek: 'Monday' },
  { monthName: 'June', days: 30, firstDayOfWeek: 'Friday' },
  { monthName: 'July', days: 31, firstDayOfWeek: 'Sunday' },
  { monthName: 'August', days: 31, firstDayOfWeek: 'Wednesday' },
  { monthName: 'September', days: 30, firstDayOfWeek: 'Saturday' },
  { monthName: 'October', days: 31, firstDayOfWeek: 'Monday' },
  { monthName: 'November', days: 30, firstDayOfWeek: 'Thursday' },
  { monthName: 'December', days: 31, firstDayOfWeek: 'Saturday' },
];

// type DayObject = {
//   id: number;
//   weekDay: string;
//   month: string;
//   weekend: boolean;
//   holiday: object;
// };

// export const setCache = async (key: string, value: string) =>
//   fetch(`${process.env.REDIS_REST_URL}/set/${key}`, {
//     method: "POST",
//     body: value,
//     headers: { Authorization: `Bearer ${process.env.REDIS_REST_TOKEN}` },
//   }).then((response) => response.json());

// {
//   name: 'World Tuberculosis Day',
//   description: 'World Tuberculosis Day is annually held on March 24 to raise awareness of tuberculosis and ways to eradicate the disease.',
//   country: { id: 'us', name: 'United States' },
//   date: { iso: '2019-03-24', datetime: [Object] },
//   type: [ 'United Nations observance' ],
//   primary_type: 'United Nations observance',
//   canonical_url: 'https://calendarific.com/holiday/un/world-tuberculosis-day',
//   urlid: 'un/world-tuberculosis-day',
//   locations: 'All',
//   states: 'All'
// },
