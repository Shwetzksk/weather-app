import types from '../action.types';

export function locationAction(data) {
    return {
        type: types.location.STORE_LOCATION,
        payload:data,
    }
}

export function geoLocationAction(location) {
    return {
        type: types.location.STORE_GEO_LOCATION,
        payload:location,
    }
}