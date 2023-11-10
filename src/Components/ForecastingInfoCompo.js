import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Logo from '../Icon.png'

function ForecastingInfoCompo() {
  let navigateToHome = useNavigate();
  let currentDate = useParams().Date;
  let filteredData = useLocation().state?.list.filter((item) => item.dt_txt.split(" ")[0] === currentDate)
  return (
    <section className='FullWeatherInfoContainer'>
      <header>
        <img src={Logo} alt="WeatherLogo" className='AppLogo' />
        <h1>Weather Forecast : {currentDate}</h1>
      </header>

      <div className='currentWeatherInfoContainer'>

        <div className="infoBox">
          <p className='infoHeading'>{filteredData[0].weather[0].main}</p>
          <img className='weatherIcon' src={`https://openweathermap.org/img/wn/${filteredData[0].weather[0].icon}@2x.png`} alt="ImageNhaihai" />
          <p className='infodata'>{Math.floor(filteredData[0].main.temp - 273.15)}<sup>°C</sup></p>
        </div>

        <div className="infoBox">
          <p className="infoHeading">Wind Speed</p>
          <i className="fa-solid fa-wind WeatherinfoIcon "></i>
          <p className='infodata'>{filteredData[0].wind.speed} Km/h</p>
        </div>

        <div className="infoBox">
          <p className="infoHeading">Feel Like</p>
          <i className="fa-solid fa-temperature-low"></i>
          <p className='infodata'>{Math.floor(filteredData[0].main.feels_like - 273.15)}<sup>°C</sup></p>
        </div>

        <div className="infoBox">
          <p className="infoHeading">Visibility</p>
          <i className="fa-solid fa-eye"></i>
          <p className='infodata'>{Number(filteredData[0].visibility) / 1000} Km</p>
        </div>

        <div className="infoBox">
          <p className="infoHeading">Humidity</p>
          <i className="fa-solid fa-shower"></i>
          <p className='infodata'>{filteredData[0].main.humidity}%</p>
        </div>

      </div>

      <h3 className='forCaseHeading'>{currentDate} Forcast</h3>
      <div className="todayForcastContainer">
        {
          filteredData.filter((item, index) => index !== 0).map((item, index) => {
            return <div className="TforecastBox" key={index}>
              <p className="TforeCastTime">{(item.dt_txt.split(" ")[1])}</p>
              <img className='TforeCastICon' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="ImageNhaihai" />
              <h2 className='TforeCasttempLabel'>{Math.floor(item.main.temp - 273.15)}<sup>°C</sup></h2>
            </div>
          })
        }
      </div>
      <button className='showForeCastBtn' onClick={()=> navigateToHome("/")} >Go To Home Page</button>

    </section>
  )
}

export default ForecastingInfoCompo
