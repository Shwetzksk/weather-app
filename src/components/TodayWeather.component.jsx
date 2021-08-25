import React,{useEffect} from 'react';
import clouds from '../images/Cloud-background.png';
import { MdLocationOn } from 'react-icons/md';
import {setWeatherImage} from '../utility/set-weather-image.util.js'

function TodayWeather(props) {

    const { weatherState, day, temp, location,celsius } = props;
    
   

    return (
        <section className="">
            <div className="w-full relative bg-center bg-no-repeat h-80 bg-cover flex items-center justify-center my-10" >
                <div className="absolute opacity-10 w-full h-80">
                    <img src={clouds} alt="clouds" className=" object-center object-cover w-full h-full"/>
                </div>
                <div className="w-40 h-40 mx-auto">
                    <img src={setWeatherImage(weatherState.abbr)} alt={ weatherState.name} className="w-full h-full mx-auto"/>
                </div>
            </div>

            <div className="text-center my-10">
                <div className="text-4xl flex items-center justify-center font-medium">
                    {celsius?Math.round(temp.c.num):Math.round(temp.f.num) }
                   <span className="text-secondary text-2xl mt-10 font-normal">&deg;{celsius? 'C' : 'F'}</span>
                </div>
                               
            </div>

            <div className="my-14">
                <p className="text-center text-secondary font-semibold text-xl">{weatherState.name }</p>
            </div>

            <div className="text-secondary mt-20">
                <div className="flex text-sm font-medium justify-center items-center my-5">
                    <p>Today</p>
                    <p className="px-3">.</p>
                    <p>{ day}</p>
                </div>

                <div className="flex justify-center items-center font-semibold my-5">
                    <span className="pr-2 text-lg"><MdLocationOn /></span>
                    <p>{location}</p>
                </div>
            </div>
        </section>
    )
}

export default TodayWeather
