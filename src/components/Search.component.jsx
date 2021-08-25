import React, { useState,useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdSearch } from 'react-icons/md';
import { connect } from 'react-redux';
import { searchLocationResult } from '../utility/search.util';
import { futureWeatherAction, todayWeatherAction } from '../redux/weather/weather.action';
import { locationAction } from '../redux/location/location.action';
import {loadingAction,loadedAction,loadErrorAction,loadErrorResolvedAction } from '../redux/loading/loading.action';
import { renameWeatherData } from '../utility/reset-weather-data.util';
function Search(props) {

    const { error,setTodayWeather, setFutureWeather,setLocation,setLoading,setLoaded,setError,close,setErrorResolved} = props;
    const search = useRef(null);

    async function getWeatherData(location) {
        setLoading();
        try {
            const data = await searchLocationResult(location);
            const { consolidated_weather, title} = data;
      
            const weatherData = renameWeatherData(consolidated_weather);
            
            //storing in redux state
            setTodayWeather({ ...weatherData[0] });
            setFutureWeather([...weatherData.slice(1)]);
            setLocation(title);

            setLoaded();
            if (error) {
                setErrorResolved();
            }
        } catch (err) {
            const message = `Sorry! Could not find weather data for this search "${location}"`;
            setError(message);
            setLoaded();
        }
    }

    function onSearchClick(e) {
        e.preventDefault();
        if (search.current.value) {
            getWeatherData(search.current.value)
        }
        
    }

    return (
        <>
            <div className="absolute text-sm text-primary bg-secondary w-full h-full z-40 flex flex-col items-center">
                <IoClose className="w-7 h-7 absolute top-2 right-2 cursor-pointer" onClick={close}/>
                <div className="mt-16 ">
                    <form className="flex items-center">
                        <div className="flex items-center border-gray-300 border w-8/12 px-5 py-2">
                            <label className="px-2"><MdSearch className="w-5 h-5"/></label>
                            <input className="bg-transparent focus:outline-none" placeholder="search location " ref={search}/>
                        </div>
                        <button className="bg-btn py-2.5 px-5 text-sm ml-3" onClick={onSearchClick}>Search</button>
                        
                    </form>
                </div>

                <div className="flex flex-col w-full mt-10">
                    <ul className="flex flex-col items-center text-sm">
                        <li className=" border border-gray-500 hover:border-gray-300 cursor-pointer w-8/12 my-5 py-2.5 px-3 " onClick={()=>getWeatherData('london') }>London</li>
                        <li className=" border border-transparent hover:border-gray-300 cursor-pointer w-8/12 my-5 py-2.5 px-3 " onClick={()=>getWeatherData('barcelona') }>Barcelona</li>
                        <li className=" border border-transparent hover:border-gray-300 cursor-pointer w-8/12 my-5 py-2.5 px-3 " onClick={()=>getWeatherData('long beach') }>Long Beach</li>
                    </ul>
                </div>
            </div>
            
        </>
        
    )
}
const mapStateToProps = (state) => ({
  error:state.error
})
const mapDispatchToProps = (dispatch)=>({
  setTodayWeather: weather => dispatch(todayWeatherAction(weather)),
  setFutureWeather: weather => dispatch(futureWeatherAction(weather)),
  setLocation: location => dispatch(locationAction(location)),
  setLoading: () => dispatch(loadingAction()),
  setLoaded: () => dispatch(loadedAction()),
  setError: (message) => dispatch(loadErrorAction(message)),
  setErrorResolved: () => dispatch(loadErrorResolvedAction()),
})

export default connect(mapStateToProps,mapDispatchToProps) (Search)
