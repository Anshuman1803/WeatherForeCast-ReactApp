import React from 'react'
import { Link } from 'react-router-dom';

function DisplayWeatherDetails(props) {
    const data = props.value;
    const newDate = new Date();
    const currentDate = newDate.getDate();
    const filteredData = data.list.filter((item, index) => Number(item.dt_txt.split(" ")[0].split("-")[2])=== Number(currentDate));

    const handleHideShow = (e) => {
        let foreCastContainer = document.querySelector(".weatherForcastContainer");
        let showForeCastBtn = document.querySelector(".showForeCastBtn");
        foreCastContainer.classList.toggle("activeForeCastContainer");
        showForeCastBtn.textContent = `${foreCastContainer.classList.contains("activeForeCastContainer") ? "Hide" : 'Show'} Next Five Days Forecast`;
    }
    return (
        <section className='WeatherContainer'>
            <div className="currentWeatherContainer">
                <div className="cityNameBox">
                    <h1 className='cityName'>{data.city.name} <span className='weatherMain'>{data.list[0].weather[0].main}</span></h1>

                    <h2 className='tempLabel'>{Math.floor(data.list[0].main.temp - 273.15)}<sup>°C</sup></h2>
                    <div className="iconContainer">
                        <img className='weatherIcon' src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} alt="ImageNhaihai" />
                        <span className='weatherDesc'>{data.list[0].weather[0].description}</span>
                    </div>

                </div>

                <div className='currentWeatherInfoContainer'>

                    <div className="infoBox">
                        <p className="infoHeading">Wind Speed</p>
                        <i className="fa-solid fa-wind WeatherinfoIcon "></i>
                        <p className='infodata'>{data.list[0].wind.speed} Km/h</p>
                    </div>

                    <div className="infoBox">
                        <p className="infoHeading">Feel Like</p>
                        <i className="fa-solid fa-temperature-low"></i>
                        <p className='infodata'>{Math.floor(data.list[0].main.feels_like - 273.15)}<sup>°C</sup></p>
                    </div>

                    <div className="infoBox">
                        <p className="infoHeading">Visibility</p>
                        <i className="fa-solid fa-eye"></i>
                        <p className='infodata'>{Number(data.list[0].visibility) / 1000} Km</p>
                    </div>

                    <div className="infoBox">
                        <p className="infoHeading">Humidity</p>
                        <i className="fa-solid fa-shower"></i>
                        <p className='infodata'>{data.list[0].main.humidity}%</p>
                    </div>
                </div>

                <h3 className='forCaseHeading'>Today's Forcast</h3>
                <div className="todayForcastContainer">
                    {
                        filteredData.length > 0 ?filteredData.map((item, index) => {
                            return <div className="TforecastBox" key={index}>
                                <p className="TforeCastTime">{(item.dt_txt.split(" ")[1])}</p>
                                <img className='TforeCastICon' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="ImageNhaihai" />
                                <h2 className='TforeCasttempLabel'>{Math.floor(item.main.temp - 273.15)}<sup>°C</sup></h2>
                            </div>
                        }):<p>There is No Data</p>
                    }
                </div>

                <button className='showForeCastBtn' onClick={handleHideShow}>Show Next Five Days Forecast</button>

            </div>

            <div className="weatherForcastContainer">
                <h2 className='weatherForecastHeading'>Forecast Information <i className="fa-solid fa-xmark hideButton"></i></h2>

                <Link className="forecastBox" state={data} to={`/WeatherForeCasting/${data.list[6].dt_txt.split(" ")[0]}`}>
                    <p className="dateLabel">{(data.list[6].dt_txt.split(" ")[0].split("-").slice(1, 3).reverse().join("/"))}</p>

                    <div className="iconDescBox">
                        <img className='forecastIcon' src={`https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`} alt="ImageNhaihai" />
                    </div>

                    <p className="foreCastTemp">
                        {Math.floor(data.list[6].main.temp - 273.15)}<sup>°C</sup>
                    </p>

                </Link>

                <Link className="forecastBox" state={data} to={`/WeatherForeCasting/${data.list[14].dt_txt.split(" ")[0]}`}>
                    <p className="dateLabel">{(data.list[14].dt_txt.split(" ")[0].split("-").slice(1, 3).reverse().join("/"))}</p>

                    <div className="iconDescBox">
                        <img className='forecastIcon' src={`https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png`} alt="ImageNhaihai" />
                    </div>

                    <p className="foreCastTemp">
                        {Math.floor(data.list[14].main.temp - 273.15)}<sup>°C</sup>
                    </p>

                </Link>

                <Link className="forecastBox" state={data} to={`/WeatherForeCasting/${data.list[22].dt_txt.split(" ")[0]}`}>
                    <p className="dateLabel">{(data.list[22].dt_txt.split(" ")[0].split("-").slice(1, 3).reverse().join("/"))}</p>

                    <div className="iconDescBox">
                        <img className='forecastIcon' src={`https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png`} alt="ImageNhaihai" />
                    </div>

                    <p className="foreCastTemp">
                        {Math.floor(data.list[22].main.temp - 273.15)}<sup>°C</sup>
                    </p>

                </Link>

                <Link className="forecastBox" state={data} to={`/WeatherForeCasting/${data.list[30].dt_txt.split(" ")[0]}`}>
                    <p className="dateLabel">{(data.list[30].dt_txt.split(" ")[0].split("-").slice(1, 3).reverse().join("/"))}</p>

                    <div className="iconDescBox">
                        <img className='forecastIcon' src={`https://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png`} alt="ImageNhaihai" />
                    </div>

                    <p className="foreCastTemp">
                        {Math.floor(data.list[30].main.temp - 273.15)}<sup>°C</sup>
                    </p>

                </Link>

                <Link className="forecastBox" state={data} to={`/WeatherForeCasting/${data.list[38].dt_txt.split(" ")[0]}`}>
                    <p className="dateLabel">{(data.list[38].dt_txt.split(" ")[0].split("-").slice(1, 3).reverse().join("/"))}</p>

                    <div className="iconDescBox">
                        <img className='forecastIcon' src={`https://openweathermap.org/img/wn/${data.list[38].weather[0].icon}@2x.png`} alt="ImageNhaihai" />
                    </div>

                    <p className="foreCastTemp">
                        {Math.floor(data.list[38].main.temp - 273.15)}<sup>°C</sup>
                    </p>

                </Link>

            </div>

        </section>
    )
}

export default DisplayWeatherDetails
