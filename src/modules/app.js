export default async function fetchWeather(userInput) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=1549ce32d008428de08b36ca2c4bf6ad`, { mode: 'cors' });
    if (!response.ok) throw new Error(`City ${userInput} not found`);
    const weatherData = await response.json();
    const city = weatherData.name;
    const weather = weatherData.weather[0].main;
    const temperature = Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32);
    return { city, weather, temperature };
  } catch (error) {
    alert(error);
    return null;
  }
}
