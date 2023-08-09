export const getHolidays = async () => {
    const calendar = await fetch(
      `https://calendarific.com/api/v2/holidays?api_key=${process.env.NEXT_PUBLIC_CALENDARIFIC_KEY}&country=US&year=2019`
    ).then((res) => res.json());
  
    return calendar;
  };
  