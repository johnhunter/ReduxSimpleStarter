import React, { Component } from 'react';
import Chart from './chart';

const kelvinToCelcius = val => (Number(val) - 273).toFixed(1);

class WeatherList extends Component {
  renderCityWeather(data) {
    const name = data.city.name;
    const temps = data.list.map(weather => kelvinToCelcius(weather.main.temp));
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" units="C"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover weather-list">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderCityWeather)}
        </tbody>
      </table>
    );
  }
}

export default WeatherList;
