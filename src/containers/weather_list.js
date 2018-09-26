import { connect } from 'react-redux';
import WeatherList from '../components/weather_list';

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
