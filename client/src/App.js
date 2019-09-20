import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import "./weather-icons-wind.min.css";
// import "./weather-icons.min.css";
import "./weatherIcons/weather-icons-wind.css";
import "./weatherIcons/weather-icons.css";
import DateTime from "luxon/src/datetime.js";

class App extends Component {
  state = {
    data: null,
    cityInput: "",
    weather: []
  };

  cityInputOnChangeHandler = e => {
    this.setState({ cityInput: e.target.value });
  };
  submitButtonHandler = async () => {
    const response = await fetch(`/weatherAPI/${this.state.cityInput}`);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    console.log(body.hourly.data);
    this.setState({ weather: body.hourly.data });
  };

  getIcon = forecast => {
    console.log(forecast, " test");
    switch (forecast) {
      case "cloudy":
        return <i className="wi wi-cloudy" />;
      case "rain":
        return <i className="wi wi-rain" />;
      case "partly-cloudy-day":
        return <i className="wi wi-day-cloudy" />;
      case "partly-cloudy-night":
        return <i className="wi wi-night-cloudy" />;
      case "clear-day":
        return <i className="wi wi-day-sunny" />;
      case "clear-night":
        return <i className="wi wi-night-clear" />;
      default:
        return null;
    }
  };

  render() {
    const dataMap = this.state.weather.map(value => {
      const dateTimeString = DateTime.fromSeconds(value.time).toFormat("h a");
      return (
        <div className="weatherCard">
          <h1>{dateTimeString}</h1>
          <h2>{value.summary}</h2>
          {this.getIcon(value.icon)}
          <h3>
            Chance of rain: {Math.round(value.precipProbability * 100) + "%"}
          </h3>
        </div>
      );
    });
    return (
      <div className="appContainer">
        <h1 className='title'>Enter City Only Below</h1>
        <input onChange={this.cityInputOnChangeHandler} />
        <button onClick={this.submitButtonHandler}>Request Weather</button>
        <div className="weatherInfoDiv">{dataMap}</div>
      </div>
    );
  }
}

export default App;
