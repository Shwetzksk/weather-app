import React,{useEffect} from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { connect } from 'react-redux';
import { loadingAction,loadedAction,loadErrorAction,loadErrorResolvedAction } from '../redux/loading/loading.action';
import { futureWeatherAction, todayWeatherAction } from '../redux/weather/weather.action.js';
import {locationAction} from '../redux/location/location.action.js'
import {renameWeatherData } from '../utility/reset-weather-data.util';

function Location(props) {

    const {setTodayWeather, setFutureWeather, setLocation, setLoading, setLoaded, setError } = props;
    
    async function getData({lat,long}) {
        try {
            const res = await fetch(`https://cors-anywhere-venky.herokuapp.com/www.metaweather.com/api/location/search/?lattlong=${lat},${long}`);
            const data = res.json();

            const { consolidated_weather, title } = data;

            const weatherData = renameWeatherData(consolidated_weather);

            //storing in redux state
            setTodayWeather({ ...weatherData[0] });
            setFutureWeather([...weatherData.slice(1)]);
            setLocation(title);

            setLoaded();

        } catch (err) {
            setLoaded();
            setError(`Sorry! unable get weather info for this location`);
        }
    }

    function getLocation() {
        console.log('Location clicked')
        setLoading()
        navigator.geolocation.getCurrentPosition(function (position){
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
            getData({ lat: latitude, long: longitude });
        }, function () {
            setLoaded();
            
            setError(`Sorry! We are unable to get your location`);
    });
    }

    
    
    return (
        <div className="w-7 h-7 rounded-full cursor-pointer grid place-items-center bg-search text-primary " title="Set to my location" onClick={getLocation}>
            <BiCurrentLocation/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setTodayWeather: weather => dispatch(todayWeatherAction(weather)),
  setFutureWeather: weather => dispatch(futureWeatherAction(weather)),
  setLocation: location => dispatch(locationAction(location)),
  setLoading: () => dispatch(loadingAction()),
  setLoaded: () => dispatch(loadedAction()),
  setError: (message) => dispatch(loadErrorAction(message)),
  setErrorResolved: () => dispatch(loadErrorResolvedAction()),

})

export default connect(null,mapDispatchToProps)(Location)
