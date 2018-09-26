import axios from 'axios';
import { OWM_API_KEY } from '../../config';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${OWM_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
