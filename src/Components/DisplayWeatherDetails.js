import React from 'react'

function DisplayWeatherDetails(props) {
    const data = props.value;
    console.log(data)
    const newDate = new Date();
    const currentDate = newDate.getDate();
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
                        <i className="fa-solid fa-wind"></i>
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
                        <p className='infodata'>{Number(data.list[0].visibility)/1000} Km</p>
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
                        data.list.filter((item, index) => Number(item.dt_txt.split(" ")[0].split("-")[2].slice("1")) === Number(currentDate)).map((item, index) => {
                            return <div className="TforecastBox" key={index}>
                                <p className="TforeCastTime">{(item.dt_txt.split(" ")[1])}</p>
                                <img className='TforeCastICon' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="ImageNhaihai" />
                                <h2 className='TforeCasttempLabel'>{Math.floor(item.main.temp - 273.15)}<sup>°C</sup></h2>
                            </div>
                        })
                    }
                </div>

            </div>

            <div className="weatherForcastContainer">


            </div>

        </section>
    )
}

export default DisplayWeatherDetails
