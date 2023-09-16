export const getWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`
  ).then((res) => res.json());
  return response;
};

// export const getWeather = async () => {
//   const response = await fetch(
//     `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`
//   ).then((res) => res.json());
//   return response;
// };

// useEffect(() => {
//   const getTemp = async () => {
//     try {
//       const response = await fetch(
//         `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`
//       );

//       if (!response) {
//         throw new Error('Failed to get temperature');
//       }
//       const result = await response.json();
//       setWeather(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getTemp();
// }, []);
