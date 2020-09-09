import * as axios from "axios";
import { format, fromUnixTime } from "date-fns";

// api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={your api key}&units=imperial
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}&units=imperial
// api.openweathermap.org/data/2.5/forecast/daily?zip={zip code}&appid={your api key}&units=imperial
const apiBaseURL = "https://api.openweathermap.org/data/2.5/";
const apiKey = "869f031608a9c1e07efa2201d8cf2d6d";

const getCurrentWeatherFromZip = async function(zipcode) {
  try {
    // console.log('zipcode', zipcode);
    const endpoint = `${apiBaseURL}weather?zip=${zipcode}&appid=${apiKey}&units=imperial`;
    // console.log('endpoint', endpoint);
    const response = await axios.get(endpoint);

    const weather = parseResponse(response);
    weather.zipcode = zipcode;
    weather.error = false;
    weather.updated = new Date();
    return weather;
  } catch (error) {
    console.error(error);
    const weather = {
      zipcode,
      error: true
    };
    return weather;
  }
};

const getHourlyForecast = async function(zipcode) {
  try {
    // console.log('zipcode', zipcode);
    const endpoint = `${apiBaseURL}forecast?zip=${zipcode}&appid=${apiKey}&units=imperial`;
    console.log("endpoint", endpoint);
    // console.log('endpoint', endpoint);
    const response = await axios.get(endpoint);
    console.log("hourly response", response);

    const weather = parseResponse(response);
    weather.zipcode = zipcode;
    weather.error = false;
    return weather;
  } catch (error) {
    console.error(error);
    const weather = {
      zipcode,
      error: true
    };
    return weather;
  }
};

const parseResponse = response => {
  // console.log('response', response);
  console.log("response.data", response.data);
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];

  let weatherData = {};
  if (response.data.list) {
    // more details page, 3-hour forecast response
    console.log("HIT");

    // const timezone = response.data.city.timezone;
    weatherData.list = [];
    weatherData.city = response.data.city;
    response.data.list.forEach(hour => {
      const timestamp = fromUnixTime(hour.dt);
      const formattedTime = format(timestamp, "haa");
      const formattedDay = format(timestamp, "EEEE");

      // console.log("hour", hour);
      const hourData = {
        temp: hour.main.temp,
        time: formattedTime,
        day: formattedDay,
        weather: hour.weather[0].main,
        rain: hour.rain ? hour.rain : 0
      };
      weatherData.list.push(hourData);
    });
  } else {
    // home page, daily city response
    weatherData = {
      name: response.data.name,
      icon: response.data.weather[0].main,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      currentTemp: response.data.main.temp,
      humidity: response.data.main.humidity
    };
  }
  console.log("weatherData", weatherData);
  return weatherData;
};

export const apiService = {
  getCurrentWeatherFromZip,
  getHourlyForecast
};
