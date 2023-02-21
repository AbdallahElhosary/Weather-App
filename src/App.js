import React,{ Component } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';


const Key = "e36ed364400282e43250b6c4c0274d44";

// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {
  state = {
    temp: "",
    humidity: "",
    country: "",
    city: "",
    description:"",
    error:"",
  }
  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    let Api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${Key}`)
    let data = await Api.json();
    if (city && country) {
      this.setState({
      temp: data.main.temp,
      humidity: data.main.humidity,
      country:data.sys.country,
      city: data.name,
      description:data.weather[0].description,
      error:"",
      })
      e.target.elements.city.value = "";
      e.target.elements.country.value = "";
    }
    else {
      this.setState({
      temp: "",
      humidity: "",
      country: "",
      city: "",
      error:"",
    })
    }
    
  }
  render() {
    return (
      <div className='container'>
        <Form getWeather={this.getWeather } />
        <Weather state={this.state } />
      </div>
    )
  }
}

export default App;
