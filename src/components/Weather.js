import React,{ Component } from 'react';
class Weather extends Component {
    enterWeather = () => {
        if (this.props.state.city !== "") {
            return (
                <>
                    <div>Location : {this.props.state.city} , {this.props.state.country}.</div>
                    <div>Temperature : {this.props.state.temp}.</div>
                    <div>Humidity : {this.props.state.humidity}.</div>
                    <div>Conditions : {this.props.state.description}.</div>
                </>
            )
        }
        else {
            return (
                <>
                    <div>Enter City And Country</div>
                </>
            )
        }
    }
  render() {
    return (
      <div className='weather'>
            {this.enterWeather()}
      </div>
    )
  }
}

export default Weather;
