import React from 'react'
import { Routes, Route } from 'react-router-dom'
import WeatherCompo from './WeatherCompo'
import ForecastingInfoCompo from './ForecastingInfoCompo'

function WeatherRoute() {
    return (
        <Routes>
            <Route path='/' element={<WeatherCompo />} />
            <Route path='/WeatherForeCasting/:Date' element={<ForecastingInfoCompo />} />
        </Routes>
    )
}

export default WeatherRoute
