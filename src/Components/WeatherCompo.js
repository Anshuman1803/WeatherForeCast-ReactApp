import { useRef, useEffect, useState, lazy, Suspense } from 'react';
import axios from 'axios';
let DisplayWeatherDetails = lazy(() => import('./DisplayWeatherDetails'))
function WeatherCompo() {
    let [weatherData, setWeatherData] = useState(null);
    let [cityName, setCityName] = useState('patna')
    let searchInputRef = useRef();

    useEffect(() => {
        searchInputRef.current.focus();
    }, []);


    let handleSearch = (e) => {
        setCityName(searchInputRef.current.value);
        searchInputRef.current.value= ""
        searchInputRef.current.focus();
    }

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=ef6c520e86f78c747a590411d51c38ab`)
        .then((response) => {
            setWeatherData(response.data);
        }).catch((err)=>{
            setWeatherData(err.response.data);
        })
    }, [cityName]);


    return (
        <main className='mainContainer'>
            <header>
                <input type="text" className="searchInput" placeholder='Search Your City' ref={searchInputRef} />
                <button className='SearchBtn' onClick={handleSearch}>Search</button>
            </header>
           {
             Number(weatherData?.cod) === 200 ? <>
             {
                weatherData ? <Suspense fallback={<p className='loader'>Data Is Loading</p>}>

                    <DisplayWeatherDetails value={weatherData} />

                </Suspense> : <p className='loader'>Data Loading....</p>

            }
            </> : <p className="loader">{weatherData?.message} {weatherData?.cod}</p>
           }
        </main>
    )
}

export default WeatherCompo
