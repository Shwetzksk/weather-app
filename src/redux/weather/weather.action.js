import types from '../action.types';

export function futureWeatherAction(data) {
    return {
        type: types.FUTURE_WEATHER,
        payload:data,
    }
}

export function todayWeatherAction(data) {
    return {
        type: types.TODAY_WEATHER,
        payload:data,
    }
}

export function changeToCelsiusAction() {
    return {
        type: types.change.CHANGE_TO_CELSIUS
    }
}

export function changeToFahrenheitAction() {
    return {
        type: types.change.CHANGE_TO_FAHRENHEIT
    }
}