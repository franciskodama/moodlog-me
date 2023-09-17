export const getWeather = async (city: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}&units=metric`
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMoon = async (city: string) => {
  const headers = new Headers({
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  });
  try {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${city}`,
      {
        method: 'GET',
        headers: headers,
      }
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.error(error);
  }
};
