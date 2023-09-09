export const getWeather = async () => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`
  ).then((res) => res.json());
  return response;
};
