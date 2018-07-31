import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData){
        console.log(cityData);
        return (
            <tr key={cityData.name}>
                <td>{cityData.name}</td>
                <td>{Math.round(cityData.main.temp - 273.15)}°C</td>
                <td>{cityData.main.pressure} hPa</td>
                <td>{cityData.main.humidity} %</td>
            </tr>
        )

    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);