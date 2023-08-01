// export const setCache = async (key: string, value: string) =>
//   fetch(`${process.env.REDIS_REST_URL}/set/${key}`, {
//     method: "POST",
//     body: value,
//     headers: { Authorization: `Bearer ${process.env.REDIS_REST_TOKEN}` },
//   }).then((response) => response.json());

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const year2023 = [
  { name: 'January', days: 31, firstDayOfWeek: 'Sunday' },
  { name: 'February', days: 28, firstDayOfWeek: 'Wednesday' },
  { name: 'March', days: 31, firstDayOfWeek: 'Wednesday' },
  { name: 'April', days: 30, firstDayOfWeek: 'Saturday' },
  { name: 'May', days: 31, firstDayOfWeek: 'Monday' },
  { name: 'June', days: 30, firstDayOfWeek: 'Friday' },
  { name: 'July', days: 31, firstDayOfWeek: 'Sunday' },
  { name: 'August', days: 31, firstDayOfWeek: 'Wednesday' },
  { name: 'September', days: 30, firstDayOfWeek: 'Saturday' },
  { name: 'October', days: 31, firstDayOfWeek: 'Monday' },
  { name: 'November', days: 30, firstDayOfWeek: 'Thursday' },
  { name: 'December', days: 31, firstDayOfWeek: 'Saturday' },
];
