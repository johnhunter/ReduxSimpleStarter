import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import SearchBar from '../components/search_bar';


function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null arg - component does not have dependency on redux state
export default connect(null, mapDispatchToProps)(SearchBar);
