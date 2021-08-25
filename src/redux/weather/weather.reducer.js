export function storeTodayWeatherReducer(state = {}, action) {

    switch (action.type) {
        case 'STORE_TODAY_WEATHER_DATA':
            return action.payload;
        default:
            return state;
   }
}

export function storeFutureWeatherReducer(state = [], action) {
     switch (action.type) {
        case 'STORE_FUTURE_WEATHER_DATA':
            return action.payload;
        default:
            return state;
   }
}

export function changeTempDegreeReducer(state = true, action) {
    switch (action.type) {
        case 'CHANGE_TO_FAHRENHEIT':
            return false;
        case 'CHANGE_TO_CELSIUS':
            return true;
        default:
            return state;
    }
}