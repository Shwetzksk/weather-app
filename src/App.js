import React, {useState, useEffect,Fragment } from 'react';
import { connect } from 'react-redux';
import { ImSpinner5 } from 'react-icons/im';
import { BiError } from 'react-icons/bi';

import './App.css';


import DailyWeather from './components/DailyWeather.component';
import TodayHighlight from './components/TodayHighlight.component';
import TempConvertor from './components/TempConvertor.component.jsx';
import TodayWeather from './components/TodayWeather.component';
import Search from './components/Search.component'
import Location from './components/Location.component';

import { futureWeatherAction, todayWeatherAction } from './redux/weather/weather.action';
import { locationAction } from './redux/location/location.action';
import {loadingAction,loadedAction,loadErrorAction,loadErrorResolvedAction } from './redux/loading/loading.action';
import { renameWeatherData } from './utility/reset-weather-data.util';


function App(props) {

  const { todayWeather, futureWeather,celsius, location,loading,error, setTodayWeather, setFutureWeather,setLocation,setLoading,setLoaded,setError} = props;
  const [search, setSearch] = useState(false);
  
  //for fetching weather data from API 
  const getWeatherData = async (location) => {

    
    try {
      const res = await fetch(`https://cors-anywhere-venky.herokuapp.com/www.metaweather.com/api/location/2295386/`);
      const data = await res.json();
      const { consolidated_weather, title} = data;
      
      const weatherData = renameWeatherData(consolidated_weather);
      
      //storing in redux state
      setTodayWeather({ ...weatherData[0] });
      setFutureWeather([...weatherData.slice(1)]);
      setLocation(title);

      setLoaded();
      
     
    } catch (err) {
      const message = 'Sorry! Something went wrong'
      setError(message);
      
    }

  }
  useEffect(() => {
    setLoading();
    getWeatherData();
  }, [])
 
 



  return (
    <section className={`App ${loading || error.status ? 'h-screen':''}   grid grid-cols-12 place-items-center bg-primary text-primary text-sm font-display`}>
      <aside className="col-start-1 col-end-4 bg-secondary h-full w-full relative">
        {search && <Search close={()=> setSearch(false) }/>}
        <div className="flex justify-between items-center px-10 my-10">
          <div className=" text-sm text-primary ">
                <form className="w-40 bg-search p-1 text-primary font-medium">
                    <input type="search" onClick={()=> setSearch(true)} placeholder="Search for places" className="w-full focus:outline-none bg-search text-primary text-center"/>
                </form>
            </div>
          <Location/>
        </div>  
        

        {loading && <div className=" grid place-items-center h-56 mt-24">
          <div className="text-primary">
            <ImSpinner5 className="animate-spin w-10 h-10" />
          </div>
        </div>}

        {!loading && !error.status && <TodayWeather {...todayWeather} location={location} celsius={celsius} />}
        
         {!loading && error.status && <div className="text-center h-56 ">
          <div className=" text-lg font-medium flex items-center justify-center">
            <span className="pr-3 text-red-700"><BiError className="w-10 h-10"/></span>
            <p>{error.message}</p>
          </div>
        </div>}
        
      </aside>
      <main className=" col-start-4 col-end-13 mx-auto bg-primary my-10">
        
        { loading && <div className=" grid place-items-center h-56 ">
          <div className="text-primary">
            <ImSpinner5 className="animate-spin w-10 h-10" />
          </div>
        </div>}

        {!loading && !error.status && <Fragment>
          <span className="my-5">
            <TempConvertor/>
          </span>
          
          <div className="grid grid-cols-5 gap-5 my-10">
            {futureWeather.map(weather => <DailyWeather {...weather} key={weather.id} celsius={celsius} />)}
          </div>
          
          <div className="mt-16">
            <h1 className="text-lg font-bold my-5">Today's Highlights</h1>
            <TodayHighlight {...todayWeather } />
          </div>
          
        </Fragment>}

        {!loading && error.status && <div className="text-center h-56 ">
          <div className=" text-lg font-medium flex items-center justify-center">
            <span className="pr-3 text-red-700"><BiError className="w-10 h-10"/></span>
            <p>{error.message}</p>
          </div>
       </div>}
        
        
        
        


        <footer className={`text-center text-xs py-10 ${loading?'fixed left-1/2 bottom-0':'mt-10'} mx-auto`}>
          <p>created by <a href="https://github.com/Shwetzksk" target="_blank" rel="nopreference noreferrer">Shweta</a> - <a href="https://devchallenges.io/" target="_blank" rel="nopreference noreferrer">DevChalleneges</a></p>
        </footer>
        

      </main>

      
    </section>
  );
}




const mapStateToProps = (state) => ({
  todayWeather: state.todayWeather,
  futureWeather: state.futureWeather,
  celsius: state.celsius,
  location: state.location,
  loading: state.loading,
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

export default connect(mapStateToProps,mapDispatchToProps)(App);