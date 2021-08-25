import React from 'react';

import { setWeatherImage } from '../utility/set-weather-image.util.js';

function DailyWeather(props) {

  const { day, temp, weatherState,celsius } = props;
  const img = setWeatherImage(weatherState.abbr)

    return (
       <div className=" text-sm font-medium">
          <div className="w-28 h-full  bg-secondary text-center flex flex-col justify-evenly py-2">
            <p className="text-primary ">{day}</p>
            <img src={img} alt={weatherState.name} className="w-14 mx-auto my-5 " />
            <div className=" flex justify-between px-2">
              <span className="mr-2 ">
                {celsius?Math.round(temp.c.maxTemp):Math.round(temp.f.maxTemp)}&deg;{celsius?'C':'F'}
              </span>
              <span className="text-gray-500">
                {celsius?Math.round(temp.c.minTemp):Math.round(temp.f.minTemp)}&deg;{celsius?'C':'F'}
              </span>
            </div>
          </div>
        </div>
    )
}

export default DailyWeather
