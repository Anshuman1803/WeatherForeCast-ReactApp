import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ForecastingInfoCompo() {
    let currentDate = useParams().Date;
    let filteredData = useLocation().state.list.filter((item)=> item.dt_txt.split(" ")[0] === currentDate)
    console.log(filteredData)
  return (
    <section className='FullWeatherInfoContainer'>

        {currentDate}
      
    </section>
  )
}

export default ForecastingInfoCompo
