import { combineReducers } from "redux";
import { storeTodayWeatherReducer, storeFutureWeatherReducer,changeTempDegreeReducer } from './weather/weather.reducer';
import { storeLocationReducer,storeGeoLocationReducer } from './location/location.reducer';
import { loadingReducer,loadingErrorReducer } from './loading/loading.reducer';

const allReducers = combineReducers({
    todayWeather: storeTodayWeatherReducer,
    futureWeather: storeFutureWeatherReducer,
    celsius:changeTempDegreeReducer,
    location: storeLocationReducer,
    geoLocation:storeGeoLocationReducer,
    loading: loadingReducer,
    error:loadingErrorReducer,
});

export default allReducers;